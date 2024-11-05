/**
 * @swagger
 * /user/profile-picture:
 *   put:
 *     summary: Update the user's profile picture
 *     description: Upload a new profile picture for the authenticated user.
 *     tags:
 *       - User
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               profilePicture:
 *                 type: string
 *                 format: binary
 *                 description: The new profile picture file to upload.
 *     responses:
 *       200:
 *         description: Profile picture updated successfully.
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
 *                   example: "Cập nhật ảnh đại diện thành công"
 *       404:
 *         description: User not found.
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
 *                   example: "Người dùng không tồn tại"
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
 *                   example: "Có lỗi nội bộ xảy ra"
 *                 error:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       example: "Internal Server Error"
 */
