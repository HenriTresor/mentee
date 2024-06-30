import jwt from 'jsonwebtoken'


/**
 * This function generates a JWT token for a given user ID.
 *
 * @param {string} id - The unique identifier of the user.
 * @returns {Promise<string>} - A promise that resolves to the generated JWT token.
 * @throws Will throw an error if the JWT generation fails.
 * @example
 * const userId = '12345';
 * generateJwtToken(userId)
 *   .then(token => console.log(token))
 *   .catch(error => console.error(error));
 */
export default async (id) => {
    const token = jwt.sign({ id }, process.env.ACCESS_SECRET_TOKEN || 'my-secret', { expiresIn: '1w' });
    return token;
}