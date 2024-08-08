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
        const shelterInfo = await getShelterInfo(prefecture);
        console.log(shelterInfo);
        return res.json(shelterInfo);  
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

async function getShelterInfo(prefecture) {
  try {
    const response = await fetch(`http://backend:4001/shelters/${prefecture}`);

    if (!response.ok) {
      throw new Error('避難所情報の取得に失敗しました');
    }

    const data = await response.json();
    // console.log("取得した避難所情報:", data);
    return data;

  } catch (error) {
    console.error("エラーが発生しました:", error);
    console.log("エラーが発生しました。");
  }
}

// const express = require('express');
// app = express();

// app.get('/GetLocations', (req, res) => {
//     // サンプルの位置情報データ
//     const locations = [
//       { latitude: 35.6895, longitude: 139.6917, accuracy: 100 }, // 東京
//       { latitude: 34.0522, longitude: -118.2437, accuracy: 200 }, // ロサンゼルス
//       { latitude: 51.5074, longitude: -0.1278, accuracy: 150 } // ロンドン
//     ];
  
//     res.json({ locations });
//   });
  

exports.shelterInfo = async (req, res) => {

  console.log("避難所情報を取得します。" , req.body.shelterid);

  try {
    const response = await fetch(`http://backend:4001/shelters/${req.body.shelterid}/medicine-stats`);

    if (!response.ok) {
      throw new Error('避難所情報の取得に失敗しました');
    }

    const data = await response.json();
    console.log("取得した避難所情報+α:", data);
    return res.json(data)

  } catch (error) {
    console.error("エラーが発生しました:", error);
    console.log("エラーが発生しました。");
  }

};