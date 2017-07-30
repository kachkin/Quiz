/* eslint-disable quotes */
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');
var mongoClient = require("mongodb").MongoClient;
var express = require("express");
var app = express();
var port = 3000;

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}))
app.use(webpackHotMiddleware(compiler));

//var jsonParser = bodyParser.json();
var url = "mongodb://localhost:27017/quiz";


app.get("/", function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get("/api/questions/:theme", function (req, res) {
    var theme = req.params.theme;
    mongoClient.connect(url, function (err, db) {
        db.collection("questions").findOne({theme: theme}, function (err, questions) {
            if (err) return res.status(400).send();

            res.send(questions);
            db.close();
        })
    })
});

app.get("/api/themes/", function (req, res) {
    mongoClient.connect(url, function (err, db) {
        db.collection("themes").find({}).toArray(function (err, themes) {
            if (err) return res.status(400).send();

            res.send(themes);
            db.close();
        })
    })
})

app.listen(port, function (error) {
    if (error) {
        console.error(error)
    } else {
        console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
    }
});
