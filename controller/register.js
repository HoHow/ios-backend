var Users = require('../model/user');
// var token = require('./token');


var controller = {
  add: add
};

function add(req, callback){
  comparePassword(req,callback);
}

function comparePassword(req, callback){
  if(req.password == req.confirm_password){
    //寫入資料庫
    var user = Users();
    
  }
}


module.exports = controller;