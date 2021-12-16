var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var {assertDatabaseConnectionOk} = require('./helpers/database.helper');
const helmet = require('helmet');
const {sequelize} = require('./models');

var app = express();
(async () => {
    await assertDatabaseConnectionOk();
    await sequelize.sync({ force: true });
})();

app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
