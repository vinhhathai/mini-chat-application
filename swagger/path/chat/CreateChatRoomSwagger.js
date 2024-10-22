/**
 * @swagger
 * /chat/create-room:
 *   post:
 *     summary: Create a new chat room
 *     description: Allows a user to create a new chat room. The user creating the room will automatically be added as a member and the owner of the room.
 *     tags:
 *       - Room
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               room_name:
 *                 type: string
 *                 description: The name of the new chat room.
 *                 example: "General Chat"
 *     responses:
 *       201:
 *         description: Room created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Room created successfully"
 *                 room:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       description: The unique ID of the new room.
 *                       example: "5f8d0d55b54764421b7156c9"
 *                     name:
 *                       type: string
 *                       description: The name of the room.
 *                       example: "General Chat"
 *                     members:
 *                       type: array
 *                       items:
 *                         type: string
 *                         description: The unique ID of a member.
 *                         example: "5f8d0d55b54764421b7156c2"
 *                     owner:
 *                       type: string
 *                       description: The unique ID of the user who created the room.
 *                       example: "5f8d0d55b54764421b7156c3"
 *       400:
 *         description: Invalid request, missing or invalid data.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Invalid request"
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Server error"
 */
