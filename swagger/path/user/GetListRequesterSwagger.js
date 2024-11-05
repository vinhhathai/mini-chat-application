/**
 * @swagger
 * /user/request-friend:
 *   get:
 *     summary: Lấy danh sách lời mời kết bạn
 *     description: Lấy danh sách các yêu cầu kết bạn với trạng thái "pending" dành cho người dùng hiện tại.
 *     tags:
 *       - Friend Requests
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Danh sách lời mời kết bạn được lấy thành công.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Friend requests fetched successfully
 *                 friendRequests:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "603e1f4a9b1e8a1f4a8b4567"
 *                       requester:
 *                         type: object
 *                         properties:
 *                           _id:
 *                             type: string
 *                             example: "603e1f4a9b1e8a1f4a8b1234"
 *                           fullName:
 *                             type: string
 *                             example: "John Doe"
 *                           email:
 *                             type: string
 *                             example: "john.doe@example.com"
 *                           profilePicture:
 *                             type: string
 *                             example: "https://example.com/images/johndoe.jpg"
 *       400:
 *         description: Yêu cầu không hợp lệ (có thể là do user_id không được cung cấp).
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 timestamp:
 *                   type: string
 *                   example: "2023-11-05T12:34:56Z"
 *                 path:
 *                   type: string
 *                   example: "/user/friend-requests"
 *                 code:
 *                   type: string
 *                   example: "VALIDATION_FAILED"
 *                 error:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       example: "ID_NOT_FOUND"
 *       500:
 *         description: Lỗi máy chủ khi lấy danh sách lời mời kết bạn.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 timestamp:
 *                   type: string
 *                   example: "2023-11-05T12:34:56Z"
 *                 path:
 *                   type: string
 *                   example: "/user/friend-requests"
 *                 code:
 *                   type: string
 *                   example: "ERR_FETCH_FRIEND_REQUESTS_FAILED"
 *                 error:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       example: "Internal Server Error"
 */
