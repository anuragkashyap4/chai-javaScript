// for in loop = ye object ko acces krta hai.. for of loop sy oject mai use nhi kr skte error aata hai..
// for in mai ye array mai work kr raha hai lakin jb aap (key) print krvate hai.. to index value aati hai.. 0,1,2, etc. lakin for of mai... sidha value dy ta tha.. jb key print hoti thi to..


// const myObject = {
//     js: 'javaScript',
//     cpp : 'c++',
//     rb : 'ruby',
//     swift : 'swift by apple'
// }

// for(const key in myObject){
//     console.log(key);
// } // is sare key value aa gyi hai..
/*
IN
USA
Fr
*/ 

// object nikalna ho to..
const myObject = {
    js: 'javaScript',
    cpp : 'c++',
    rb : 'ruby',
    swift : 'swift by apple'
}

for(const key in myObject){
    console.log(myObject[key]);
}
/*
javaScript
c++
ruby
swift by apple
*/ 

const programming = ['js', 'rb', 'py', 'java', 'cpp']
for(const key in programming){
    console.log(key);               // index value print
    console.log(programming[key]);  // value print
}

