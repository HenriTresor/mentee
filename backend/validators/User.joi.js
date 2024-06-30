import Joi from 'joi'

export const LoginValidObject = Joi.object({
    email: Joi.string().email().min(6).max(155).required(),
    password: Joi.string().min(6).max(65).required(),
})

export const UserValidObject = Joi.object({
    email: Joi.string().email().min(6).max(155).required(),
    password: Joi.string().min(6).max(65).required(),
    fullName: Joi.string().min(4).max(255).required(true)
})

