// literals or singleton ki thara object bante hai..
// singleton = constructor ki thara bane ga to singleton khte hai..

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    "full Name": "anurag kashyap",
    [mySym]: "key12",
    age: 18,
    location: "jaipur",
    email: "hitesh@gmail.com",
    isLoggedIn: false,
    lastLogInDays: ["monday", "saturday"]
}

console.log(JsUser.name);
console.log(JsUser["full Name"]);
console.log(JsUser[mySym]);

JsUser.email = "anurgkshyp5656@gmail.com"
// ye value change krne ho to..

// Object.freeze(JsUser)   // mtlb ab ye freeze ho gaya hai.. ab kuch change nhi ho skta.
JsUser.email = "ramkahyso@gmail.com"

console.log(JsUser)

/*
{
  name: 'Hitesh',
  'full Name': 'anurag kashyap',
  age: 18,
  location: 'jaipur',
  email: 'anurgkshyp5656@gmail.com',
  isLoggedIn: false,
  lastLogInDays: [ 'monday', 'saturday' ],
  [Symbol(key1)]: 'key12'
}
*/

JsUser.greeting = function () {
    console.log("heeeloo")
}

JsUser.greetingTwo = function(){
    console.log(`my name is ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())


// in dono sy acess kr skte hai.. value ko.
// const mySym = Symbol("key1")
// [mySym] : "key12", => is ko asy he likhte hai.. pre define hai..



// singleton===============================================
// object.create