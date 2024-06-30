import expressAsyncHandler from 'express-async-handler'
import { LoginValidObject, UserValidObject } from '../validators/User.joi.js'
import bcrypt from 'bcrypt'
import createToken from '../utils/createToken.js'
import { createUser, getUserByEmail } from '../services/User.js'
import _ from 'lodash'

export const loginController = expressAsyncHandler(async (req, res, next) => {
    const { email, password } = req.body
    const { error, value } = LoginValidObject.validate({ email, password })
    if (error) {
        return next(new Error(error.details[0].message))
    }

    let user = await getUserByEmail(value.email)
    if (!user) return next(new Error(`User with email ${value.email} was not found. Try again`))

    const pwdCompare = await bcrypt.compare(password, user.password)
    if (!pwdCompare) return next(new Error(`Password or email is not correct`))

    user = _.omit(user, 'password')
    const token = await createToken(user._id)
    res.status(200).json({
        status: true,
        token,
        user
    })
})


export const addUser = expressAsyncHandler(async (req, res, next) => {
    const { firstName, lastName, email, password } = req.body
    const { error, value } = UserValidObject.validate({ firstName, lastName, email, password })
    if (error) return next(new Error(error.details[0].message))

    const user = {
        email: value.email,
        password: value.password,
        firstName: value.firstName,
        lastName: value.lastName
    }

    const newUser = await createUser(user)
    if (!newUser._id) return next(new Error("error adding user. Please try again"))

    const token = await createToken(newUser._id)
    res.status(200).json({
        status: true,
        token,
        user: _.omit(newUser, 'password')
    })
})