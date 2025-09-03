// function createCourse(courseName){
//     console.log(`creating ${courseName}`);
// }

// function createCourseWithRating(courseName,rating){
//     console.log(`creating ${courseName} with our rating ${rating}`);
// }


// createCourse("HLD");
// createCourseWithRating("LLD",5);



// functions - first class citizens
// functions pass into functions
function Morning(String){
    return `Good Morning ${String}`;
    
}
const Night= function (params) {
    return `Good Night ${params}`;
}


function greet(callFun, param){
    return callFun(param);
}

// console.log(greet(Morning,"zoro"));

// arrow function

let fly = (name) =>{return `flying ${name}`}
// console.log(fly("zoro"));

// function assign to variable , passed as argument , function return form another function


// function + lexical scope = closure

let a = 100;

function Outer(){
    a = 10;
    function Inner(){
        console.log(a);
    }
    return Inner; // we are returning the function
}

let returndVar = Outer(); // store into variable
// returndVar has a refrence of a so it change
a= 200;
console.log(returndVar); // log the function not call
returndVar(); // call the function
