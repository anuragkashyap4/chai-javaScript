// // forEach koi bhi value return nhi krta.. 
// filter() : ye bhi call back ly ta hai.. hrr value ko each acess kara jaye fhir check hogi condition jo condition satisfaye hogi vo print hogi ..


/*
const coding = ['js', 'ruby', 'java', 'python', 'cpp']
 const values = coding.forEach( (item) => {
    //console.log(item);
     return item
 } )
 console.log(values); ans kuch bhi nhi aaye ga..
*/


// const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNum = myNumber.filter( (num)=> num>4)
// console.log(newNum);
// o/p =[ 5, 6, 7, 8, 9, 10 ]

// arrow function

const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNum = myNumber.filter( (num)=> {
    return num>4
})
console.log(newNum);
//o/p = [ 5, 6, 7, 8, 9, 10 ]


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const userBooks = books.filter( (bk)=> bk.genre === 'History' && bk.title ==='Book Three' )
  console.log(userBooks);