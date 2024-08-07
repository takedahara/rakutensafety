exports.index = (req, res) => {
  res.render('login', { title: 'login', error: null });
};

exports.Button2View = async (req, res) => {
  const { loginName, loginPass } = req.body;

  try {
      const response = await fetch('http://localhost:4000/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ rakutenid: loginName, password: loginPass })
      });

      const data = await response.json();

      if (response.ok) {
          // Assuming 'data.token' contains the token or other success message
          res.render('success', { token: data.token });
      } else {
          // Handle authentication error
          res.render('login', { title: 'login', error: 'ユーザIDもしくはパスワードが間違っています' });
      }
  } catch (error) {
      // Handle request error
      res.render('login', { title: 'login', error: 'エラーが発生しました' });
  }
};