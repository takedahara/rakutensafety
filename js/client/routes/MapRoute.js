const express = require('express');
const router = express.Router();
const homeController = require('../controllers/Mapcontroller');

// Mapページ
router.get('/Map', homeController.index);