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
const loginschema = new mongoose.Schema({
  rakutenid: String,
  password: String,
});

// モデルの定義
const Users = mongoose.model("Users", loginschema, "users");

// ログイン情報を確認するエンドポイント
app.post("/auth/login", async (req, res) => {
  const { rakutenid, password } = req.body;
  try {
    const user = await Users.findOne({ rakutenid, password });
    if (user) {
      console.log("User found:", user);
      res.status(200).json({ message: "Login successful" });
    } else {
      console.log("User not found");
      res.status(401).json({ message: "Invalid rakutenid or password" });
    }
  } catch (error) {
    console.error("Error occurred while checking login information:", error);
    res.status(500).send("An error occurred while checking login information");
  }
});

// サーバーの起動
const PORT = process.env.PORT || 4003;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});
