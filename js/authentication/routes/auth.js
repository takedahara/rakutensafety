const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const router = express.Router();

// ログインエンドポイント
router.post('/login', async (req, res) => {
  const { rakutenid, password } = req.body;

  try {
    console.log('Received login request:', { rakutenid, password });
    
    const user = await User.findOne({ rakutenid });
    if (!user) {
      return res.status(400).json({ message: 'Invalid rakutenid or password' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid rakutenid or password' });
    }

    // JWTトークンを生成
    const token = jwt.sign({ userId: user._id }, 'secret', { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// ユーザー登録エンドポイント
router.post('/register', async (req, res) => {
  const { rakutenid, password } = req.body;

  try {
    console.log('Received register request:', { rakutenid, password });
    
    // 重複チェック
    const existingUser = await User.findOne({ rakutenid });
    if (existingUser) {
      return res.status(400).json({ message: 'RakutenID already exists' });
    }

    // Userを作成
    const user = new User({ rakutenid, password });
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
