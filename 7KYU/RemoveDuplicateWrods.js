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


//Remove all duplicates on a str
//We need to split the words on the str into an arr so that i can create a set (includes only unqiye values)
//new Set(words)
//Once we have the set get an array from the set values Array.from(new Set(words))
//Once we have the array of unique words we join them .join(' ')


