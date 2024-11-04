/**
 * @swagger
 * /chat/room/avatar/{id}:
 *   put:
 *     summary: Update the avatar of a specific chat room
 *     description: Update the avatar image of a chat room by its ID. Only the room owner can perform this action.
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
 *       - in: formData
 *         name: avatar
 *         description: The new avatar image file for the chat room.
 *         required: true
 *         schema:
 *           type: file
 *     responses:
 *       200:
 *         description: Room avatar updated successfully.
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
 *                   example: "Cập nhật avatar phòng thành công"
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       description: The unique ID of the room.
 *                       example: "5f8d0d55b54764421b7156c9"
 *                     avatar:
 *                       type: string
 *                       description: The URL of the new avatar image.
 *                       example: "/upload/roomImage/newAvatar.jpg"
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
 *                   example: "Bạn không có quyền cập nhật avatar phòng này"
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
 *         description: Server error while updating the room avatar.
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