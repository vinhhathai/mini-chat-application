/**
 * @swagger
 * /auth/reset-password:
 *   post:
 *     summary: Gửi email đặt lại mật khẩu
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *             properties:
 *               email:
 *                 type: string
 *                 description: Địa chỉ email của người dùng
 *                 format: email
 *                 example: johndoe@example.com
 *     responses:
 *       201:
 *         description: Link đặt lại mật khẩu đã được gửi qua email
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Thông báo gửi thành công
 *                   example: "Reset password link has been sent to johndoe@example.com"
 *       400:
 *         description: Dữ liệu không hợp lệ
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 timestamp:
 *                   type: string
 *                   description: Thời gian lỗi
 *                   example: "2024-10-15T12:34:56.789Z"
 *                 path:
 *                   type: string
 *                   description: Đường dẫn API
 *                   example: "/auth/reset-password"
 *                 code:
 *                   type: string
 *                   description: Mã lỗi
 *                   example: "VALIDATION_FAILED"
 *                 error:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       description: Mô tả lỗi
 *                       example: "Email không hợp lệ"
 *       404:
 *         description: Không tìm thấy email trong hệ thống
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 timestamp:
 *                   type: string
 *                   description: Thời gian lỗi
 *                   example: "2024-10-15T12:34:56.789Z"
 *                 path:
 *                   type: string
 *                   description: Đường dẫn API
 *                   example: "/auth/reset-password"
 *                 code:
 *                   type: string
 *                   description: Mã lỗi
 *                   example: "EMAIL_NOT_FOUND"
 *                 error:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       description: Thông tin lỗi
 *                       example: "Không tìm thấy email"
 *       500:
 *         description: Lỗi server khi gửi link đặt lại mật khẩu
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 timestamp:
 *                   type: string
 *                   description: Thời gian lỗi
 *                   example: "2024-10-15T12:34:56.789Z"
 *                 path:
 *                   type: string
 *                   description: Đường dẫn API
 *                   example: "/auth/reset-password"
 *                 code:
 *                   type: string
 *                   description: Mã lỗi
 *                   example: "ERR_GET_RESET_PASSWORD_LINK_FAILED"
 *                 error:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       description: Thông tin lỗi
 *                       example: "Lỗi không xác định"
 */
