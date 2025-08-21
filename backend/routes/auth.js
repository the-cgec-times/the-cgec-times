const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    // 1. ইউজার তৈরি
    const user = new User({
      email: req.body.email,
      password: req.body.password
    });

    // 2. ডাটাবেসে সেভ করুন
    await user.save();

    // 3. JWT টোকেন তৈরি
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // 4. রেস্পন্স পাঠান
    res.status(201).json({ token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;