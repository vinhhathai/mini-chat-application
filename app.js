'use strict';

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
const DBConnection = require('./DBConnection/DBConnection');

//-----------------------------------END IMPORTING--------------------------------

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'public', 'uploads')));

//END SETUP ENGINE----------------------------------------------------------------

//CONNECT TO DB
const connect = new DBConnection();
connect.connect();

//Excute main routes
app.use('/', indexRouter);

// Export app
module.exports = app;
