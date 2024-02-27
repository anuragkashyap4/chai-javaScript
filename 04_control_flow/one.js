// if

// if (coundition) {
//     // code
// }

// < , >, <=, >=, != (not equal),
//  == (Double equal mtlb equal hai ya nhi value..)
// === (dataType type bhi check hota h..)
// !== (dataType same nhi hai.. true aaye ga)
// && : dono condition true honi chaiye
// || ; ek bhi condition true hogi to execute ho jaye ga code..


/*

if (2 !== "2"){
    console.log("hlp")
}

// hlp
*/ 


if(condition){
    // code
}

else{
    // code
}
// ============================
// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
} 

