/**
 * @swagger
 * /chat/room/name/{id}:
 *   put:
 *     summary: Update the name of a specific chat room
 *     description: Change the name of a chat room by its ID. Only the room owner can perform this action.
 *     tags:
 *       - Chat
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The unique ID of the chat room to update.
 *         schema:
 *           type: string
 *           example: "5f8d0d55b54764421b7156c9"
 *       - in: body
 *         name: name
 *         description: New name for the chat room.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               example: "Updated Room Name"
 *     responses:
 *       200:
 *         description: Room name updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Cập nhật tên phòng thành công"
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       description: The unique ID of the room.
 *                       example: "5f8d0d55b54764421b7156c9"
 *                     name:
 *                       type: string
 *                       description: The new name of the room.
 *                       example: "Updated Room Name"
 *       403:
 *         description: User is not the owner of the room.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Bạn không có quyền cập nhật tên phòng này"
 *       404:
 *         description: Room not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Phòng không tồn tại"
 *       500:
 *         description: Server error while updating the room name.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Lỗi nội bộ"
 *                 error:
 *                   type: string
 *                   example: "Error details"
 */
