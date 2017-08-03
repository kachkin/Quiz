/* eslint-disable quotes */
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');
var mongoClient = require("mongodb").MongoClient;
var mongoose = require("mongoose");
var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var MongoStore = require("connect-mongo")(session);

var app = express();
var port = 3000;
var url = "mongodb://localhost:27017/quiz";

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}))
app.use(webpackHotMiddleware(compiler));
app.use(bodyParser.json());
app.use(session({
    secret: "itsMyQuizProject",
    saveUninitialized: false,
    resave: false,
    store: new MongoStore({
        url: url,
        touchAfter: 24 * 3600,
        autoRemove: false
    })
}));

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

var userScheme = new Schema({
    firstName: String,
    lastName: String,
    login: String,
    password: String,
    teacher: Boolean
},{versionKey: false});
var themeScheme = new Schema({
    name: String,
    value: String
}, {versionKey: false});

var questionScheme = new Schema({
    theme: String,
    value: String,
    questions: Array
},{versionKey: false});


var Theme = mongoose.model("Theme", themeScheme);
var Questions = mongoose.model("Questions", questionScheme);
var User = mongoose.model("User", userScheme);


app.get("/", function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.get("/themes", function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.get("/themes/questions/:theme", function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
/*app.get("/themes/result", function (req, res) {
 res.sendFile(__dirname + '/index.html');
 });*/


app.get("/api/questions/:theme", function (req, res) {
    var theme = req.params.theme;
    mongoose.connect(url, {
        useMongoClient: true
    });
    Questions.findOne({theme: theme}, function (err, questions) {

        mongoose.disconnect();
        if (err) return res.status(400).send();

        res.send(questions);
    });
});

app.get("/api/themes/", function (req, res) {
    mongoose.connect(url, {
        useMongoClient: true
    });
    Theme.find({}, function (err, themes) {
        mongoose.disconnect();
        if (err) return res.status(400).send();

        res.send(themes);
    });

});

app.get("/api/auth/", function (req, res) {
    var login = req.query.login;
    var password = req.query.password;
    mongoose.connect(url, {
        useMongoClient: true
    });
    User.findOne({
        login: login,
        password: password
    }, function (err, user) {
        mongoose.disconnect();

        if (err) return res.status(400).send();

        res.send(user);
    });
});

app.post("/api/register/", function (req, res) {
    console.log(req.body);
    var user={
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        login: req.body.login,
        password: req.body.login,
        teacher: req.body.teacher
    };
    mongoose.connect(url,{
        useMongoClient: true
    });
    User.create(user, function (err, user) {
        mongoose.disconnect();
        if(err) return console.log(err);

        console.log("User save", user)
    });
    res.send(true);
});

app.listen(port, function (error) {
    if (error) {
        console.error(error)
    } else {
        console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
    }
});

