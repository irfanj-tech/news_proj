
//backend/routes/comments.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// Add a new comment
router.post('/:articleId/comment', async (req, res) => {
  try {
    const articleId = parseInt(req.params.articleId, 10);
    const { username, text, fingerprint } = req.body;

    // Check if the article exists
    const articleCheck = await db.query('SELECT id FROM public.articles WHERE id = $1', [articleId]);
    if (articleCheck.rows.length === 0) {
      return res.status(404).json({ message: 'Article not found' });
    }

    const result = await db.query(
      'INSERT INTO comments_custom (article_id, username, text, fingerprint) VALUES ($1, $2, $3,$4) RETURNING *',
      [articleId, username, text, fingerprint]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error adding comment:', error);
    res.status(500).json({ message: 'Error adding comment', error: error.message });
  }
});

// Get comments for an article
router.get('/:articleId/comments', async (req, res) => {
  try {
    const articleId = parseInt(req.params.articleId, 10);

    const result = await db.query(
      'SELECT id, username, text, created_at, fingerprint FROM comments_custom WHERE article_id = $1 ORDER BY created_at DESC',
      [articleId]
    );
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching comments:', error);
    res.status(500).json({ message: 'Error fetching comments', error: error.message });
  }
});

module.exports = router;
