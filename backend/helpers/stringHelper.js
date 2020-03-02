export const isWordValid = word => word && /^[a-zA-Z ]+$/.test(word);

export const areSynonymsValid = synonyms =>
    Array.isArray(synonyms) &&
    synonyms.length > 1 &&
    synonyms.every(synonym => isWordValid(synonym));

export const prepareWord = word => word.trim().toLowerCase();

export const prepareSynonyms = synonyms =>
    synonyms.map(synonym => prepareWord(synonym));