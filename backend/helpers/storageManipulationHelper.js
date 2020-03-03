export const removeDuplicateSynonyms = synonyms =>
    Array.from(new Set([...synonyms]));
