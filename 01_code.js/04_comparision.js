// console.log( 2 > 1);
// console.log( 2 >= 1);
// console.log( 2 < 1);
// console.log( 2 != 1);

// console.log("2" > 1);
// console.log("02" > 1)

/*
true
true
*/

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

/*
false
false
true

=> The reason is that an equality check == and comparisons > < >= <= work differently.
Comparisons convert null to a number, treadting it as 0.
That's why (3) null >=0 is true and (1) null > 0 is false. 

*/

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

/*
false
false
false
*/  

// === Strick check mtlb ye value bhi check krta hai or data type bhi
