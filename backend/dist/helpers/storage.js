"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getAllSynonyms = exports.removeAllSynonyms = exports.getSynonyms = exports.addSynonyms = undefined;

var _storageManipulationHelper = require("./storageManipulationHelper");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * All synonyms are persisted in an object in memory called `wordsStorage`.
 * For each added word, a new key will be inserted into `wordsStorage`. Under that key,
 * there will be an array of integers, where each integer represents the index of one synonym of that word.
 * 
 * data structure example:
 * {
 *    'wash': [1],
 *    'clean': [0],
 *    'come': [3, 4, 5, 6, 7],
 *    'advance': [2, 4, 5, 6, 7],
 *    'approach': [2, 3, 5, 6, 7],
 *    'arrive': [2, 3, 4, 6, 7],
 *    'near': [2, 3, 4, 5, 7],
 *    'reach': [2, 3, 4, 5, 6]
 * }
 */

var wordsStorage = {};

/**
 * Loop through given syonyms and add them and into storage.
 * Also, update the existing synonyms and add new indexes to them.
 * @param {*} synonyms Array of synonym strings
 */
var addSynonyms = exports.addSynonyms = function addSynonyms(synonyms) {
    var cleanSynonyms = (0, _storageManipulationHelper.truncateDuplicateElements)(synonyms);
    var affectedIndexes = [];
    cleanSynonyms.forEach(function (word) {
        if (wordsStorage[word]) {
            // word is already present in storage
            var matchedIndexes = wordsStorage[word];
            affectedIndexes.push.apply(affectedIndexes, _toConsumableArray(matchedIndexes));
            affectedIndexes.forEach(function (affectedIndex) {
                var affectedWord = Object.keys(wordsStorage)[affectedIndex];
                wordsStorage[affectedWord] = (0, _storageManipulationHelper.truncateDuplicateElements)([].concat(affectedIndexes));
            });
        } else {
            // new word
            wordsStorage[word] = [].concat(affectedIndexes);
            var newWordIndex = Object.keys(wordsStorage).length - 1;
            affectedIndexes.push(newWordIndex);
            affectedIndexes.forEach(function (affectedIndex) {
                var affectedWord = Object.keys(wordsStorage)[affectedIndex];
                var existingWordsIndexes = wordsStorage[affectedWord];
                wordsStorage[affectedWord] = (0, _storageManipulationHelper.truncateDuplicateElements)([].concat(_toConsumableArray(existingWordsIndexes), [newWordIndex]));
            });
        }
    });
};

/**
 * Retrieve the list of synonyms
 * @param {*} word A String which represents a word whose synonyms should be retrieved
 */
var getSynonyms = exports.getSynonyms = function getSynonyms(word) {
    var synonymsIndexes = wordsStorage[word];

    if (!synonymsIndexes) {
        return [];
    }

    var words = Object.keys(wordsStorage);
    return synonymsIndexes
    // Do not show the word as its own synonym
    .filter(function (synonymIndex) {
        return synonymIndex !== words.indexOf(word);
    }).map(function (synonymIndex) {
        return words[synonymIndex];
    });
};

/**
 * Removes all synonyms
 */
var removeAllSynonyms = exports.removeAllSynonyms = function removeAllSynonyms() {
    return wordsStorage = {};
};

var getAllSynonyms = exports.getAllSynonyms = function getAllSynonyms() {
    return wordsStorage;
};