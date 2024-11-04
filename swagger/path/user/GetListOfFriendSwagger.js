/**
 * @swagger
 * /user/friends:
 *   get:
 *     summary: Lấy danh sách bạn bè của người dùng
 *     description: Trả về danh sách bạn bè của người dùng hiện tại, bao gồm thông tin `fullName`, `email`, và `profilePicture` của mỗi bạn bè.
 *     tags:
 *       - User
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lấy danh sách bạn bè thành công.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         description: ID của bạn bè
 *                       fullName:
 *                         type: string
 *                         description: Tên đầy đủ của bạn bè
 *                       email:
 *                         type: string
 *                         description: Email của bạn bè
 *                       profilePicture:
 *                         type: string
 *                         description: Ảnh đại diện của bạn bè
 *               example:
 *                 data:
 *                   - _id: "5f8d0d55b54764421b7156c9"
 *                     fullName: "John Doe"
 *                     email: "johndoe@example.com"
 *                     profilePicture: "https://example.com/profile-pic.jpg"
 *                   - _id: "5f8d0d55b54764421b7156d2"
 *                     fullName: "Jane Smith"
 *                     email: "janesmith@example.com"
 *                     profilePicture: "https://example.com/profile-pic2.jpg"
 *       400:
 *         description: Thông tin không hợp lệ.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 timestamp:
 *                   type: string
 *                   example: "2023-11-05T12:00:00Z"
 *                 path:
 *                   type: string
 *                   example: "/user/friends"
 *                 code:
 *                   type: string
 *                   example: "VALIDATION_FAILED"
 *                 error:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       example: "ID_NOT_FOUND"
 *       404:
 *         description: Người dùng không tồn tại.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 timestamp:
 *                   type: string
 *                   example: "2023-11-05T12:00:00Z"
 *                 path:
 *                   type: string
 *                   example: "/user/friends"
 *                 code:
 *                   type: string
 *                   example: "DATA_NOT_FOUND"
 *                 error:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       example: "USER_NOT_FOUND"
 *       500:
 *         description: Lỗi máy chủ khi lấy danh sách bạn bè.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 timestamp:
 *                   type: string
 *                   example: "2023-11-05T12:00:00Z"
 *                 path:
 *                   type: string
 *                   example: "/user/friends"
 *                 code:
 *                   type: string
 *                   example: "ERR_RETRIEVE_FRIENDS_FAILED"
 *                 error:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       example: "Internal Server Error"
 */
