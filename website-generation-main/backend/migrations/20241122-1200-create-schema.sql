-- Users Table
CREATE TABLE IF NOT EXISTS users_custom (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  roles TEXT[] DEFAULT ARRAY['user']
);

-- Articles Table (Renamed)
CREATE TABLE IF NOT EXISTS articles_custom (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  categories TEXT[],
  likes_count INT DEFAULT 0
);

-- Comments Table
CREATE TABLE IF NOT EXISTS comments_custom (
  id SERIAL PRIMARY KEY,
  article_id INT REFERENCES articles_custom(id) ON DELETE CASCADE,
  username TEXT,
  fingerprint TEXT,
  text TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Likes Table
CREATE TABLE IF NOT EXISTS likes_custom (
  id SERIAL PRIMARY KEY,
  article_id INT REFERENCES articles_custom(id) ON DELETE CASCADE,
  user_id INT REFERENCES users_custom(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
