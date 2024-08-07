const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json()); // JSONパーサーを設定

// Viewエンジンの設定
app.set('view engine', 'ejs');

// ルートの設定
const indexRouter = require('./routes/MapRoute');
app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});