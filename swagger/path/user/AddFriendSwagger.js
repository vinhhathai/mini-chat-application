/**
 * @swagger
 * /user/add-friend:
 *   post:
 *     summary: Add a friend
 *     description: Adds a friend by friend_id for the logged-in user. Requires accessToken.
 *     security:
 *       - BearerAuth: []
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               friend_id:
 *                 type: string
 *                 description: The ID of the user to be added as a friend.
 *             required:
 *               - friend_id
 *     responses:
 *       201:
 *         description: Friends added successfully.
 *       400:
 *         description: Validation failed. (e.g., friend_id is the same as user_id or friend already added)
 *       404:
 *         description: User not found. (e.g., user or friend ID not valid)
 *       500:
 *         description: Internal server error.
 */
