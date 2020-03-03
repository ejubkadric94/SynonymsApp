"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var isWordValid = exports.isWordValid = function isWordValid(word) {
    return word && /^[a-zA-Z ]+$/.test(word);
};

var prepareWord = exports.prepareWord = function prepareWord(word) {
    return word.trim().toLowerCase();
};

var areSynonymsValid = exports.areSynonymsValid = function areSynonymsValid(synonyms) {
    return Array.isArray(synonyms) && synonyms.length > 1 && synonyms.every(function (synonym) {
        return isWordValid(synonym);
    });
};

var prepareSynonyms = exports.prepareSynonyms = function prepareSynonyms(synonyms) {
    return synonyms.map(function (synonym) {
        return prepareWord(synonym);
    });
};