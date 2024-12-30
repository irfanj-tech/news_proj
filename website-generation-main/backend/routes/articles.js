//backend/routes/articles.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all articles
router.get('/', async (req, res) => {
  try {
    const result = await db.query(
      'SELECT id, title, description, slug, created_at, updated_at, published_at, likes_count FROM public.articles ORDER BY id DESC'
    );
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching articles', error: error.message });
  }
});

module.exports = router;
