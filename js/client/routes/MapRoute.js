const express = require('express');
const router = express.Router();
const homeController = require('../controllers/Mapcontroller');

// ホームページのルート
// router.get('/Map', homeController.index);

// ページを開いた時に現在地を取得する
router.post('/CurrentLocation', homeController.CurrentLocation);

module.exports = router;