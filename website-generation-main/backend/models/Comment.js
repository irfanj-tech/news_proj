const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  articleId: String,
  username: String, // Added username field
  text: String,
  fingerprint: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Comment', commentSchema);
