/**
 * @swagger
 * /user/search-people:
 *   get:
 *     summary: Search users by fullName or email
 *     description: Search for users whose `fullName` or `email` contains the query string.
 *     tags:
 *       - User
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: The query string used to search for users by fullName or email.
 *     responses:
 *       200:
 *         description: A list of user IDs matching the search criteria.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: string
 *                     description: User ID
 *               example:
 *                 data:
 *                   - "5f8d0d55b54764421b7156c9"
 *                   - "5f8d0d55b54764421b7156d2"
 *       400:
 *         description: Invalid query parameter.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 timestamp:
 *                   type: string
 *                   example: "2023-10-15T12:00:00Z"
 *                 path:
 *                   type: string
 *                   example: "/user/search-people"
 *                 code:
 *                   type: string
 *                   example: "VALIDATION_FAILED"
 *                 error:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       example: "ERR_INVALID_QUERY"
 *       500:
 *         description: Failed to search users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 timestamp:
 *                   type: string
 *                   example: "2023-10-15T12:00:00Z"
 *                 path:
 *                   type: string
 *                   example: "/user/search-people"
 *                 code:
 *                   type: string
 *                   example: "ERR_GET_DATA_FAILED"
 *                 error:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       example: "Internal Server Error"
 */
