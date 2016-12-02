// var Users = require('../model/user');
// var token = require('./token');
var firebase = require("firebase");

var config = {
    apiKey: "AIzaSyAesJTSuxlXeiQwnbyIqX1KzIGx6yeG0Ss",
    authDomain: "iosporject.firebaseapp.com",
    databaseURL: "https://iosporject.firebaseio.com",
    storageBucket: "iosporject.appspot.com",
     messagingSenderId: "783097981047"
  };
firebase.initializeApp(config);
var rootRef = firebase.database().ref();
var controller = {
  add: add
};

function add(req, callback){
  comparePassword(req,callback);
}

function comparePassword(req, callback){

  if(req.password == req.confirm_password){
    writeUserData(req.email,req.password)

  }else{
    callback(true,{message:'輸入兩次密碼不同'})
  }
}

function writeUserData(email, password){
  var userId = '';
  
}


module.exports = controller;