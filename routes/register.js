var express = require('express');
var Joi = require('joi');
var bodyParser = require('body-parser');
var router = express();
Error.stackTraceLimit = Infinity;

// router.use(bodyParser.json());  
// router.use(bodyParser.urlencoded({ extended: true }));

var schema = Joi.object().keys({
  email: Joi.string().email().required()
  // password: Joi.string().regex(/^[a-zA-Z0-9]{1,30}$/).required(),
});


router.post('/', function(req, res, next){
  
  Joi.validate(req.body, schema, function (err, value) { 
    if(err){
      res.status(404).json({message:err.detaile[0].message});
    }else{
      res.status(200).json({message:"ok"});
    }
  });
  
});



module.exports = router;
