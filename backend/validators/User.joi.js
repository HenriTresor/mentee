import Joi from 'joi'

export const LoginValidObject = Joi.object({
    email: Joi.string().email().min(6).max(155).required(),
    password: Joi.string().min(6).max(65).required(),
})

export const UserValidObject = Joi.object({
    email: Joi.string().email().min(6).max(155).required(),
    password: Joi.string().min(6).max(65).required(),
    firstName: Joi.string().min(3).max(100).required(),
    lastName: Joi.string().min(3).max(100).required()
})

