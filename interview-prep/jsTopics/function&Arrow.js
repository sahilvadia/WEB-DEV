// Normal Function
function normalFunction(){
    console.log("Normal Function Example");
}

// Arrow Function
const arrowFunction = () =>{
    console.log("Arrow Function Example");
    
}


// --------- object binding ---------------- 

// value of this depend on how function called.
// inside timeout not reference for the name.
const user ={
    name:"zoro",
    age:23,
    delayGreet : function(){
        setTimeout(function(){
              console.log(`hello ${this.name}`);
        }, 1000);
    },
    greet: function(){
        console.log(`hello ${this.name}`);
        console.log(this.name)
    }
}

user.delayGreet();
user.greet();

const users = {
    name : "zoro",
    age : 23,
    userGreet : function(){
        setTimeout(() => {
            console.log(`hello ${this.name}`);
        }, 1000);
    }
}

// users.userGreet();




// ------- argument object ----------

// normal function
function logArgument(){
    console.log(arguments);
}

// logArgument(1,2,3,4,5);

// arrow function (not work)
    // const funArgLog = () =>{
    //     console.log(arguments);
    // }
    // funArgLog(1,2,3,4,5);

// arrow function with args ~ you need to use ... for argument
const funArgLog = (...arguments) =>{
    console.log(arguments);
}
// funArgLog(1,2,3,4,5);


// not working with new keyword
function person(name){
    this.name = name;
}
// let zoro = new person("zoro");
// console.log(zoro);

// arrow function (not work)

let personA = (name) =>{
    this.name = name;
}

// let zoro = new personA("zoro");
// console.log(zoro);


//-------- prototype --------
function regular(){}
// console.log(regular.prototype);

// not supported
const arrow = () => {};
// console.log(arrow.prototype);



// | Feature           | Normal Function                                  | Arrow Function                                   |
// | :---------------- | :----------------------------------------------- | :----------------------------------------------- |
// | `this` binding    | Dynamic, depends on how the function is called.  | Lexical, inherits `this` from the parent scope.  |
// | `arguments` object | Has its own `arguments` object.                  | Does not have its own `arguments` object.        |
// | `new` keyword     | Can be used as a constructor with `new`.         | Cannot be used as a constructor with `new`.      |
// | `prototype` property | Has a `prototype` property.                      | Does not have a `prototype` property.            |
// | Syntax            | `function name(args) { ... }`                    | `(args) => { ... }` or `args => ...`             |
// | Return            | `return` keyword is explicit.                    | Implicit return for single-expression bodies.    |

// this argument new prototype




const arrowf = () =>{
    var a = 0 ;
    function inner(){
        a++;
        console.log(a);
    }
    return inner;
}

// let test = arrowf();
// test();
// test();
// test();


for (var i = 0; i < 10; i++){
    setTimeout(() => {
        console.log(i);
        
    }, 5000);
}