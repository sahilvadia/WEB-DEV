// console.log(a)
var a= 10;
// console.log(a.__proto__)
// console.log(window.a)
// console.log(this.a)
// console.log(window == this)



// var let const
// var
var a = 10;
// console.log(a);
var a = 20;
// console.log(a);

// let
let b = 10;
// console.log(b);
// let b = 20; // redeclaration not allowed
b = 20;
// console.log(b);

// const
const c = 10;
// console.log(c);
// const c = 20; // redeclaration not allowed
// c = 20; // reassignment not allowed
// console.log(c);


// block scope and temporal dead zone
{
    let x = 10;
    // console.log(x);
}
// console.log(x); // ReferenceError: x is not defined

{
    const y = 20;
    // console.log(y);
}
// console.log(y); // ReferenceError: y is not defined

// console.log(z); // ReferenceError: Cannot access 'z' before initialization
let z = 30;
// console.log(z);


// temporal dead zone
{
    // console.log(tdzVar); // ReferenceError: Cannot access 'tdzVar' before initialization
    let tdzVar = "I am in TDZ";
    // console.log(tdzVar);
}


// lexical scope
function hello(){
    // let x = 10;
    console.log(x);
}
hello();

var x = 100;
console.log(x);


