/**
 * @swagger
 * /user/update-profile:
 *   put:
 *     summary: Cập nhật thông tin người dùng
 *     description: Cập nhật thông tin người dùng bao gồm tên đầy đủ và mật khẩu.
 *     tags:
 *       - User
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullName:
 *                 type: string
 *                 description: Tên đầy đủ của người dùng.
 *                 example: "Nguyễn Văn A"
 *               oldPassword:
 *                 type: string
 *                 description: Mật khẩu cũ để xác thực.
 *                 example: "OldPassword123"
 *               newPassword:
 *                 type: string
 *                 description: Mật khẩu mới.
 *                 example: "NewPassword123"
 *               confirmPassword:
 *                 type: string
 *                 description: Xác nhận mật khẩu mới.
 *                 example: "NewPassword123"
 *     responses:
 *       200:
 *         description: Cập nhật thông tin thành công.
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
 *                   example: "Cập nhật thông tin thành công"
 *       400:
 *         description: Lỗi xác thực đầu vào.
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
 *                   example: "Mật khẩu mới và xác nhận mật khẩu không khớp"
 *       404:
 *         description: Người dùng không tồn tại.
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
 *         description: Lỗi máy chủ nội bộ.
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
 *                   example: "Có lỗi xảy ra"
 *                 error:
 *                   type: object
 *
 * /user/profile/picture:
 *   put:
 *     summary: Cập nhật ảnh đại diện người dùng
 *     description: Cập nhật ảnh đại diện cho người dùng.
 *     tags:
 *       - User
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: formData
 *         name: file
 *         required: true
 *         type: file
 *         description: Ảnh đại diện mới của người dùng.
 *       - in: header
 *         name: Authorization
 *         required: true
 *         type: string
 *         description: Token xác thực người dùng.
 *     responses:
 *       200:
 *         description: Cập nhật ảnh đại diện thành công.
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
 *                   example: "Profile picture updated successfully"
 *       404:
 *         description: Người dùng không tồn tại.
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
 *                   example: "User not found"
 *       500:
 *         description: Lỗi máy chủ nội bộ.
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
 *                   example: "Internal server error"
 *                 error:
 *                   type: object
 */
