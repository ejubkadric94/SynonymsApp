import { removeDuplicateSynonyms } from "./storageManipulationHelper";

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

let wordsStorage = {};

/**
 * Find any already existing synonym word of newly added words.
 * Based on that, find the rest o
 * =
 * @param {*} synonyms 
 */
export const addSynonyms = synonyms => {
    const cleanSynonyms = removeDuplicateSynonyms(synonyms);
    const affectedIndexes = [];
    cleanSynonyms.forEach(word => {
        const words = Object.keys(wordsStorage);
        if (wordsStorage[word]) {
            // word is already present in storage
            const matchedIndexes = wordsStorage[word];
            affectedIndexes.push(...matchedIndexes);
            affectedIndexes.forEach(affectedIndex => {
                wordsStorage[words[affectedIndex]] = [...affectedIndexes];
            });
        } else {
            // new word
            wordsStorage[word] = [...affectedIndexes];
            const newWordIndex = words.indexOf(word);
            affectedIndexes.push(newWordIndex)
            affectedIndexes.forEach(affectedIndex => {
                wordsStorage[words[affectedIndex]].push(newWordIndex);
            });
        }
    });
};

export const getSynonyms = word => {
    const synonymsIndexes = wordsStorage[word];

    if (!synonymsIndexes) {
        return [];
    }

    const words = Object.keys(wordsStorage);
    return synonymsIndexes
        .filter(synonymIndex => synonymIndex !== words.indexOf(word))
        .map(synonymIndex => words[synonymIndex]);
};

export const removeAllSynonyms = () => wordsStorage = {};

export const getAllSynonyms = () => wordsStorage;
