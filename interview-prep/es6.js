// mainly 15 things introduce in ES6

//------- 1. let and const ---------
let string = "this is string";
const number = 123;

// both are block scope not a function scope.
// no hoisting issue with var.

//-------- 2. Arrow function ---------
const add = (a, b) => a + b;

// short syntax and lexical scope.
// no this, argument and prototype for thier own .
// great for callbacks.

//--------- 3. template literals ---------
// use backticks (``) for multi string and interpolation.

// const name = "zoro";
// console.log(`hello ${name}`);

// --------- 4. destructuring assignment ---------
    // array destructuring 
    const[a,b] = [1,2];
    // console.log(a,b);

    // object destructuring
    const {name:userName,age} = {name:"zoro",age:23};
    // console.log(userName,age);

    //function destructuring
    function fdestructuring({name, age}){
        console.log(`${name} is ${age} years old`);
    }

    // fdestructuring({name:"zoro",age:23});


// 5. --------- defalut param ---------

let name = "sanji";
function defalutParam(name ="Guest"){
    console.log(`hello ${name}`);
}
// defalutParam(name);
// defalutParam();


// --------- 6. rest param ---------

function restPramaSum(...args){
    return args.reduce((a,b)=> a+b,0);
}

// console.log(restPramaSum(1,2,3));


// --------- 7. Spread Operator ---------

// extends arrays and object into individual elements.
const arr = [1,2,3];    // array
const copy = [...arr];  // copy array
const combined = [...copy,4,5,6]; //merged array

// console.log(combined);


// --------- 8. enhanced object literals ---------
const name1="alice";
const dynamicKey = "status";
const obj = {
    name:"zoro",
    greet:function(){
        console.log(`hello ${this.name}`);
    },
    [dynamicKey]:"active"
}

// console.log(obj);



// ------ 9. class, constructor, extends, super ------
class Person{
    constructor(name){
        this.name = name;
    }
    greet(){
        console.log(`hello ${this.name}`);
    }
}

class Student extends Person{
    constructor(name, studentId){
        super(name);
        this.studentId = studentId;
    }
    study(){
        console.log(`${this.name} with ID ${this.studentId} is studying`);
    }
}

let zoro = new Student("zoro",123);
zoro.greet();
zoro.study();



// 1. let const - block scope - no hoisting issue with Var
// 2. arrow function
// 9. classes, constructor, extends, super
// 11. promises - better way to handle async operation.
// 5. default param 
// 12. for of loop - iterator over iteration
// 6. rest param ...args in functions
// 13. map and set
// 8. inhance object literals - variable , function, compute shorthand property
// 10. modules - import export
// 3. tempelate structure (`${}`)
// 7. spread param extends array and object element as individual element
// 4. destructuring assignment - array, object, function 
// 14. symbols