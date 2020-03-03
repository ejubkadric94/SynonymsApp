const MAX_WORD_LENGTH = 30;

export const isWordValid = word =>
    word && /^[a-zA-Z ]+$/.test(word) && word.length < MAX_WORD_LENGTH;

export const prepareWord = word => word.trim().toLowerCase();

export const areSynonymsValid = synonyms =>
    Array.isArray(synonyms) &&
    synonyms.length > 1 &&
    synonyms.every(synonym => isWordValid(synonym));


export const prepareSynonyms = synonyms =>
    synonyms.map(synonym => prepareWord(synonym));