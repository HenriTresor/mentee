import mongoose from 'mongoose'


export default async () => {
    try {

        await mongoose.connect(process.env.DB_URL || "mongodb://127.0.0.1:27017/mentee", {
        })

        console.log('successfully connected to mongodb server')
    } catch (error) {

        console.log("error connecting to mongodb server: ", error.message)
        process.exit(1)
    }
} 