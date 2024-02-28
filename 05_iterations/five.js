// forEach = ye bhi array ko loop krne ka tarika hota hai.. console mai ja kr prototype dekh lo pata chl jaye ga us mai bhut prototype hai jin sy array ko loop kr skte hai.. for each, map, etc.
// forEach = high order function hai ye.. call back ky andr aap ko value mile ge ab us ko value bolo ya item.
/*
.forEach( (item, index, arr)=> {
    console.log(item)
} )
*/ 

const coding = ['js', 'ruby', 'java', 'python', 'cpp']
coding.forEach( (item)=> {
    console.log(item);
} )

/*
js
ruby
java
python
cpp
*/ 


function printMe(item){
    console.log(item);
}
coding.forEach(printMe)         // bs function ka refrence dy na hai.. execute nhi krna hai..

/*
js
ruby
java
python
cpp
*/ 

coding.forEach((item, index, arr)=>{    
    console.log(item, index, arr);
    
})
/*
js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
*/ 

const myCoding = [
    {
        languageName : 'javascript',
        langugeFile : 'js'
    },
    {
        languageName : 'java',
        langugeFile : 'java'
    },
    {
        languageName : 'phyton',
        langugeFile : 'py'
    }
]

myCoding.forEach( (item)=> {
    console.log(item.languageName);
})

/*
javascript
java
phyton
*/ 