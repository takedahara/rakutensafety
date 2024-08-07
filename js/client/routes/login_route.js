const express = require('express');
const router = express.Router();
const homeController = require('../controllers/login_controller');

// loginページ
router.get('/', homeController.index);

// viewへのボタン
router.post('/Button2View', homeController.Button2View);


module.exports = router;