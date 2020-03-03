'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _storage = require('../helpers/storage');

var _stringHelper = require('../helpers/stringHelper');

var _resources = require('../helpers/resources');

var _responseHelper = require('../helpers/responseHelper');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

/**
 * Retrieve synonyms for word specified in url param
 */
router.get('/:word', function (req, res) {
  var word = req.params.word;


  if (!(0, _stringHelper.isWordValid)(word)) {
    res.status(_resources.HTTP_BAD_REQUEST).send((0, _responseHelper.prepareError)(_resources.INVALID_WORD_RESPONSE));
  }

  var preparedWord = (0, _stringHelper.prepareWord)(word);
  res.send((0, _storage.getSynonyms)(preparedWord));
});

/**
 * Add new synonyms
 */
router.post('/', function (req, res) {
  var synonyms = req.body.synonyms;


  if (!(0, _stringHelper.areSynonymsValid)(synonyms)) {
    res.status(_resources.HTTP_BAD_REQUEST).send((0, _responseHelper.prepareError)(_resources.INVALID_SYNONYMS_RESPONSE));
  }

  var preparedSynonyms = (0, _stringHelper.prepareSynonyms)(synonyms);
  (0, _storage.addSynonyms)(preparedSynonyms);

  res.send();
});

/**
 * Remove all existing synonyms
 */
router.delete('/', function (req, res) {
  (0, _storage.removeAllSynonyms)();
  res.send();
});

module.exports = router;