// Immediately Invoked Function Expressions (IIFE) = mtlb hamne koi function likh or vo vsy he execute ho jaye..
/*
    IIFE DEFINATION =
    jo function Immediately execute ho jaye.. , global scop ky polution sy problem hoti hai kai baar global scop ky jo bhi variable hai us ky jo bhi declaration hai.. us polution ko hatane ky liye IIFE ka use kara hai..
    ()(); last mai (semicolon); lagana pdta hai ki is ko nhi pata kha stop krna hai..
*/ 

// (function defination)(function call);

(function chai(){                   // named IIFE
    console.log(`DB coonected`);
})();

// DB coonected

( (name)=> {                        // Simple IIFE or arrow IIFE or UnNamed IIFE
    console.log(`DB connect ${name}`);
} )("annu");

// DB connect annu
    


