
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var urliii = require('url');
var path = require('path');
var fs = require('fs');
var multiparty = require('multiparty');
var util = require('util');
var request = require('request');
var bodyParser = require('body-parser');
var Joi = require('joi');
var firebase = require("firebase");

var m1 = require('./m1');
var m2 = require('./m2');
var m3 = require('./m3');
var m4 = require('./m4');
var m5 = require('./m5');
var m6 = require('./m6');
var register = require('./register');
// var login = require('./login');


router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true }));


console.log('api require');
router.get('/',function(req, res, next){
  res.send('respond with a resource');
});



router.use('/m1',m1);
router.use('/m2',m2);
router.use('/m3',m3);
router.use('/m4',m4);
router.use('/m5',m5);
router.use('/m6',m6);
// router.use('/register',register);
// router.use('/login',login);




module.exports = router;