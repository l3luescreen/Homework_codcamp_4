const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const config = {
    autoIndex: true,
    useNewUrlParser: true,
}

mongoose.connect('mongodb+srv://kan_z:055716303za@cluster0-jfzm3.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch(() => console.log("Can't connect to MongoDB", err));

const newsSchema = new mongoose.Schema({
    id: String,
    topic: String,
    category: [String],
    date: Date,
    newsData: String,
    intro: String,
    picture: [String]
});

const News = mongoose.model('News', newsSchema);

module.exports = News;












// const addNews = async () => {
//     const news = News({
//         id: "fnews004",
//         topic: "Hello! this is the fourth news",
//         category: ["Greeting", "test"],
//         date: new Date(),
//         newsData: "Tincidunt dui ut ornare lectus sit amet est placerat inBibendum at varius vel pharetra vel turpis nunc eget loremFaucibus nisl tincidunt eget nullam non nisi est sit ametSapien eget mi proin sed libero enim sed faucibus turpisQuisque non tellus orci ac auctor augue mauris augue neque.",
//         picture: ["https://www.fluentu.com/blog/english/wp-content/uploads/sites/4/2014/01/english-greetings.jpg"]
//     });
//     const data = await news.save()
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }


// module.exports = getNews();