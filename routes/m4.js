var express = require('express');
var multiparty = require('multiparty');
var util = require('util');
var request = require('request');
var router = express();

router.post('/',function(req,res,next){

  var form = new multiparty.Form();
  form.parse(req,function(err,country){
    
    for (var k in country){
      if (country.hasOwnProperty(k)) {
        var country = country[k].toString();
      }
    }
  
   if(country == ''){
    res.json({message:"沒有資料"})
   }else{
   var url = "http://opendata.epa.gov.tw/ws/Data/UV/?$orderby=PublishTime%20desc&$skip=0&$top=1000&format=json";
   request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var data = JSON.parse(body);
      console.log(data); 
      var search = [];

      for(var info in data){
        search.push(data[info]);
        
      }
      var info = search.filter(function(val){
        return val.County === country;
      });
      

      res.json({status: response.statusCode,
                message: message,
                data: info});
      }else{
      var message = "error";
      res.json({status: response.statusCode,
             message: message});


    }
  
  });
  }
 }); 

});

module.exports = router;
