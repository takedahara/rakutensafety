exports.index = (req, res) => {
    res.render('view', { title: 'Home' });
  }; 

exports.Button2Map = (req, res) => {

// 現在地情報を取得する

    res.render('Map', { title: 'Map' });

    const { latitude, longitude } = req.body;

    // 位置情報を処理（例: データベースに保存するなど）
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

    // res.send('Location received successfully!');


// MongoDBのデータを取得する




  };