// => important formula : 67line

const score = 400;

console.log(score)

const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length)

/*
400
[Number: 100]
3
*/

const price = 355

console.log(price.toFixed(2))

// 355.00 is ky last mai 00 aa jate hai kyu ki toFixed(2) likha hai agr 1 likh thy to 355.0 aata. or ye E-commerse mai jada use hota hai..

const outherNumber = 123.9876

console.log(outherNumber.toPrecision(3))

// 124

const hundreds = 1000000
// console.log(hundreds.toLocaleString())  //=> 1,000,000 ye USA mai convert krte hai value ko.

console.log(hundreds.toLocaleString('en-IN'))

// 10,00,000

// ==========Maths=================

console.log(Math)

// Object [Math] {} => ye object hai..

console.log(Math.abs(-4));
// 4 => ye nagative value ko positive krta hai or positive value ko positive he krta haii..

console.log(Math.round(4.6));
// 5 => ye round of kr dy te hai value ko.. agr hmm chate hai ki hm apne marji sy value increse kry ya decrise.. to ceil or floor do method hoty hai..

console.log(Math.ceil(4.2));
// 5 aa gaya value increse kr de..

console.log(Math.floor(4.9))
// 4 ab 4 he lega kyu ki floor use kara hai mtlb choti value...

// => Math method ka use kha kare gy? iska use kare gy Math.random() mai is ki value 0-1 ky bich mai aaye ge..

// console.log(Math.random())  => 0.3403237735299145
// or agr hm cahte hai ki value 0-10 ky bich mai ho to multiply kr do jitne value chaiye....
// console.log((Math.random()*10) +1);

// agr hm chate hai ki value 10 - 20 ky bich ami aaye to..

// Most important=========================================================================================
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) +min)
// ab value aaye gy 16 20 15 etc.

