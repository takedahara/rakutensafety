const express = require('express');
const router = express.Router();
const homeController = require('../controllers/controller');

// ホームページのルート
router.get('/view', homeController.index);

// 地図へのボタン
router.post('/Button2Map', homeController.Button2Map);

// // // 楽天ヘルスケアへのボタン
// router.post('/Button2HealthCare', homeController.Button2HealthCare);

// // 楽天安否確認へのボタン
// router.post('/Button2Mobile', homeController.Button2Mobile);

module.exports = router;