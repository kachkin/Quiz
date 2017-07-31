/* eslint-disable quotes */
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');
var mongoClient = require("mongodb").MongoClient;
var mongoose = require("mongoose");
var express = require("express");
var bodyParser = require("body-parser");
//var MongoStore = require("connect-mongo")(express);

var app = express();
var port = 3000;

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}))
app.use(webpackHotMiddleware(compiler));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

/*var userScheme = new Schema({
 firstName: String,
 lastName: String,
 login: String,
 password: String
 });*/
var themeScheme = new Schema({
    name: String,
    value: String
}, {versionKey: false});

var questionScheme = new Schema({
    theme: String,
    value: String,
    questions:Array
});


var Theme = mongoose.model("Theme", themeScheme);
var Questions = mongoose.model("Questions", questionScheme);


var url = "mongodb://localhost:27017/quiz";


app.get("/", function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get("/themes/:theme", function (req, res) {
    res.sendFile(__dirname + '/index.html');

});

app.get("/api/questions/:theme", function (req, res) {
    var theme = req.params.theme;
    mongoose.connect(url,{
        useMongoClient: true
    });
    Questions.findOne({theme: theme}, function (err, questions) {

        mongoose.disconnect();
        if(err) return res.status(400).send();

        res.send(questions);
    });
});

app.get("/api/themes/", function (req, res) {
    mongoose.connect(url,{
        useMongoClient: true
    });
    Theme.find({}, function (err, themes) {
        mongoose.disconnect();
        if (err) return res.status(400).send();

        res.send(themes);
    });

});

app.get("/api/auth/:login/:password", function (req, res) {
    var login = req.params.login;
    var password = req.params.password;
    mongoClient.connect(url, function (err, db) {
        db.collection("users").findOne({login: login, password: password}, function (err, user) {
            if (err) return res.status(400).send();

            res.send(user);
            db.close();
        })
    })
});

app.listen(port, function (error) {
    if (error) {
        console.error(error)
    } else {
        console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
    }
});

