var express = require('express');
var router = express.Router();
var pool = require('../mysql')

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(pool);
  res.send({ title: 'Express' });
});



module.exports = router;


