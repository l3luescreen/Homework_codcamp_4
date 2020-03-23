/*
    This is controller from newsRoute
*/
const http = require('http');
const newsModel = require('../model/newsModel');

module.exports.newsData = (req, res) => {
    async function getNews() {
        const newsId = req.param('id');

        const news = await newsModel.find({ id: newsId });
        // console.log(news);
        // res.write(JSON.stringify(news));
        res.render('news', { data: news });
    }
    getNews();
    // res.send(201).end();
}