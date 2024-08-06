const express = require('express');
const app = express();
const port = 3000;

// Viewエンジンの設定
app.set('view engine', 'ejs');

// ルートの設定
const indexRouter = require('./routes/route');
app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});