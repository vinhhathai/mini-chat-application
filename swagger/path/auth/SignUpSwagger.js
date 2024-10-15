/**
 * @swagger
 * /auth/sign-up:
 *   post:
 *     summary: Đăng ký tài khoản mới
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - password
 *               - confirmPassword
 *               - email
 *               - fullName
 *             properties:
 *               password:
 *                 type: string
 *                 description: Mật khẩu của người dùng
 *                 example: "Password123!"
 *               confirmPassword:
 *                 type: string
 *                 description: Xác nhận mật khẩu (phải khớp với password)
 *                 example: "Password123!"
 *               email:
 *                 type: string
 *                 description: Địa chỉ email của người dùng
 *                 format: email
 *                 example: johndoe@example.com
 *               fullName:
 *                 type: string
 *                 description: Họ tên đầy đủ của người dùng
 *                 example: "John Doe"
 *     responses:
 *       201:
 *         description: Đăng ký thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Thông báo đăng ký thành công
 *                   example: "Account created successfully"
 *       400:
 *         description: Lỗi xác thực hoặc dữ liệu không hợp lệ
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
 *                   example: "/auth/sign-up"
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
 *       409:
 *         description: Email đã tồn tại
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
 *                   example: "/auth/sign-up"
 *                 code:
 *                   type: string
 *                   description: Mã lỗi
 *                   example: "DATA_CONFLICT"
 *                 error:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       description: Mô tả lỗi
 *                       example: "EMAIL_EXISTED"
 *       500:
 *         description: Lỗi server khi tạo tài khoản
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
 *                   example: "/auth/sign-up"
 *                 code:
 *                   type: string
 *                   description: Mã lỗi
 *                   example: "ERR_CREATE_ACCOUNT_FAILED"
 *                 error:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       description: Thông tin lỗi
 *                       example: "Database connection error"
 */
