exports.index = (req, res) => {
  res.render('login', { title: 'login' });
}; 

exports.Button2View = (req, res) => {

      res.render('view', { title: 'view' });
  
    };

exports.ValidateLogin = async (req, res) => {

  try {
    const response = await fetch('http://auth:4003/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        rakutenid: req.body.rakutenid,
        password: req.body.password
      })
    });

    const data = await response.json();
    console.log("取得したログイン情報:", data);
    
    // レスポンスデータをクライアントに返す
    res.status(200).json(data);

  } catch (error) {
    console.error("エラーが発生しました:", error);
    res.status(500).json({ error: "エラーが発生しました。" });
  }
};