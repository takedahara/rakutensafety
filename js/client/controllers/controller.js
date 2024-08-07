exports.index = (req, res) => {
    res.render('view', { title: 'Home' });
  }; 

exports.Button2Map = (req, res) => {

    res.render('Map', { title: 'Map' });

  };