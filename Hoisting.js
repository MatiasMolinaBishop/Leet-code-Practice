//What will be consoled log here?

//Question 1:
console.log(foo)
foo = 1

//error as foo is neve initialized as a variable
//Question 2:

console.log(foo)
var foo = 1

//You will get undefined as variables are hoisted to the top of code. In this case foo is declared so it goes to the top. However, it would be undefined
//As the value is given to it after we console log it

//Question 3
foo = 3
var foo
console.log(foo)

//This would log 3 as the var is hoisted to the top

function foo() {
    console.logO('functions always hoisted up dont matter where you write them')
}

//NOTE - const and let dont get hoisted