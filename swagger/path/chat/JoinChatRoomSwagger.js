/**
 * @swagger
 * /chat/join-room:
 *   post:
 *     summary: Join a chat room
 *     description: Allows a user to join a chat room by adding them to the room's members list.
 *     tags:
 *       - Chat
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               roomId:
 *                 type: string
 *                 description: The ID of the chat room to join.
 *                 example: "5f8d0d55b54764421b7156c9"
 *     responses:
 *       200:
 *         description: Successfully joined the room.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Joined room successfully"
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
 *                         type: string
 *                         description: User IDs of room members.
 *                         example: "5f8d0d55b54764421b7156c2"
 *       400:
 *         description: User has already joined the room.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "You have already joined this room"
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
 *         description: Server error while attempting to join the room.
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
 *                   description: Error details
 */
