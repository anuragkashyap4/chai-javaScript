// array
// - array shallow copy or deep copy dy ta hai. MDN ki documentaion mai phdd lo WHat is array us mai mil jaye ga.. 

const myArray = [0, 1, 2, 3, 4, 5]
const heros = ["annu", "ankur", "jony"]

const myArray2 = new Array(1, 2, 3, 4, 5)
// console.log(myArray2[1]) => 2

// Array methods

/*
push() : last mai add hota hai..
pop() : last mai delet hota hai..
unshift() : starting mai add hota hai..
shift() : starting mai sy delet hota hai..
slice() : return krta hai ek section of Array. slice(1, 3) ye index 1 sy start hoga or 2 index tk jaye ga 3re index nhi ly ga..
splice() : splice(1, 3) ye 1st index sy start hoga or vha sy 0 sy start ho kr 3tk count kare g a or vo print kare ga.. ye Anurag ki tehory hai..
join() : hamre array ko baind krta hai.. mtlb string mai convert krta hai..
indexOf() : sy index ki value pata chalte hai. indexOf(3)
*/ 

// myArray.push(6)
// myArray.pop()
// myArray.unshift(9)
// myArray.shift()
console.log(myArray);

const newArray = myArray.join()
console.log(newArray)

/*
[ 0, 1, 2, 3, 4, 5 ]
0,1,2,3,4,5
*/ 

// Splice, slice========================

console.log("A " , myArray)

const myn1 = myArray.slice(1,3)
console.log(myn1);

console.log("B " , myArray)

const myn2 = myArray.splice(1,3)
console.log("C " , myArray)
console.log(myn2)

/*
A  [ 0, 1, 2, 3, 4, 5 ]
[ 1, 2 ]
B  [ 0, 1, 2, 3, 4, 5 ]
C  [ 0, 4, 5 ]
[ 1, 2, 3 ]
*/ 