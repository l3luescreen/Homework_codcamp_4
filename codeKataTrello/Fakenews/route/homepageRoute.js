var express = require('express');

var newsController = require('../controller/newsController');
var router = express.Router();

router.get("/", newsController.showNews);

module.exports = router;