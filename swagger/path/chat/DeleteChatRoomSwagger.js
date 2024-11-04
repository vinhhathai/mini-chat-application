/**
 * @swagger
 * /chat/delete-room/{id}:
 *   delete:
 *     summary: Delete a chat room
 *     description: Deletes a chat room by its ID, but only if the requesting user is the owner of the room.
 *     tags:
 *       - Chat
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The unique ID of the chat room to delete.
 *         schema:
 *           type: string
 *           example: "5f8d0d55b54764421b7156c9"
 *     responses:
 *       200:
 *         description: Successfully deleted the room.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Room deleted successfully"
 *       403:
 *         description: Forbidden. The user is not the owner and cannot delete the room.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "You do not have permission to delete this room"
 *       404:
 *         description: Room not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Room not found"
 *       500:
 *         description: Server error while attempting to delete the room.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Server error"
 */
