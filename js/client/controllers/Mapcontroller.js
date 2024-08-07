exports.index = (req, res) => {
    res.render('Map', { title: 'Map' });
  }; 

const apiKey = 'AIzaSyA_dorTpJmEWFa1FS7uvbxRWN9wluuvNlA'; // ここにGoogle Maps APIキーを入れてください

exports.CurrentLocation = async (req, res) => {
  const { latitude, longitude } = req.body;
  console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

  if (!latitude || !longitude) {
    return res.status(400).json({ error: 'Invalid lat or lng' });
  }

  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status === 'OK') {
      let prefecture = null;
      const results = data.results;

      for (let i = 0; i < results.length; i++) {
        const addressComponents = results[i].address_components;
        for (let j = 0; j < addressComponents.length; j++) {
          const types = addressComponents[j].types;
          if (types.includes('administrative_area_level_1')) {
            prefecture = addressComponents[j].long_name;
            break;
          }
        }
        if (prefecture) {
          break;
        }
      }

      if (prefecture) {
        console.log('都道府県名:', prefecture);
        return prefecture;
      } else {
        console.log('都道府県名が見つかりませんでした。');
      }
    } else {
      console.log('ジオコーディングに失敗しました:', data.status);
    }
  } catch (error) {
    console.error('エラーが発生しました:', error);
  }
};

async function fetchShelters(prefecture) {

  try {
    // fetch APIを使用してデータを取得
    const response = await fetch('http://localhost:3000/shelters/${prefecture}');
    
    // レスポンスがOKかどうかを確認
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    // JSON形式のレスポンスをパース
    const data = await response.json();
    
    // データをコンソールに出力（必要に応じて他の処理に変更可能）
    console.log(data);
  } catch (error) {
    // エラーハンドリング
    console.error('Fetch error:', error);
  }
}
  