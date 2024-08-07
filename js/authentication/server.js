// server.js
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');

const app = express();
const port = process.env.PORT || 4000;
const mongoURI = process.env.MONGO_URI || "mongodb://mongo:27017/shelter";

// MongoDBに接続
mongoose.connect(mongoURI)
  .then(() => console.log("MongoDBに接続しました"))
  .catch((error) => console.error("MongoDBの接続エラー:", error));

app.use(express.json());
app.use('/auth', authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
