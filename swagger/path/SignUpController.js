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
 *               - username
 *               - password
 *               - confirmPassword
 *               - email
 *               - birthday
 *             properties:
 *               username:
 *                 type: string
 *                 description: Tên đăng nhập của người dùng
 *                 example: johndoe
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
 *               birthday:
 *                 type: string
 *                 description: Ngày sinh của người dùng
 *                 format: date
 *                 example: "01-01-1990"
 *     responses:
 *       201:
 *         description: Đăng ký thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID của người dùng mới
 *                   example: "615c8ff1c8a4f73ec2e72019"
 *                 username:
 *                   type: string
 *                   description: Tên đăng nhập của người dùng
 *                   example: johndoe
 *                 email:
 *                   type: string
 *                   description: Địa chỉ email của người dùng
 *                   example: johndoe@example.com
 *       400:
 *         description: Yêu cầu không hợp lệ (thiếu hoặc không đúng định dạng)
 *       409:
 *         description: Email hoặc tên đăng nhập đã tồn tại
 */


