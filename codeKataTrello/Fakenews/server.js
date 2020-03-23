const express = require('express');
const homepageRoute = require('./route/homepageRoute');
const newsRoute = require('./route/newsRoute');
const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.set('views', 'view');

app.use("/", homepageRoute);
app.use("/fakenews", newsRoute);

app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});