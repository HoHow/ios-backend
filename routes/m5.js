var express = require('express');
var fs = require('fs');
var multiparty = require('multiparty');
var util = require('util');

var router = express();


router.post('/',function(req, res, next){
  // var a1 = req.body.a1;
  // var a2 = req.body.a2;
  // var a3 = req.body.a3;

  var form = new multiparty.Form({uploadDir: './uploads/'});
  var size = '';
  var fileName ='';
  var message = '';

  form.on('error', function(err) {
    console.log('Error parsing form: ' + err.stack);

  });  

  form.on('part',function(part){
    if(!part.filename){
      console.log("沒有檔案");
      return;
    }
    size = part.byteCount;
    fileName = part.filename;


  });

  form.on('file',function(name, file){
    
    
    var tmp_path = './'+file.path;
    var target_path = './uploads/'+file.originalFilename;

    fs.rename(tmp_path,target_path,function(err){
      if(err){
        console.error(err.stack);
      }else{
        message = "成功上傳";
        res.json({message:message,});
      }
    });
          
  });
  
  form.parse(req);
      

  


});

module.exports = router;
