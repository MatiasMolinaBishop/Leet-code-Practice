//Write a function in JavaScript that takes in a string as input and returns the reverse of that string. For example, if the input is "Hello, World!", the function should return "!dlroW ,olleH".

const reverse = (str) => {
    //split('') will create an arr from the str and it will separated in whatver we specify as argument to the method
    //in this case ('') will split each length of the str
    //join('') acts the same way but it joins arr and makes the string
    return str.split('').reverse().join('')
}

console.log(reverse("Hello, World!"))

//Write a function in JavaScript that takes in a string and returns the number of vowels (a, e, i, o, u) present in the string. For example, if the input is "Hello, World!", the function should return 3.

const countVowels = (str) => {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0


    let newArr = str.split('')

    newArr.forEach(letter => {
        if (vowels.includes(letter.toLowerCase())) {
            count++
        } else {
            console.log(`${letter} is not a vowel`)
        }

    });

    return count
}

console.log(countVowels('holA'))

//Question 3
//Write a function in JavaScript that takes in an array of strings and returns the longest string in the array. If there are multiple strings with the same length, return the first occurrence. For example, if the input array is ["apple", "banana", "orange"], the function should return "banana".

const longest = (arr) => {

    let longest = ''

    for (let i = 0; i < arr.length; i++) {
        // console.log(longest.length)
        // console.log(arr[i].length)
        // console.log(arr[i])
        if (arr[i].length > longest.length) {
            longest = arr[i]
        }
    }

    return longest
}

console.log(longest(["apple", "banana", "orange"]))