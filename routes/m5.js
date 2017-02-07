var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var multiparty = require('multiparty');

var router = express();

router.use(bodyParser.json());  
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/',function(req, res, next){
  var a1 = req.body.fileName;
  var a2 = req.body.description;
  var a3 = req.body.size;
  var a4 = req.body.format;
  var a5 = req.body.profile;
  
  var form = new multiparty.Form({uploadDir: './uploads/'});
  
  
  var message = '';

  form.on('error', function(err) {
    console.log('Error parsing form: ' + err.stack);
    res.json({error:err.stack});

  });  

  form.on('part',function(part){
    if(!part.filename){
      res.json({msg:"請上傳檔案"})
      part.resume();
    }

  });

  form.on('file',function(name, file){
    
    
    var tmp_path = './'+file.path;
    var target_path = './uploads/'+file.originalFilename;

    fs.rename(tmp_path,target_path,function(err){
      if(err){
        console.error(err.stack);
      }else{
        message = "成功上傳";
        res.json({message:message});
      }
    });
          
  });
  
  form.parse(req);
  


});

module.exports = router;
