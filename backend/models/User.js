import { Schema, model } from 'mongoose'
import { hash } from 'bcrypt'


const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true,
    }, 
    lastName: {
        type: String,
        required: true
    }
},

    {

        timestamps: true
    })

UserSchema.pre('save', async function () {
    try {
        const hashedPwd =  await hash(this.password, 10)
        this.password = hashedPwd
    } catch (error) {
        console.log('error hashing password:', error.message)
    }
})


const User = model('users', UserSchema)
export default User