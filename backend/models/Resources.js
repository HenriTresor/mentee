import { Schema, model } from 'mongoose'


const resourceSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: false
    }
}, {

    timestamps: true
})


const Resource = model("resources", resourceSchema) 
export default Resource