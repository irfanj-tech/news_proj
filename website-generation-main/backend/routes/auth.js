// // routes/auth.js

// const express = require('express');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');

// const router = express.Router();

// // Register Route
// router.post('/register', async (req, res) => {
//   const { username, email, password } = req.body;

//   try {
//     // Check if user exists
//     let user = await User.findOne({ email });
//     if (user) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     // Create new user
//     const salt = await bcrypt.genSalt(10);
//     const passwordHash = await bcrypt.hash(password, salt);

//     user = new User({
//       username,
//       email,
//       passwordHash
//     });

//     await user.save();

//     // Create JWT payload
//     const payload = {
//       user: {
//         id: user.id
//       }
//     };

//     // Sign JWT
//     jwt.sign(
//       payload,
//       process.env.JWT_SECRET,
//       { expiresIn: '1h' },
//       (err, token) => {
//         if (err) throw err;
//         res.json({ token });
//       }
//     );
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send('Server error');
//   }
// });

// // Login Route
// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Check if user exists
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: 'Invalid Credentials' });
//     }

//     // Compare passwords
//     const isMatch = await bcrypt.compare(password, user.passwordHash);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid Credentials' });
//     }

//     // Create JWT payload
//     const payload = {
//       user: {
//         id: user.id
//       }
//     };

//     // Sign JWT
//     jwt.sign(
//       payload,
//       process.env.JWT_SECRET,
//       { expiresIn: '1h' },
//       (err, token) => {
//         if (err) throw err;
//         res.json({ token });
//       }
//     );
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send('Server error');
//   }
// });

// module.exports = router;
