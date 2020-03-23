/*
    This is controller from homePage route
*/
const newsModel = require('../model/newsModel');


module.exports.showNews = (req, res) => {
    async function getNews() {
        const news = await newsModel.find();
        // console.log(news);
        res.render('index', { data: news });
    }
    getNews();

}