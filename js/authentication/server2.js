const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;
const mongoURI = "mongodb://localhost:27017/shelter"; // データベース名を確認

// MongoDBに接続
mongoose.connect(mongoURI)
    .then(() => console.log("MongoDBに接続しました"))
    .catch((error) => console.error("MongoDBの接続エラー:", error));

// Userスキーマとモデル
const userSchema = new mongoose.Schema({
    rakutenid: String,
    password: String
});

const User = mongoose.model('User', userSchema, 'users'); // 'users' コレクションを使用

app.use(bodyParser.json());

// ログイン処理
app.post('/auth/login', async (req, res) => {
    const { rakutenid, password } = req.body;

    try {
        console.log('Received login request:', { rakutenid, password });

        // 指定されたrakutenidとpasswordを持つユーザーを検索
        const user = await User.findOne({ rakutenid, password });

        if (user) {
            // ユーザーが見つかった場合
            return res.status(200).json({ message: 'ユーザーが見つかりました。' });
        } else {
            // ユーザーが見つからない場合
            return res.status(400).json({ message: 'ユーザーが見つかりません。' });
        }
    } catch (error) {
        console.error('エラーが発生しました:', error);
        res.status(500).json({ message: 'サーバーエラー' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});





