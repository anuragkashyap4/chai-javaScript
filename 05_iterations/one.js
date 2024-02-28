// for

/*

for(initail, condition, incre/decre-ment){
    // code
}
*/

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// for (let i =0; i <=10; i++){
//     console.log(`outer loop ${i}`);

//     for (let j = 0; j <= 10; j++){
//         console.log(`inner loop value ${j} and inner loop ${i}`);
//     }
// }

// table print 

// for (let i =1; i <=10; i++){
//     console.log(`outer loop ${i}`);

//     for (let j = 1; j <= 10; j++){
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
// }


// array ky upper kaam

// let myArray = ['flash', 'batman', 'superman']

// for(let i = 0; i < myArray.length; i++){
//      let c = myArray[i]
//     console.log(c);
// }

/*
flash
batman
superman
*/ 

// break and continue two keybords hoty hai jo jin ka use hota hai. ki hmko apne condition kb start krne hai or kb stop.

// break : jaise detect ho jaye to exit ho jao...

// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log('ditect is 5');
//         break;
//     }
//     console.log(index);
    
// }

/*
1
2
3
4
ditect is 5
*/ 

// continue : ek baar maaf kr do us ko egnore kr do..

for (let index = 1; index <= 8; index++) {
    if (index == 5) {
        console.log('5 is detect');
        continue;
    }
    console.log(index);
    
}

/*
1
2
3
4
5 is detect
6
7
8
*/ 


/* 15 Number line ka code ka answer.....

outer loop 0
inner loop value 0 and inner loop 0
inner loop value 1 and inner loop 0
inner loop value 2 and inner loop 0
inner loop value 3 and inner loop 0
inner loop value 4 and inner loop 0
inner loop value 5 and inner loop 0
inner loop value 6 and inner loop 0
inner loop value 7 and inner loop 0
inner loop value 8 and inner loop 0
inner loop value 9 and inner loop 0
inner loop value 10 and inner loop 0
outer loop 1
inner loop value 0 and inner loop 1
inner loop value 1 and inner loop 1
inner loop value 2 and inner loop 1
inner loop value 3 and inner loop 1
inner loop value 4 and inner loop 1
inner loop value 5 and inner loop 1
inner loop value 6 and inner loop 1
inner loop value 7 and inner loop 1
inner loop value 8 and inner loop 1
inner loop value 9 and inner loop 1
inner loop value 10 and inner loop 1
outer loop 2
inner loop value 0 and inner loop 2
inner loop value 1 and inner loop 2
inner loop value 2 and inner loop 2
inner loop value 3 and inner loop 2
inner loop value 4 and inner loop 2
inner loop value 5 and inner loop 2
inner loop value 6 and inner loop 2
inner loop value 7 and inner loop 2
inner loop value 8 and inner loop 2
inner loop value 9 and inner loop 2
inner loop value 10 and inner loop 2
outer loop 3
inner loop value 0 and inner loop 3
inner loop value 1 and inner loop 3
inner loop value 2 and inner loop 3
inner loop value 3 and inner loop 3
inner loop value 4 and inner loop 3
inner loop value 5 and inner loop 3
inner loop value 6 and inner loop 3
inner loop value 7 and inner loop 3
inner loop value 8 and inner loop 3
inner loop value 9 and inner loop 3
inner loop value 10 and inner loop 3
outer loop 4
inner loop value 0 and inner loop 4
inner loop value 1 and inner loop 4
inner loop value 2 and inner loop 4
inner loop value 3 and inner loop 4
inner loop value 4 and inner loop 4
inner loop value 5 and inner loop 4
inner loop value 6 and inner loop 4
inner loop value 7 and inner loop 4
inner loop value 8 and inner loop 4
inner loop value 9 and inner loop 4
inner loop value 10 and inner loop 4
outer loop 5
inner loop value 0 and inner loop 5
inner loop value 1 and inner loop 5
inner loop value 2 and inner loop 5
inner loop value 3 and inner loop 5
inner loop value 4 and inner loop 5
inner loop value 5 and inner loop 5
inner loop value 6 and inner loop 5
inner loop value 7 and inner loop 5
inner loop value 8 and inner loop 5
inner loop value 9 and inner loop 5
inner loop value 10 and inner loop 5
outer loop 6
inner loop value 0 and inner loop 6
inner loop value 1 and inner loop 6
inner loop value 2 and inner loop 6
inner loop value 3 and inner loop 6
inner loop value 4 and inner loop 6
inner loop value 5 and inner loop 6
inner loop value 6 and inner loop 6
inner loop value 7 and inner loop 6
inner loop value 8 and inner loop 6
inner loop value 9 and inner loop 6
inner loop value 10 and inner loop 6
outer loop 7
inner loop value 0 and inner loop 7
inner loop value 1 and inner loop 7
inner loop value 2 and inner loop 7
inner loop value 3 and inner loop 7
inner loop value 4 and inner loop 7
inner loop value 5 and inner loop 7
inner loop value 6 and inner loop 7
inner loop value 7 and inner loop 7
inner loop value 8 and inner loop 7
inner loop value 9 and inner loop 7
inner loop value 10 and inner loop 7
outer loop 8
inner loop value 0 and inner loop 8
inner loop value 1 and inner loop 8
inner loop value 2 and inner loop 8
inner loop value 3 and inner loop 8
inner loop value 4 and inner loop 8
inner loop value 5 and inner loop 8
inner loop value 6 and inner loop 8
inner loop value 7 and inner loop 8
inner loop value 8 and inner loop 8
inner loop value 9 and inner loop 8
inner loop value 10 and inner loop 8
outer loop 9
inner loop value 0 and inner loop 9
inner loop value 1 and inner loop 9
inner loop value 2 and inner loop 9
inner loop value 3 and inner loop 9
inner loop value 4 and inner loop 9
inner loop value 5 and inner loop 9
inner loop value 6 and inner loop 9
inner loop value 7 and inner loop 9
inner loop value 8 and inner loop 9
inner loop value 9 and inner loop 9
inner loop value 10 and inner loop 9
outer loop 10
inner loop value 0 and inner loop 10
inner loop value 1 and inner loop 10
inner loop value 2 and inner loop 10
inner loop value 3 and inner loop 10
inner loop value 4 and inner loop 10
inner loop value 5 and inner loop 10
inner loop value 6 and inner loop 10
inner loop value 7 and inner loop 10
inner loop value 8 and inner loop 10
inner loop value 9 and inner loop 10
inner loop value 10 and inner loop 10

*/ 