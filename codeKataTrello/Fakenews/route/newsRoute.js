var express = require('express');

var showNewSController = require('../controller/showNewsController');
var router = express.Router();
// var app = express();

// app.param('id', function(req, res, next, id) {
//     req.db.get('stories').findOne({ _id: id }, function(error, story) {
//         if (error) return next(error);
//         if (!story) return next(new Error('Nothing is found'));
//         req.story = story;
//         next();
//     });
// });

router.get("/", showNewSController.newsData);

module.exports = router;