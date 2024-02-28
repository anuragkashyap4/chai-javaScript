// for of = ye array specif rule hai....
// ["", "", ""]
// [{}, {}, {}]
/*
for (const iterator of object) {
    // code
}
*/ 


const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

const greating = 'Hello world'
for(const great of greating){
    console.log(great);
}

// MAP = isme saare duplicat value hoti hai.. or refrence ( mtlb unique key pars hoti hai..)

// const map = new Map()
// map.set('IN', 'india')
// map.set('USA', 'united states of america')
// map.set('Fr' , 'France')
// console.log(map);

/*
Map(3) {
  'IN' => 'india',
  'USA' => 'united states of america',
  'Fr' => 'France'
}
*/ 

// const map = new Map()
// map.set('IN', 'india')
// map.set('USA', 'united states of america')
// map.set('Fr' , 'France')
// map.set('IN', 'india')
// console.log(map);
/*
same 2 same o/p = ye data same hoga to to data ek baar he print hoga...
Map(3) {
  'IN' => 'india',
  'USA' => 'united states of america',
  'Fr' => 'France'
}
*/ 


// const map = new Map()
// map.set('IN', 'india')
// map.set('USA', 'united states of america')
// map.set('Fr' , 'France')
// map.set('IN', 'india')
// console.log(map);

// for(const key of map){
//     console.log(key);
// }

/* pr mujhe asa data nhi chaya tha...
[ 'IN', 'india' ]
[ 'USA', 'united states of america' ]
[ 'Fr', 'France' ]
*/ 

const map = new Map()
map.set('IN', 'india')
map.set('USA', 'united states of america')
map.set('Fr' , 'France')
map.set('IN', 'india')
console.log(map);

for(const [key, value] of map){
    console.log(key);
}

/* is ko bolte hai array ka destractring [key, value] key sy key acess kr lo value sy value...
IN
USA
Fr
*/ 



// const myObject = {
//     'game1' : 'NFS',
//     'game2' : 'spiderman'
// }
// // ye asy work nhi kare ga object ky liye dusra tarika hai..
// for(const [key, value] of myObject){
//     console.log(key);
// } =======================================NO ans==============