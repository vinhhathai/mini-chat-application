/**
 * @swagger
 * /chat/search-room:
 *   get:
 *     summary: Search for chat rooms by name
 *     description: Allows users to search for chat rooms by a query string that matches the room name.
 *     tags:
 *       - Chat
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         description: The search term to find matching rooms by name.
 *         schema:
 *           type: string
 *           example: "General"
 *     responses:
 *       200:
 *         description: List of rooms matching the search criteria.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         description: The unique ID of the room.
 *                         example: "5f8d0d55b54764421b7156c9"
 *                       name:
 *                         type: string
 *                         description: The name of the room.
 *                         example: "General Chat"
 *                       image:
 *                         type: string
 *                         description: The URL of the room's image.
 *                         example: "/upload/roomImage/default.jpg"
 *       400:
 *         description: Validation failed due to an invalid or missing query parameter.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 *                   example: "2023-10-15T12:00:00Z"
 *                 path:
 *                   type: string
 *                   example: "/room/search-room"
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
 *         description: Server error while searching for rooms.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 *                   example: "2023-10-15T12:00:00Z"
 *                 path:
 *                   type: string
 *                   example: "/room/search-room"
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
