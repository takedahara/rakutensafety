const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json()); // JSONパーサーを設定

// Viewエンジンの設定
app.set('view engine', 'ejs');

// ルートの設定
const Router1 = require('./routes/login_route');
const Router2 = require('./routes/route');
const Router3 = require('./routes/MapRoute');
app.use('/', Router1);
app.use('/view', Router2);
app.use('/Map', Router3);






app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});