const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json()); // JSONパーサーを設定

// Viewエンジンの設定
app.set('view engine', 'ejs');

// ルートの設定
const indexRouter = require('./routes/route');
app.use('/', indexRouter);

// app.get('/GetLocations', (req, res) => {
//   // サンプルの位置情報データ
//   const locations = [
//     { latitude: 35.6895, longitude: 139.6917, accuracy: 100 }, // 東京
//     { latitude: 34.0522, longitude: -118.2437, accuracy: 200 }, // ロサンゼルス
//     { latitude: 51.5074, longitude: -0.1278, accuracy: 150 } // ロンドン
//   ];

//   res.json({ locations });
// });

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});