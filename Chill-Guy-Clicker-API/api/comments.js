const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');
const auth = require('../middleware/auth');
const { commentLimiter } = require('../middleware/rateLimit');

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
    res.status(500).json({ success: false, message: 'Failed to fetch comments', error: error.message });
  }
});

/**
 * @route   GET /api/comments/stats/all
 * @desc    Get rating statistics for all games
 * @access  Private (requires authentication)
 */
router.get('/stats/all', auth, async (req, res) => {
  try {
    const comments = await Comment.find();

    // 按游戏ID分组
    const gameGroups = {};

    comments.forEach(comment => {
      if (!gameGroups[comment.gameId]) {
        gameGroups[comment.gameId] = [];
      }
      gameGroups[comment.gameId].push(comment);
    });

    // 计算每个游戏的统计信息
    const gameStats = Object.keys(gameGroups).map(gameId => {
      const gameComments = gameGroups[gameId];
      const totalRating = gameComments.reduce((sum, comment) => sum + comment.rating, 0);
      const averageRating = totalRating / gameComments.length;

      // 计算评分分布
      const ratingDistribution = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
      };

      gameComments.forEach(comment => {
        ratingDistribution[comment.rating]++;
      });

      return {
        gameId: parseInt(gameId),
        totalComments: gameComments.length,
        averageRating,
        ratingDistribution
      };
    });

    res.json(gameStats);
  } catch (error) {
    console.error('Error fetching all rating stats:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch rating statistics', error: error.message });
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
      return res.status(400).json({ success: false, message: 'Invalid game ID' });
    }

    const comments = await Comment.find({ gameId });
    res.json(comments);
  } catch (error) {
    console.error(`Error fetching comments for game ${req.params.gameId}:`, error);
    res.status(500).json({ success: false, message: 'Failed to fetch game comments', error: error.message });
  }
});

/**
 * @route   GET /api/comments/stats/game/:gameId
 * @desc    Get rating statistics for a specific game
 * @access  Public
 */
router.get('/stats/game/:gameId', async (req, res) => {
  try {
    const gameId = parseInt(req.params.gameId);
    if (isNaN(gameId)) {
      return res.status(400).json({ success: false, message: 'Invalid game ID' });
    }

    const comments = await Comment.find({ gameId });

    // 如果没有评论，返回默认统计信息
    if (comments.length === 0) {
      return res.json({
        gameId,
        totalComments: 0,
        averageRating: 0,
        ratingDistribution: {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0
        }
      });
    }

    // 计算平均评分
    const totalRating = comments.reduce((sum, comment) => sum + comment.rating, 0);
    const averageRating = totalRating / comments.length;

    // 计算评分分布
    const ratingDistribution = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0
    };

    comments.forEach(comment => {
      ratingDistribution[comment.rating]++;
    });

    res.json({
      gameId,
      totalComments: comments.length,
      averageRating,
      ratingDistribution
    });
  } catch (error) {
    console.error(`Error fetching rating stats for game ${req.params.gameId}:`, error);
    res.status(500).json({ success: false, message: 'Failed to fetch rating statistics', error: error.message });
  }
});

/**
 * @route   POST /api/comments
 * @desc    Add a new comment
 * @access  Public
 */
router.post('/', commentLimiter, async (req, res) => {
  try {
    // 创建新评论 - 验证会在 Comment 构造函数中进行
    const newComment = new Comment(req.body);

    // 保存评论
    const savedComment = await newComment.save();
    res.status(201).json(savedComment);
  } catch (error) {
    console.error('Error adding comment:', error);
    res.status(400).json({
      success: false,
      message: error.message || 'Failed to add comment'
    });
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
      return res.status(400).json({ success: false, message: 'Invalid comment ID' });
    }

    const comment = await Comment.findById(id);
    if (!comment) {
      return res.status(404).json({ success: false, message: 'Comment not found' });
    }
    res.json(comment);
  } catch (error) {
    console.error(`Error fetching comment ${req.params.id}:`, error);
    res.status(500).json({ success: false, message: 'Failed to fetch comment', error: error.message });
  }
});

/**
 * @route   DELETE /api/comments/:id
 * @desc    Delete a comment
 * @access  Private (requires authentication)
 */
router.delete('/:id', auth, async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ success: false, message: 'Invalid comment ID' });
    }

    const comment = await Comment.findById(id);
    if (!comment) {
      return res.status(404).json({ success: false, message: 'Comment not found' });
    }

    // 使用 Comment 模型的静态方法删除评论
    const deleted = await Comment.deleteById(id);
    if (deleted) {
      res.json({ success: true, message: 'Comment removed successfully' });
    } else {
      res.status(500).json({ success: false, message: 'Failed to delete comment' });
    }
  } catch (error) {
    console.error(`Error deleting comment ${req.params.id}:`, error);
    res.status(500).json({ success: false, message: 'Failed to delete comment', error: error.message });
  }
});

/**
 * @route   PUT /api/comments/:id
 * @desc    Update a comment
 * @access  Private (requires authentication)
 */
router.put('/:id', auth, async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ success: false, message: 'Invalid comment ID' });
    }

    // 查找评论
    const comment = await Comment.findById(id);
    if (!comment) {
      return res.status(404).json({ success: false, message: 'Comment not found' });
    }

    // 更新评论数据
    const { username, content, rating, email, created_at } = req.body;

    // 验证必填字段
    if (!username || !content || !rating) {
      return res.status(400).json({
        success: false,
        message: 'Username, content and rating are required'
      });
    }

    // 验证评分范围
    const ratingNum = parseInt(rating);
    if (isNaN(ratingNum) || ratingNum < 1 || ratingNum > 5) {
      return res.status(400).json({
        success: false,
        message: 'Rating must be a number between 1 and 5'
      });
    }

    // 准备更新数据
    const updateData = {
      username,
      content,
      rating: ratingNum,
      email: email || null
    };

    // 如果提供了创建时间，添加到更新数据中
    if (created_at) {
      updateData.created_at = created_at;
    }

    // 更新评论
    const updatedComment = await Comment.update(id, updateData);

    res.json(updatedComment);
  } catch (error) {
    console.error(`Error updating comment ${req.params.id}:`, error);
    res.status(500).json({
      success: false,
      message: 'Failed to update comment',
      error: error.message
    });
  }
});

module.exports = router;
