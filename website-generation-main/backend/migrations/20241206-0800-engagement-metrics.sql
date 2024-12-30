-- First drop existing table if needed
-- DROP TABLE IF EXISTS engagement_metrics;

CREATE TABLE IF NOT EXISTS engagement_metrics (
    id SERIAL PRIMARY KEY,
    article_id INT REFERENCES articles_custom(id) ON DELETE CASCADE,
    website_id TEXT,  
    likes_count INT DEFAULT 0,
    shares_count INT DEFAULT 0,
    comments_count INT DEFAULT 0,
    views_count INT DEFAULT 0,
    bounce_rate DECIMAL(5,2),
    avg_time_on_page INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(article_id, website_id)
);

-- Recreate indexes
CREATE INDEX idx_engagement_article_id ON engagement_metrics(article_id);
CREATE INDEX idx_engagement_website_id ON engagement_metrics(website_id);
CREATE INDEX idx_engagement_created_at ON engagement_metrics(created_at);