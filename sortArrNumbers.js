//Sort the arr of numbers

const sortArr = (arr) => {

    return arr.sort((a, b) => {
        return a < b ? 1 : -1
    })
}

//console.log(sortArr([3, 6, 8, 2, 90]))
//sort arr of book objects by authors last name

const book = [
    {
        authorName: 'JK Aolling',
        bookName: 'Harry Potter'
    },
    {
        authorName: 'Gabriel Garcia Marquez',
        bookName: '100 anos de soledad'
    },
    {
        authorName: 'Andres Cohelo',
        bookName: 'El Alquimista'
    }
]

const sortBooks = (arr) => {

    return arr.sort((book1, book2) => {
        return book1.authorName > book2.authorName ? 1 : -1
    })
}

console.log(sortBooks(book))

//Write a fucntion that sorts the book by the authors second last name

const sortByLastName = (arr) => {
    //initially we know we want to retunr the sorted books so we call .sort() on the books array
    //Then we need to do the logic so that we are sorting by the second last names

    return arr.sort((book1, book2) => {

        //We can call the 2 arguements passing into the sort call back function whatever we want. Here it makes sense to call them book1 and book 2
        //once we access the last name we split it into an arr separated by the empty spaces so that each last name its am element on the arr. 
        //then we specify the location at index 1 [1] which means 

        let lastName1 = book1.authorName.split(' ')[1]
        let lastName2 = book2.authorName.split(' ')[1]

        return lastName1 > lastName2 ? 1 : -1

    })

}

console.log(sortByLastName(book))