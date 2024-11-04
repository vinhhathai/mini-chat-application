/**
 * @swagger
 * /chat/room/avatar/{id}:
 *   put:
 *     summary: Update the room's avatar
 *     description: Upload a new avatar for a specified room.
 *     tags:
 *       - Chat
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the room to update the avatar for.
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: The new avatar file to upload for the room.
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
 *                     image:
 *                       type: string
 *                       example: "/upload/roomImage/example.jpg"
 *                     other_properties:
 *                       type: string
 *                       example: "..."
 *       403:
 *         description: User does not have permission to update the room's avatar.
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
 *       413:
 *         description: File size exceeds the limit.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 *                   example: "2023-11-05T10:15:30Z"
 *                 path:
 *                   type: string
 *                   example: "/room/avatar/123"
 *                 code:
 *                   type: string
 *                   example: "FILE_EXCEEDED_SIZE"
 *                 error:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       example: "File is exceeded (>=50MB)"
 *       500:
 *         description: Internal server error.
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
 *                   example: "Internal Server Error"
 */
