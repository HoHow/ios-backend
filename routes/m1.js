var express = require('express');
var router = express();
router.get('/', function(req, res, next){

  var name = req.query.name;
  if(name == null){
    res.json({msg: "ok",
            method: req.method,
            headers: req.headers,
            body: req.body,
            query: req.query
    });
  }else{
    res.json({msg: "hello "+name,
              method: req.method,
              headers: req.headers,
              body: req.body,
              query: req.query
    });
  }
});

module.exports = router;