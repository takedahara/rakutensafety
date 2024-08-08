const express = require('express');
const router = express.Router();

const homeController = require('../controllers/login_controller');
const aboutController = require('../controllers/controller');
const contactController = require('../controllers/Mapcontroller');
const addController = require('../controllers/add_controller');

router.get('/', homeController.index);
router.get('/Button2View', aboutController.index);
router.get('/Map', contactController.index);
router.get('/add', addController.index);
// 楽天ヘルスケアへのボタン
// router.post('/Button2HealthCare', homeController.Button2HealthCare);
// 楽天安否確認へのボタン
// router.post('/Button2Mobile', homeController.Button2Mobile);
// ページを開いた時に現在地を取得する
router.post('/CurrentLocation', contactController.CurrentLocation);
router.post('/shelterInfo', contactController.shelterInfo);
// ログイン情報確認
router.post('/ValidateLogin', homeController.ValidateLogin);
router.post('/Registration', addController.Registration);

module.exports = router;