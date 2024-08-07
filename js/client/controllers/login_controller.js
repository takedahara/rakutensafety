exports.index = (req, res) => {
  res.render('login', { title: 'login' });
}; 

exports.Button2View = (req, res) => {

      res.render('view', { title: 'view' });
  
    };