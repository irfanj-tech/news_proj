// models/User.js

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  roles: { type: [String], default: ['user'] },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Article' }],
  comments: [{
    articleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Article' },
    commentText: String,
    timestamp: { type: Date, default: Date.now }
  }]
});

module.exports = mongoose.model('User', UserSchema);
