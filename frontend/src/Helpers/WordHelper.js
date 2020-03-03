export const isWordValid = word =>
    word &&
    /^[a-zA-Z ]+$/.test(word) && 
    word.length < 30;

export const getWordError = word => {
    if (!word) {
        return 'Please enter a synonym first';
    } else if (!(/^[a-zA-Z ]+$/.test(word))) {
        // Allow only english letter and space
        return 'Only English letters are allowed';
    } else if (word.length > 30) {
        return 'Too long word';
    } else {
        return null;
    }
}