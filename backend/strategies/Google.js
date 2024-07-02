import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth'
import User from '../models/User.js';
import { getUserByEmail } from '../services/User.js';
import passport from 'passport';
import { config } from 'dotenv'

config()

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || ''
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || ''
const callbackURL = `${process.env.BACKEND_URL}/auth/google/callback`

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: callbackURL,
    scope: ['profile']
},
    async function (request, accessToken, refreshToken, profile, done) {

        const user = await getUserByEmail(profile._json.email)
        if (user) return done(null, user)
        const newUser = new User({
            email: profile._json.email,
            fullName: profile.displayName,
            accountType: 'user',
            googleId: profile.id

        })
        await newUser.save()
        return done(null, newUser)
    }
));