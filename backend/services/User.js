import User from "../models/User.js";

export const getUserByEmail = async (email) => {
    try {
        const user = await User.findOne({ email })
        return user
    } catch (error) {
        throw new Error(error)
    }
}

export const createUser = async (user) => {
    try {

        const userExists = await User.findOne({ email: user.email })
        if (userExists) throw new Error(`user with email ${user.email} is already registered`)
        const newUser = new User(user)
        await newUser.save()
        return newUser
    } catch (error) {
        throw new Error(error)
    }
}