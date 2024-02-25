// var c = 30;     // global Scop
// let a = 10;     // block SCop
// const b = 20;

// {} // scope

// console.log(a);
// console.log(b);
// console.log(c);

//==========================================

function one () {
    const userName = "anurag"

        function two() {
            const website = "youtube"
            console.log(userName)
        }
        // console.log(website)
        two()
}

one()

// intresting =============================

function addone(num){
    return num 
}
addone(5)

// upper or nichy dono define shi hai.. pr niche vala( function expresion ) jada strong hai ye ksi bhi value ly ly ta hai.. example. JSON, API etc

const addTwo = function(num){
    return num
}
addTwo(5)

// HOSTING = execution contecst bnta hai. mtlb kha declair kara hai kha nhi kbhi baar function ko call upper kr dy ty hai chl jata hai.
