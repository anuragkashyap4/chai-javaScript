// Date => object hai.

let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());

// 0 sy start hoty hai months 0 = jan, 1 = feb, etc.

// let myCreateDate = new Date(2023, 0, 23)
// console.log(myCreateDate.toLocaleDateString()) => 1/23/2023

// let myCreateDate = new Date(2023, 0, 23, 5 , 3)
// console.log(myCreateDate.toLocaleString())  => 1/23/2023, 5:03:00 AM

// let myCreateDate = new Date('01-14-2023')
// console.log(myCreateDate.toLocaleString())  // MM-DD-Year => 1/14/2023


// ye miliSecond mai time dy ta hai.. for example: 1708764970072

let timeStamps = Date.now()
console.log(timeStamps)

// agr Seconds mai convert krna ho to..
console.log(Math.floor(timeStamps/1000))

let newDate = new Date()
console.log(newDate.getMonth() + 1)

// kyu ki ye 0 sy start hui hai.. isliye 1 add kr do..


