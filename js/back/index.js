// js/backend/index.js

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// MongoDBの接続URL
const mongoURI = process.env.MONGO_URI || "mongodb://mongo:27017/shelter";

// MongoDBに接続
mongoose.connect(mongoURI)
  .then(() => console.log("MongoDBに接続しました"))
  .catch((error) => console.error("MongoDBの接続エラー:", error));

// スキーマとモデルの定義
// 避難所スキーマ
const shelterSchema = new mongoose.Schema({
  id: Number,
  name: String,
  location: { latitude: Number, longitude: Number },
  prefecture: String,
  capacity: Number,
  food: Number,
  water: Number,
  medicines: { type: Map, of: String }, // 薬の在庫情報をMapで管理
});
// 修正: モデル名とコレクション名の確認
const Shelter = mongoose.model("Shelter", shelterSchema, "shelter_info");


// 人スキーマ
const personSchema = new mongoose.Schema({
  rakutenId: String,
  name: String,
  birthDate: Date,
  gender: String,
  medicinePerDay: Object, // 各薬の1日当たりの必要量をオブジェクトで管理
  shelterId: Number,
});

const Person = mongoose.model("Person", personSchema, "people_info");




// 県の情報に基づいて避難所情報を取得するエンドポイント
app.get("/shelters/:prefecture", async (req, res) => {
  try {
    const prefecture = req.params.prefecture;
    const regex = new RegExp(`^${prefecture}$`, 'i');  // 大文字小文字を区別しない正規表現
    const shelters = await Shelter.find({ prefecture });

    console.log("取得した避難所情報:", shelters);  // 追加: デバッグ用ログ

    res.json(shelters);
  } catch (error) {
    console.error("could not catch information from DB:", error);
    res.status(500).send("error occurred while fetching shelter information");
  }
});


// 新しい避難所を作成して保存するエンドポイント
app.post("/shelters", async (req, res) => {
  try {
    const { name, location, prefecture, capacity, food, water, medicines } = req.body;

    console.log("Received request body:", req.body);

    // 現在の最大のIDを取得
    const maxShelter = await Shelter.findOne().sort({ id: -1 }).exec();
    const newId = maxShelter ? maxShelter.id + 1 : 1;

    const newShelter = new Shelter({
      id: newId,
      name: name,
      location: location,
      prefecture: prefecture,
      capacity: capacity,
      food: food,
      water: water,
      medicines: medicines
    });

    console.log("Saving new shelter:", newShelter);

    await newShelter.save();
    res.status(201).send("新しい避難所が追加されました");
  } catch (error) {
    console.error("避難所の追加中にエラーが発生しました:", error);
    res.status(500).send("避難所の追加中にエラーが発生しました");
  }
});



// 避難所IDに基づいて避難所情報を取得するエンドポイント
app.get("/location/hinanzyo/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);  // IDは数値として処理
    const shelter = await Shelter.findOne({ id });

    if (!shelter) {
      return res.status(404).send("避難所が見つかりません");
    }

    console.log("取得した避難所情報:", shelter);  // 追加: デバッグ用ログ

    res.json(shelter);
  } catch (error) {
    console.error("エラーが発生しました:", error);
    res.status(500).send("エラーが発生しました");
  }
});

// 避難所IDに基づいて人情報を取得するエンドポイント
app.get("/people/:shelterId", async (req, res) => {
  try {
    const shelterId = parseInt(req.params.shelterId, 10); // 避難所IDを数値として処理
    const people = await Person.find({ shelterId });

    if (!people || people.length === 0) {
      return res.status(404).send("該当する人が見つかりません");
    }

    console.log("取得した人情報:", people);  // 追加: デバッグ用ログ

    res.json(people);
  } catch (error) {
    console.error("エラーが発生しました:", error);
    res.status(500).send("エラーが発生しました");
  }
});

// 避難所IDに基づいて薬の在庫情報と需要を取得するエンドポイント
app.get("/shelters/:id/medicine-stats", async (req, res) => {
  try {
    const shelterId = parseInt(req.params.id, 10);
    const shelter = await Shelter.findOne({ id: shelterId });

    if (!shelter) {
      return res.status(404).send("避難所が見つかりません");
    }

    const people = await Person.find({ shelterId });

    // 各薬の1日の需要量を計算
    const demand = {};

    people.forEach((person) => {
      const medicinePerDay = person.medicinePerDay || {};
      for (const medicine in medicinePerDay) {
        demand[medicine] = (demand[medicine] || 0) + medicinePerDay[medicine];
      }
    });

    // 各薬の在庫量
    const stock = {};

    for (const [medicine, amount] of shelter.medicines.entries()) {
      stock[medicine] = parseInt(amount, 10);
      // デフォルト値を設定
      if (!(medicine in demand)) {
        demand[medicine] = 0;
      }
    }

    // 各薬が何日持つかを計算
    const daysSupply = {};

    for (const medicine in stock) {
      daysSupply[medicine] =
        demand[medicine] > 0
          ? Math.floor(stock[medicine] / demand[medicine])
          : "NA";
    }

    // 避難所情報と薬の統計情報をまとめて返す
    const response = {
      id: shelter.id,
      currentpeople: people.length,
      name: shelter.name,
      location: shelter.location,
      prefecture: shelter.prefecture,
      capacity: shelter.capacity,
      food: shelter.food,
      water: shelter.water,
      medicines: shelter.medicines,
      stock,
      demand,
      daysSupply,
    };

    res.json(response);
  } catch (error) {
    console.error("エラーが発生しました:", error);
    res.status(500).send("エラーが発生しました");
  }
});




// サーバーの起動
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`server listening on port${PORT}.`);
});