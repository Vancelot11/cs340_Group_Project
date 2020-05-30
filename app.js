const createError = require('http-errors');
const logger = require('morgan');
const path = require("path");

const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var hbs = require('express-handlebars');

// view engine setup
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use('/', express.static(path.join(__dirname, "public/html")));
app.use('/css', express.static(path.join(__dirname, "public/css")));
app.use('/js', express.static(path.join(__dirname, "public/js")));

app.use(express.static(path.join(__dirname, 'public')));

/*
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/", (req, res) => {
    const indexPath = path.join(pubDir, "html", "index.html");
    res.sendFile(indexPath);
});

app.get("/index.html", (req, res) => {
    const indexPath = path.join(pubDir, "html", "index.html");
    res.sendFile(indexPath);
});
*/

const resourceRouter = require("./routers/resources.js");
app.use("/resources", resourceRouter);

// Catch 404 and forward to error handler -->
app.use((req, res, next) => {
    next(new createError.NotFound());
});

// --> Error handler <--
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json({error: err});
});

module.exports = app;
