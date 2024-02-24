/*
concat() : add krna 2 or more array ko.
...spread : spread operator => kaach ka gillas lo or upper sy ger do. sb kuch bikr jaye ga isliye ab aap ka array spread ho gaya hai.. sare element alg alg ho gaye hai.
.of : return a new array of set a elements Array.of()
.from : create a new array string to array Array.from("hitesh") o/p- [h, i, t, e, s, h]
*/ 

const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

console.log(marvel_heros.concat(dc_heros));
// [ 'thor', 'ironman', 'sspiderman', 'superman', 'flash', 'batman' ]

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);
// [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]


console.log(Array.isArray("Hitesh"));
console.log(Array.from("hitesh"));

// false
// [ 'h', 'i', 't', 'e', 's', 'h' ]

console.log(Array.from({name: "hitesh"})); // intresting ye abhi empity [] array de ga kyu is ko nhi pata kya array banana hai keyValue ya value ko.


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3))
// [ 100, 200, 300 ]

