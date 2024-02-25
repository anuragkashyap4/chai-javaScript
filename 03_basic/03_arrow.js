// Arrow function = 2015 mai aaya hai.. or ES6 aaya tha.. isme this use nhi hota.
// this = current context ky baare mai btata hai.
// browser ky andr saare global object window hai..
// object mai this ka use kr skte hai.. function mai nhi kr skte. aagy hoga to dekh ly gy

const user = {
    userName : "hitesh",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.userName} welcome to website`);
    }
}

user.welcomeMessage()

// ARROW============================

const chai = () => {
    console.log("chal gaya mai.")
}

chai()

// implesited return========================
// {} ka use karo gy to return likhna hoga..
// () mai return nhi likhna hota..
// object ko hamesha ( ) mai ly ty hai..

const chai2 = () => ("chal gaya mai.")

console.log(chai2())

/*
const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
*/ 
