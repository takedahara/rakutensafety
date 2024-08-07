const express = require('express');
const fetch = require('node-fetch'); // or use 'node-fetch' npm package
const app = express();

app.use(express.json()); // To parse JSON body
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded bodies

app.post('/Button2View', async (req, res) => {
    const { loginName, loginPass } = req.body;
    try {
        const response = await fetch('http://localhost:4000/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ rakutenid: loginName, password: loginPass })
        });

        const data = await response.json();

        if (response.ok) {
            res.render('success', { token: data.token });
        } else {
            res.render('login', { error: 'ユーザIDもしくはパスワードが間違っています' });
        }
    } catch (error) {
        res.render('login', { error: 'エラーが発生しました' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
