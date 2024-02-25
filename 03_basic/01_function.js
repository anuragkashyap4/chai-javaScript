function sayMyName() {
    console.log('h');
    console.log('i');
    console.log('t');
}

//sayMyName // ye ho gaya function ka refrence
// sayMyName() // ye ho gaya function call

function addTwoNumber(a, b){
    console.log(a+b)
}
addTwoNumber(2, 3)

// return ky baad kuch bhi print nhi hota hai..

function addTwoNumber2(a, b){

    // let result = a + b;
    // return result;

    return a +b
}
const shuu = addTwoNumber2(2, 7)
console.log(shuu)

function logInUserMessage(name){
    return(`${name} just log in`)
}

console.log(logInUserMessage("anurag"))
// anurag just log in
// logInUserMessage() // agr kuch bhi pass na kare to UNDEFINE aaata hai.

// Soping Cart ======================================
// ...restOperator : ye multiple arrgument ly ta hai...

function calculateCartPrice(...num1) {
    return num1
}
console.log(calculateCartPrice(12, 35, 70, 40, 60))

// [ 12, 35, 70, 40, 60 ]


function calculateCartPrice2(val1, val2, ...num1) {
    return num1
}
console.log(calculateCartPrice2(12, 35, 70, 40, 60))

// [ 70, 40, 60 ]

const user = {
    userName : "annuraggg",
    price : 999
}

function handelObject(anyObject) {
    console.log(`username is ${anyObject.userName} and price ${anyObject.price}`)
}
handelObject(user)

// username is annuraggg and price 999

