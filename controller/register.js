var firebase = require("firebase");

var config = {
    apiKey: "AIzaSyAesJTSuxlXeiQwnbyIqX1KzIGx6yeG0Ss",
    authDomain: "iosporject.firebaseapp.com",
    databaseURL: "https://iosporject.firebaseio.com",
    storageBucket: "iosporject.appspot.com",
     messagingSenderId: "783097981047"
  };
firebase.initializeApp(config);
var rootRef = firebase.database();
var controller = {
  add: add
};

function add(req, callback){
  comparePassword(req,callback);
}

function comparePassword(req, callback){

  if(req.password == req.confirm_password){
    writeUserData(req.email,req.password)
    callback(false,{message:'註冊成功'});
  }else{
    callback(true,{message:'輸入兩次密碼不同'})
  }
}

function writeUserData(email, password){
    
    rootRef.ref('users/').on('value',function(snapshot){
     console.log(snapshot.val());
    
      console.log("a");
      rootRef.ref('users/').update({
        email: email,
        password: password,
        register: 0
      });
    });
}


module.exports = controller;