'use strict';

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  var a = "test";
  res.send({ title: 'Express22', a: a });
});

module.exports = router;