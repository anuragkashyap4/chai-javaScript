// mai chata hu ki sb mai 10 add ho jaye..
// map() = ye bhi call back function hai. or value bhi return krta h...
// filter() mai true false ka kaam hai.. pr map() mai sb return hoga fhir condition lagao ki kya return krna hai kya nhi..

const myNumber = [1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10]
const newNum = myNumber.map((num) => num + 10)
console.log(newNum);
/*
[
  11, 12, 13, 14, 15,
  16, 17, 17, 18, 19,
  20
]
*/

// chaining ek ky baad ek method use krna.. hota h...
const myNumber2 = [1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10]
const newNum2 = myNumber2.map((num) => num * 10).map((num) => num + 10).filter((num) => num > 40)
console.log(newNum2);
/*
[
  50, 60,  70,  80,
  80, 90, 100, 110
]
*/



