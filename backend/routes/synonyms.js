import express from 'express';
import { getSynonyms, addSynonyms } from '../helpers/storage';
import { isWordValid, prepareWord, prepareSynonyms, areSynonymsValid } from '../helpers/stringHelper';
import { INVALID_WORD_RESPONSE, INVALID_SYNONYMS_RESPONSE } from '../helpers/resources';
import { prepareError } from '../helpers/responseHelper';
const router = express.Router();

/**
 * Retrieve synonyms for word specified in url param
 */
router.get('/:word', (req, res) => {
  const { word } = req.params;
  const preparedWord = prepareWord(word);

  if (!isWordValid(preparedWord)) {
    res.status(400).send(prepareError(INVALID_WORD_RESPONSE));
  }

  res.send(getSynonyms(preparedWord));
});

/**
 * Add new synonyms
 */
router.post('/', (req, res) => {
  const { word, synonyms } = req.body;
  
  if (!isWordValid(word)) {
    res.status(400).send(prepareError(INVALID_WORD_RESPONSE));
  }
  if (!areSynonymsValid(synonyms)) {
    res.status(400).send(prepareError(INVALID_SYNONYMS_RESPONSE));
  }
  
  const preparedWord = prepareWord(word);
  const preparedSynonyms = prepareSynonyms(synonyms);


  addSynonyms(preparedWord, preparedSynonyms);

  res.send();
})

module.exports = router;
