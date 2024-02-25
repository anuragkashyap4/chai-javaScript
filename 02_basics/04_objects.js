// singleton

// const tinderUser = new Object() // o/p=> {} khali object. ye singleton object hai...

// const tinderUser = {} // o/p=> {} ye bhi khali object hai lakin ye singleton object nhi hai.

const regularUser = {
    email: "namaks@gmail.com",
    fullname: {
        userfullname: {
            firstName: "anurag",
            lastName: "kashyap"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstName)

// anurag

// ===object ko add krna ho to Object.assign({}, obj1, obj2) ka use karo. he Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

const obj1 = { 1: 'a', 2: 'b' }
const obj2 = { 3: 'a', 4: 'b' }
const obj4 = { 5: 'a', 5: 'c' }

// const obj3 = Object.assign(obj1, obj2) // is ko asy likho ya Object.assign({} , obj1, obj2) dono shi hai pr hmm asy likhte hai.. ans mai koi dikkat ne hogi..
//Object.assign({}, ()) phala parameter target, or baki ky saare act kare gy Source. new object return.


// const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3)
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'c' }

// console.log({...obj1, ...obj2, ...obj4})
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'c' }

// Object.keys() sy find kr skte hai keys value 
// Object.values() sy find kr skte hai value 
// regularUser.hasOwnProperty('isLogin') ye bataye ga ki isLogin hai ya nhi true , false dy ga.

// Distructaring========================================================================

const course ={
    courseName : 'js in hindi',
    price : '999',
    courseInstructor: 'hitesh'
}

// const {courseInstructor} = course
// console.log(courseInstructor);

// hitesh

// agr aap ko lage ki bada naam hai..

const {courseInstructor : instructor} = course
console.log(instructor);

// API sy value aati JSON mai phale aati thi XML format mai. ===========
// JSON = mai key or value String("") hoti hai..
/*
    {
        "name": "anurga",
        "course": "js in hindi",
        "price": "free"
    }
*/ 
// ya API asy mile ge ya asy
/*
    [
        {},
        {},
        {}
    ]
*/ 




