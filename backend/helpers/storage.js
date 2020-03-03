import { truncateDuplicateElements } from "./storageManipulationHelper";

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
 * Loop through given syonyms and add them and into storage.
 * Also, update the existing synonyms and add new indexes to them.
 * @param {*} synonyms Array of synonym strings
 */
export const addSynonyms = synonyms => {
    const cleanSynonyms = truncateDuplicateElements(synonyms);
    const affectedIndexes = [];
    cleanSynonyms.forEach(word => {
        if (wordsStorage[word]) {
            // word is already present in storage
            const matchedIndexes = wordsStorage[word];
            affectedIndexes.push(...matchedIndexes);
            affectedIndexes.forEach(affectedIndex => {
                const affectedWord = Object.keys(wordsStorage)[affectedIndex];
                wordsStorage[affectedWord] = truncateDuplicateElements([...affectedIndexes]);
            });
        } else {
            // new word
            wordsStorage[word] = [...affectedIndexes];
            const newWordIndex = Object.keys(wordsStorage).length - 1;
            affectedIndexes.push(newWordIndex)
            affectedIndexes.forEach(affectedIndex => {
                const affectedWord = Object.keys(wordsStorage)[affectedIndex];
                const existingWordsIndexes = wordsStorage[affectedWord];
                wordsStorage[affectedWord] = truncateDuplicateElements([...existingWordsIndexes, newWordIndex]);
            });
        }
    });
};

/**
 * Retrieve the list of synonyms
 * @param {*} word A String which represents a word whose synonyms should be retrieved
 */
export const getSynonyms = word => {
    const synonymsIndexes = wordsStorage[word];

    if (!synonymsIndexes) {
        return [];
    }

    const words = Object.keys(wordsStorage);
    return synonymsIndexes
        // Do not show the word as its own synonym
        .filter(synonymIndex => synonymIndex !== words.indexOf(word))
        .map(synonymIndex => words[synonymIndex]);
};

/**
 * Removes all synonyms
 */
export const removeAllSynonyms = () => wordsStorage = {};

export const getAllSynonyms = () => wordsStorage;
