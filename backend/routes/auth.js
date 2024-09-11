import { Router } from "express";
import { loginController } from "../controllers/User.js";
import passport from "passport";
import createToken from "../utils/createToken.js";
import verifyToken from "../utils/verifyToken.js";

const router = Router()

/**
 * Registers a POST route for the '/login' endpoint.
 * When a POST request is made to this endpoint, the 'loginController' function is called.
 *
 * @param {import('express').Router} router - The Express router object.
 * @param {import('../controllers/User').loginController} loginController - The controller function to handle the login logic.
 * @returns {void}
 */
router.post('/login', verifyToken, loginController)

router.get('/google', passport.authenticate('google', { scope: ['email', 'profile'] }))


router.get('/google/callback', passport.authenticate('google', {
    scope: ['email', 'profile'],
    failureRedirect: `${process.env.BACKEND_URL}/auth/google`,
}), async (req, res, next) => {
    const token = await createToken(req.user._id)
    res.redirect(`${process.env.FRONTEND_URL}?token=${token}&user=${JSON.stringify(req.user)}`)
})

// Export the router
export default router; 