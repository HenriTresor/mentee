import jwt from 'jsonwebtoken'
import User from '../models/User.js'
import createToken from './createToken.js'

export default async (req, res, next) => {
    try {

        const token = req.headers['authorization'].split(' ')[1]
        if (!token) return next()
        const decodedToken = await jwt.verify(token, process.env.ACCESS_SECRET_TOKEN || 'my-secret')
        if (!decodedToken.id) return next(new Error('Token miss id'))
        let user = await User.findById(decodedToken.id)
        const access_token = await createToken(user.id)
        return res.status(200).json({
            status: true,
            user,
            token: access_token
        })
    } catch (error) {
        console.log('error verifying token: ', error.message)
    }
}