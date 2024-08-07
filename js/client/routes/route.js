const express = require('express');
const router = express.Router();

const homeController = require('../controllers/login_controller');
const aboutController = require('../controllers/controller');
const contactController = require('../controllers/Mapcontroller');

router.get('/', homeController.index);
router.get('/Button2View', aboutController.index);
router.get('/Map', contactController.index);
// 楽天ヘルスケアへのボタン
// router.post('/Button2HealthCare', homeController.Button2HealthCare);
// 楽天安否確認へのボタン
// router.post('/Button2Mobile', homeController.Button2Mobile);
// ページを開いた時に現在地を取得する
router.post('/CurrentLocation', contactController.CurrentLocation);

module.exports = router;