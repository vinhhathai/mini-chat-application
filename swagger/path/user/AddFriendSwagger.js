/**
 * @swagger
 * /user/add-friend:
 *   post:
 *     summary: Gửi yêu cầu kết bạn
 *     description: Người dùng gửi yêu cầu kết bạn tới một người dùng khác. Nếu yêu cầu đã tồn tại hoặc người nhận không tồn tại, sẽ trả về lỗi.
 *     tags:
 *       - Friend Requests
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               friend_id:
 *                 type: string
 *                 description: ID của người dùng muốn gửi yêu cầu kết bạn
 *                 example: "603e1f4a9b1e8a1f4a8b4567"
 *     responses:
 *       201:
 *         description: Yêu cầu kết bạn đã được gửi thành công.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Friend request sent successfully
 *       400:
 *         description: Yêu cầu không hợp lệ hoặc yêu cầu kết bạn đã tồn tại.
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
 *                   example: "/user/add-friend"
 *                 code:
 *                   type: string
 *                   example: "VALIDATION_FAILED"
 *                 error:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       example: "FRIEND_REQUEST_ALREADY_SENT"
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
 *                   example: "/user/add-friend"
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
 *         description: Lỗi máy chủ khi gửi yêu cầu kết bạn.
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
 *                   example: "/user/add-friend"
 *                 code:
 *                   type: string
 *                   example: "ERR_ADD_FRIEND_FAILED"
 *                 error:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       example: "Internal Server Error"
 */
