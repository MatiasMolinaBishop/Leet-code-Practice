function removeDuplicateWords(string) {
    const words = string.split(' ');
    const result = [];

    for (let i = 0; i < words.length; i++) {
        if (i === 0 || words[i] !== words[i - 1]) {
            result.push(words[i]);
        }
    }

    return result.join(' ');
}

//ANOTERH WAY 

//In this approach, we split the string into an array of words using the split method. 
//Then, we create a Set from the array to remove duplicate words since Sets only store unique values. 
//Finally, we convert the Set back to an array using Array.from and join the unique words with spaces using the join method.

function removeDuplicateWords(string) {
    const words = string.split(' ');
    const uniqueWords = Array.from(new Set(words));
    return uniqueWords.join(' ');
}