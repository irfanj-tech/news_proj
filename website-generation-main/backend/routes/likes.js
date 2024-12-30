//backend/routes/likes.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// Increment like count
router.post('/:articleId/like', async (req, res) => {
  try {
    const articleId = parseInt(req.params.articleId, 10);
    const { userId } = req.body;

    // Check if the article exists
    const articleCheck = await db.query('SELECT id FROM public.articles WHERE id = $1', [articleId]);
    if (articleCheck.rows.length === 0) {
      return res.status(404).json({ message: 'Article not found' });
    }

    // Add the like (optional user validation can be added here)
    await db.query('INSERT INTO likes_custom (article_id, user_id) VALUES ($1, $2)', [articleId, userId]);

    // Increment the like count in public.articles
    await db.query('UPDATE public.articles SET likes_count = COALESCE(likes_count, 0) + 1 WHERE id = $1', [
      articleId,
    ]);

    res.json({ message: 'Like added successfully' });
  } catch (error) {
    console.error('Error adding like:', error);
    res.status(500).json({ message: 'Error adding like', error: error.message });
  }
});

// Get likes count
router.get('/:articleId/likes', async (req, res) => {
  try {
    const articleId = parseInt(req.params.articleId, 10);

    const result = await db.query('SELECT likes_count FROM public.articles WHERE id = $1', [articleId]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Article not found' });
    }

    res.json({ likes: result.rows[0].likes_count || 0 });
  } catch (error) {
    console.error('Error fetching likes count:', error);
    res.status(500).json({ message: 'Error fetching likes count', error: error.message });
  }
});

module.exports = router;
