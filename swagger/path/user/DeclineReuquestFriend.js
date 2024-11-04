/**
 * @swagger
 * /user/decline-friend:
 *   post:
 *     summary: Từ chối lời mời kết bạn
 *     description: Người dùng từ chối một yêu cầu kết bạn. Sau khi từ chối, trạng thái của yêu cầu sẽ được cập nhật thành "declined".
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
 *               request_id:
 *                 type: string
 *                 description: ID của yêu cầu kết bạn
 *                 example: "603e1f4a9b1e8a1f4a8b4567"
 *     responses:
 *       200:
 *         description: Yêu cầu kết bạn đã bị từ chối thành công.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Friend request declined
 *       404:
 *         description: Không tìm thấy yêu cầu kết bạn hoặc người dùng không phải là người nhận yêu cầu.
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
 *                   example: "/user/decline-friend-request"
 *                 code:
 *                   type: string
 *                   example: "DATA_NOT_FOUND"
 *                 error:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       example: "REQUEST_NOT_FOUND"
 *       500:
 *         description: Lỗi máy chủ khi từ chối yêu cầu kết bạn.
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
 *                   example: "/user/decline-friend-request"
 *                 code:
 *                   type: string
 *                   example: "ERR_DECLINE_FRIEND_FAILED"
 *                 error:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       example: "Internal Server Error"
 */
