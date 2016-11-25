// var Users = require('../model/user');
// var token = require('./token');
// var firebase = require("firebase");
// var rootRef = firebase.database().ref("users");
// var config = {
//     apiKey: "AIzaSyAesJTSuxlXeiQwnbyIqX1KzIGx6yeG0Ss",
//     authDomain: "iosporject.firebaseapp.com",
//     databaseURL: "https://iosporject.firebaseio.com",
//     storageBucket: "iosporject.appspot.com"
//     // messagingSenderId: "783097981047"
//   };
// firebase.initializeApp(config);

var controller = {
  add: add
};

function add(req, callback){
  comparePassword(req,callback);
}

function comparePassword(req, callback){
  if(req.password == req.confirm_password){
    //寫入資料庫
    // var user = Users();


  }
}

function writeUserData(email, password){
  
}


module.exports = controller;