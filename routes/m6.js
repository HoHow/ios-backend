var express = require('express');

// var fs = require('fs');
// var multiparty = require('multiparty');
// var util = require('util');

var router = express();

router.get('/',function(req, res, next){
  
  var url = req.headers.host;
  res.json({url:url+'/images/cat.jpg'});
  
});

module.exports = router;