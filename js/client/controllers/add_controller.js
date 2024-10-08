exports.index = (req, res) => {
  res.render('add', { title: 'add' });
}; 

exports.Registration = async (req, res) => {

  console.log(req.body);

  try {
    const response = await fetch(`http://backend:4001/shelters`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: req.body.shelterName,
        location: {
          latitude: req.body.location.latitude,
          longitude: req.body.location.longitude
        },
        prefecture: req.body.prefecture,
        capacity: req.body.capacity,
        food: req.body.food,
        water: req.body.water,
        medicines: {
            medicine1: req.body.medicines.medicine1,
            medicine2: req.body.medicines.medicine2,
            medicine3: req.body.medicines.medicine3
        }
    })
    });

    const data = await response.text();
    console.log("取得した登録情報:", data);
    
    // レスポンスデータをクライアントに返す
    res.status(200).json(data);

  } catch (error) {
    console.error("エラーが発生しました:", error);
    res.status(500).json({ error: "エラーが発生しました。" });
  }
}