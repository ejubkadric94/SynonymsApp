var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const a = "test";
  res.send({ title: 'Express22', a });
});

module.exports = router;
