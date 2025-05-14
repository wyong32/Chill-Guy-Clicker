const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');
const { pool } = require('../config/db');

/**
 * @route   GET /api/comments
 * @desc    Get all comments
 * @access  Public
 */
router.get('/', async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (error) {
    console.error('Error fetching comments:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

/**
 * @route   GET /api/comments/game/:gameId
 * @desc    Get comments for a specific game
 * @access  Public
 */
router.get('/game/:gameId', async (req, res) => {
  try {
    const gameId = parseInt(req.params.gameId);
    if (isNaN(gameId)) {
      return res.status(400).json({ message: 'Invalid game ID' });
    }

    const comments = await Comment.find({ gameId });
    res.json(comments);
  } catch (error) {
    console.error(`Error fetching comments for game ${req.params.gameId}:`, error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

/**
 * @route   POST /api/comments
 * @desc    Add a new comment
 * @access  Public
 */
router.post('/', async (req, res) => {
  try {
    const { gameId, username, rating, content, email } = req.body;

    // 验证必填字段
    if (!gameId || !username || !rating || !content) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    // 验证评分范围
    if (rating < 1 || rating > 5) {
      return res.status(400).json({ message: 'Rating must be between 1 and 5' });
    }

    // 创建新评论
    const newComment = new Comment({
      gameId: parseInt(gameId),
      username,
      rating: parseInt(rating),
      content,
      email,
    });

    // 保存评论
    const savedComment = await newComment.save();
    res.status(201).json(savedComment);
  } catch (error) {
    console.error('Error adding comment:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

/**
 * @route   GET /api/comments/:id
 * @desc    Get a comment by ID
 * @access  Public
 */
router.get('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ message: 'Invalid comment ID' });
    }

    const comment = await Comment.findById(id);
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    res.json(comment);
  } catch (error) {
    console.error(`Error fetching comment ${req.params.id}:`, error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

/**
 * @route   DELETE /api/comments/:id
 * @desc    Delete a comment
 * @access  Public (in a real app, this would be restricted)
 */
router.delete('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ message: 'Invalid comment ID' });
    }

    const comment = await Comment.findById(id);
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    // 在 PostgreSQL 中，我们需要直接执行 SQL 删除
    await pool.query('DELETE FROM chill_guy_comments WHERE id = $1 AND project_id = $2', [id, 'chill_guy']);
    res.json({ message: 'Comment removed' });
  } catch (error) {
    console.error(`Error deleting comment ${req.params.id}:`, error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
