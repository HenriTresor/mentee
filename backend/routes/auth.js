import { Router } from "express";
import { loginController } from "../controllers/User.js";

const router = Router()

/**
 * Registers a POST route for the '/login' endpoint.
 * When a POST request is made to this endpoint, the 'loginController' function is called.
 *
 * @param {import('express').Router} router - The Express router object.
 * @param {import('../controllers/User').loginController} loginController - The controller function to handle the login logic.
 * @returns {void}
 */
router.post('/login', loginController)

// Export the router
export default router;