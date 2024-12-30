//backend/routes/engagementMetrics.js

const express = require('express');
const router = express.Router();
const db = require('../db');

// Create/Update engagement metrics
router.post('/', async (req, res) => {
    try {
        const { article_id, website_id, likes_count, shares_count, comments_count, views_count } = req.body;
        
        const result = await db.query(
            `INSERT INTO engagement_metrics 
            (article_id, website_id, likes_count, shares_count, comments_count, views_count)
            VALUES ($1, $2, $3, $4, $5, $6)
            ON CONFLICT (article_id, website_id)
            DO UPDATE SET 
                likes_count = $3,
                shares_count = $4,
                comments_count = $5,
                views_count = $6,
                updated_at = CURRENT_TIMESTAMP
            RETURNING *`,
            [article_id, website_id, likes_count, shares_count, comments_count, views_count]
        );
        
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get metrics for specific article
router.get('/article/:articleId', async (req, res) => {
    try {
        const result = await db.query(
            'SELECT * FROM engagement_metrics WHERE article_id = $1',
            [req.params.articleId]
        );
        res.json(result.rows[0] || {});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get metrics for specific website
router.get('/website/:websiteId', async (req, res) => {
    try {
        const result = await db.query(
            `SELECT 
                website_id,
                SUM(likes_count) as total_likes,
                SUM(shares_count) as total_shares,
                SUM(comments_count) as total_comments,
                SUM(views_count) as total_views,
                AVG(bounce_rate) as avg_bounce_rate
            FROM engagement_metrics 
            WHERE website_id = $1
            GROUP BY website_id`,
            [req.params.websiteId]
        );
        res.json(result.rows[0] || {});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;