import express from 'express'
import http from 'http'
import db from './config/db.js'
import morgan from 'morgan'
import Resource from './models/Resources.js'
import cors from 'cors'
import ResourceRouter from './routes/Resource.js'
import authRouter from './routes/auth.js'
import userRouter from './routes/User.js'
import passport from 'passport'
import './strategies/Google.js'
import { config } from 'dotenv'
import session from 'express-session'

config() 


const app = express()
const PORT = process.env.PORT || 8080
const server = http.createServer(app)
const ROOT_ROUTE = '/api/v1'

app.use(session({ secret: process.env.SESSION_SECRET, saveUninitialized: true, resave: false }))

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

// routes

app.use(`${ROOT_ROUTE}/resources`, ResourceRouter)
app.use(`${ROOT_ROUTE}/auth`, authRouter)
app.use(`${ROOT_ROUTE}/users`, userRouter)
 

app.use(passport.initialize())
app.use(passport.session());


passport.serializeUser(function (user, cb) {
    cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
})


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
