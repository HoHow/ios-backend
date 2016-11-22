var express = require('express');
var bodyParser = require('body-parser');
var router = express();
var url = require('url');
/*任務二*/
router.get('/', function(req, res, next){

  var head = req.headers.cat;
  
  if(head === "true"){
    urla = req.headers.host + '/images/cat.jpg';
  }else{
    urla = req.headers.host + '/images/dog.jpg';
  }

  res.json({
    msg: head,
    url: urla,
  });
});



module.exports = router;

