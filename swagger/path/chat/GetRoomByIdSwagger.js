/**
 * @swagger
 * /chat/room/{id}:
 *   get:
 *     summary: Get a specific chat room by ID
 *     description: Retrieve detailed information about a chat room by its ID, including members and owner information.
 *     tags:
 *       - Room
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The unique ID of the chat room to retrieve.
 *         schema:
 *           type: string
 *           example: "5f8d0d55b54764421b7156c9"
 *     responses:
 *       200:
 *         description: Details of the chat room.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Room fetched successfully"
 *                 room:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       description: The unique ID of the room.
 *                       example: "5f8d0d55b54764421b7156c9"
 *                     name:
 *                       type: string
 *                       description: The name of the room.
 *                       example: "General Chat"
 *                     members:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           _id:
 *                             type: string
 *                             description: The unique ID of the member.
 *                             example: "5f8d0d55b54764421b7156c2"
 *                           username:
 *                             type: string
 *                             description: The username of the member.
 *                             example: "john_doe"
 *                     owner:
 *                       type: object
 *                       properties:
 *                         _id:
 *                           type: string
 *                           description: The unique ID of the owner.
 *                           example: "5f8d0d55b54764421b7156c3"
 *                         username:
 *                           type: string
 *                           description: The username of the owner.
 *                           example: "admin"
 *       404:
 *         description: Room not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Room not found"
 *       500:
 *         description: Failed to fetch the room.
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
 *                   example: "/rooms/5f8d0d55b54764421b7156c9"
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
