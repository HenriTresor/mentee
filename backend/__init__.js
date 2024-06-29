import express from 'express'
import http from 'http'
import db from './config/db.js'
import morgan from 'morgan'
import ResourceRouter from './routes/Resource.js'
import Resource from './models/Resources.js'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 8080
const server = http.createServer(app)
const ROOT_ROUTE = '/api/v1'


app.use(cors())
app.use(morgan('dev'))


// routes

app.use(`${ROOT_ROUTE}/resources`, ResourceRouter)

db().then(() => {
    server.listen(PORT, () => {
        console.log(`server started running on port ${PORT}`)
    })
}).catch((error) => {
    console.log('error connecting to mongodb server: ', error.message)
    process.exit(1)
})



app.use((err, req, res, next) => {

    res.status(500).json({
        status: false,
        message: err.message
    })
})


app.all('*', async (req, res) => {
    return res.status(404).json({
        status: false,
        message: "resource not found"
    })
})
