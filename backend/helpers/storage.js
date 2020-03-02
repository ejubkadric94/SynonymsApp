let wordsStorage = {
    'wash': [1],
    'clean': [0],
    'come': [3, 4],
    'advance': [2, 4],
    'approach': [2, 3],
    // 'arrive': [],
    // 'near': [],
    // 'reach': [],
    // 'come': []
};



const addNewWordsToStorage = (newWords, existingIndexes, newIndexes) => {
    newWords.forEach((newWord, newWordIndex) => {
        wordsStorage[newWord] = [...existingIndexes, ...(newIndexes.filter((el, idx) => idx !== newWordIndex))];
    });
};

const addNewWordsIndexesToExistingWords = (existingWords, newIndexes) => {
    existingWords.forEach(existingWord => wordsStorage[existingWord].push(...newIndexes));
};


const getAnyExistingSynonym = words => {
    const wordStorageKeys = Object.keys(wordsStorage);
    return words.find(word => wordStorageKeys.includes(word));
};
const getAllExistingSynonymsIndexes = (word, synonym) => {
    const combinedSynonymsIndexes = [...wordsStorage[word], ...wordsStorage[synonym]]
    return Array.from(new Set(combinedSynonymsIndexes));
};
const getExistingIndexes = wordsToAdd => {
    const existingSynonymWord = getAnyExistingSynonym(wordsToAdd);
    if (!existingSynonymWord) {
        return [];
    }

    const restOfExistingSynonymWords = getSynonyms(existingSynonymWord);
    return getAllExistingSynonymsIndexes(existingSynonymWord, restOfExistingSynonymWords[0]);
};
const filterNewWords = words =>
    words.filter(word => !Object.keys(wordsStorage).includes(word));

const generateNumbersInRange = (start, end) =>
    Array(end - start + 1).fill().map((el, idx) => start + idx);
const getNewWordsIndexes = newWords => {
    const numberOfExistingWords = Object.keys(wordsStorage).length;
    return generateNumbersInRange(numberOfExistingWords, numberOfExistingWords + newWords.length - 1);
};

const getExistingWords = existingIndexes =>
    Object.keys(wordsStorage).filter((word, idx) => existingIndexes.includes(idx));

export const addSynonyms = synonyms => {
    const newWords = filterNewWords(synonyms);
    const existingIndexes = getExistingIndexes(synonyms);
    const existingWords = getExistingWords(existingIndexes);
    const newIndexes = getNewWordsIndexes(newWords);

    addNewWordsToStorage(newWords, existingIndexes, newIndexes);
    addNewWordsIndexesToExistingWords(existingWords, newIndexes);
};

export const getSynonyms = word => {
    const synonymsIndexes = wordsStorage[word];

    if (!synonymsIndexes) {
        return [];
    }

    return synonymsIndexes.map(synonymIndex => Object.keys(wordsStorage)[synonymIndex]);
};

export const removeAllSynonyms = () => wordsStorage = {};