/**
 * @swagger
 * /auth/change-password:
 *   put:
 *     summary: Đổi mật khẩu sau khi nhận được link đặt lại mật khẩu
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - newPassword
 *               - confirmNewPassword
 *               - resetPasswordToken
 *               - email
 *             properties:
 *               newPassword:
 *                 type: string
 *                 description: Mật khẩu mới của người dùng
 *                 example: "NewPassword123!"
 *               confirmNewPassword:
 *                 type: string
 *                 description: Xác nhận mật khẩu mới (phải khớp với mật khẩu mới)
 *                 example: "NewPassword123!"
 *               resetPasswordToken:
 *                 type: string
 *                 description: Token đặt lại mật khẩu nhận được qua email
 *                 example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *               email:
 *                 type: string
 *                 description: Địa chỉ email của người dùng
 *                 format: email
 *                 example: johndoe@example.com
 *     responses:
 *       200:
 *         description: Đổi mật khẩu thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Thông báo đổi mật khẩu thành công
 *                   example: "Change password successfully"
 *       400:
 *         description: Dữ liệu không hợp lệ
 *       403:
 *         description: Token đặt lại mật khẩu không hợp lệ hoặc hết hạn
 *       404:
 *         description: Không tìm thấy email trong hệ thống
 *       500:
 *         description: Lỗi server khi đổi mật khẩu
 */
