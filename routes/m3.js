var express = require('express');
var bodyParser = require('body-parser');
var router = express();

router.post('/', function(req, res, next){
  console.log(req.body);
  var head = [
  {name: "吳先生",age:"20",gender:"男"},
  {name: "陳小姐",age:"25",gender:"女"},
  {name: "許小姐",age:"24",gender:"女"}];

  var gender = req.body.gender;
  var search = '';

  if(gender === true){
    var search = head.filter(function (value) {
      return value.gender ==  "男";
    });
  }else{
    var search = head.filter(function (value) {
      return value.gender ==  "女";
    });
  }

  res.json({msg:search});
  
});



module.exports = router;
