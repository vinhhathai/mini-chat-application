/**
 * @swagger
 * /chat/room:
 *   get:
 *     summary: Get rooms where the user is owner or member
 *     description: Retrieve a list of chat rooms where the user is either the owner or a member.
 *     tags:
 *       - Chat
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: A list of chat rooms where the user is owner or member.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Rooms fetched successfully"
 *                 rooms:
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
 *                       members:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             _id:
 *                               type: string
 *                               description: The unique ID of the member.
 *                               example: "5f8d0d55b54764421b7156c2"
 *                             username:
 *                               type: string
 *                               description: The username of the member.
 *                               example: "john_doe"
 *                       owner:
 *                         type: object
 *                         properties:
 *                           _id:
 *                             type: string
 *                             description: The unique ID of the owner.
 *                             example: "5f8d0d55b54764421b7156c3"
 *                           username:
 *                             type: string
 *                             description: The username of the owner.
 *                             example: "admin"
 *       500:
 *         description: Failed to fetch rooms.
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
 *                   example: "/rooms/my-rooms"
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
