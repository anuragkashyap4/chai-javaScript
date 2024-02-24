const name = "Anurag";
const repoCount = 50
// console.log(name + " " + repoCount)

//=> String Concatenation in JavaScript with Template Literals

// console.log(`my name is ${name} and my repoCount ${repoCount}`);

const gameName = new String('Anurag')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length)
console.log(gameName.toUpperCase());

// => __proto__ : isme bhut saare function hoty hai or method hoty hai...

console.log(gameName.charAt(2));          // ye 2nd index ki value dy ga..
console.log(gameName.indexOf('u'));      // ye t kis index pr hai vo dy ga..

/*
u
2
*/ 

console.log(gameName.substring(0, 4));
console.log(gameName.slice(3, 6));

//=> (startIndex, lastIndex) ye method hai.. isme last value add nhi hoti..

/*
Anur
rag
*/ 

// trim() => ye starting sy or last sy space remove kr dy ta hai..

const url = "https://hitesh.com/hitesh%20choudary"

console.log(url.replace('%20', '-'))

// https://hitesh.com/hitesh-choudary

console.log(url.includes('hitesh'))
// isme hitesh hai isliye true aayega vrna false aage ga agr nhi milta to..

const splitValue = "anurag-kashyap-01"

console.log(splitValue.split('-'))

/*
[ 'anurag', 'kashyap', '01' ]

ye split method string ko arrya mai change kr dy ta hai...
*/ 