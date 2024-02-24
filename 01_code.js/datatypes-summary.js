// Primitive

// 7 tyoes : String, Number, Boolean, null, undefine, Symbol, BigInt

const score = 100;
const scoreValue = 100.3
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);
/*
false
=> isme value same hai lakin jo value return kare hai vo same nhi hai.. isliye uniqe value ky liye Symbol ka use krte hai..

*/ 

const bigNumber = 34567890123455n;


// Reference (Non Primitive)

// Array, Object, Functions

const heros = ["shaktiman", "naagraj", "doga"]

let myObje = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("heello world");
}



// Js Dynamic ya Static language hai..?

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/ 

// ==============================================

// Stack (Primitive), Heap (Non-Primitive) memory




// Primitive = copy value mai change hota hai..
// Non-Primitive = real value mai change hota hai..