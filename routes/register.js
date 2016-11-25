var express = require('express');
var Joi = require('joi');
var bodyParser = require('body-parser');
var registerCtrl = require('../controller/register');
var router = express();


 router.use(bodyParser.json());  
 router.use(bodyParser.urlencoded({ extended: true }));

var schema = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{1,30}$/).required(),
  confirm_password: Joi.string().regex(/^[a-zA-Z0-9]{1,30}$/).required(),
});


router.post('/', function(req, res, next){

  Joi.validate(req.body, schema, function (err, value) { 
    if(err){

      res.json({message:err.message});
    }else{
      // console.log("a");
      // if(req.body.email != '' && req.body.password != ''){
      //   registerCtrl.add(req.body,function(err,message){
      //     res.json(err?400:200,message)
      //     console.log("router ok");
      //   });
        
      // }
    }
  });
  
});



module.exports = router;
