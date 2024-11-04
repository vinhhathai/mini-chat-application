/**
 * @swagger
 * /chat/room/detail/{id}:
 *   get:
 *     summary: Get a specific chat room by ID
 *     description: Retrieve detailed information about a chat room by its ID, including messages with sender details.
 *     tags:
 *       - Chat
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
 *                 roomData:
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
 *                           fullName:
 *                             type: string
 *                             description: The full name of the member.
 *                             example: "John Doe"
 *                     messages:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           _id:
 *                             type: string
 *                             description: The unique ID of the message.
 *                             example: "5f8d0d55b54764421b7156c5"
 *                           content:
 *                             type: string
 *                             description: The content of the message.
 *                             example: "Hello, everyone!"
 *                           createdAt:
 *                             type: string
 *                             format: date-time
 *                             description: The timestamp when the message was created.
 *                             example: "2023-10-15T12:00:00Z"
 *                           senderId:
 *                             type: object
 *                             properties:
 *                               _id:
 *                                 type: string
 *                                 description: The unique ID of the sender.
 *                                 example: "5f8d0d55b54764421b7156c2"
 *                               fullName:
 *                                 type: string
 *                                 description: The full name of the sender.
 *                                 example: "John Doe"
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
 *         description: Server error while fetching the room.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Server error"
 *                 error:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       example: "Internal Server Error"
 */
