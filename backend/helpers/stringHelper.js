export const isWordValid = word => word && /^[a-zA-Z ]+$/.test(word);

export const areSynonymsValid = synonyms =>
    synonyms.every(synonym => isWordValid(synonym));

export const prepareWord = word => word.trim();

export const prepareSynonyms = synonyms =>
    synonyms.map(synonym => prepareWord(synonym));