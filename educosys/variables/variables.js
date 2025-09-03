// primitive type

// String
let String = "this is String";
// console.log(typeof String);
// console.log(String);

// Number
let int = 10;
// console.log(typeof int);
// console.log(int);

// Boolean
let bool = true;
// console.log(typeof bool);
// console.log(bool);

// Null
let Null = null;
// console.log(typeof Null);
// console.log(Null);

// Undefined
let Undefined;
// console.log(typeof Undefined);
// console.log(Undefined);

// refrence type

let course ={
    title :"HLD",
    duration :"3 Month",
    rating : 5
}

// console.log(typeof course);
// console.log(course);
// console.log(`Title : ${course.title}`);
// console.log(`Duration : ${course.duration}`);
// console.log(`Rating : ${course.rating}`);



// copy by value
let a = "apple";
let b = a;

a = "banana";

// console.log(a);
// console.log(b);


// copy by object
let mangoObj = {
    name : "mango"
}

let bananaObj = mangoObj;

mangoObj.name = "banana";

// console.log(mangoObj);
// console.log(bananaObj);


// Arrays

let fruite = ["apple", "banana", "orange", "graps", "pineapple"];

// console.log(fruite[0]);
// console.log(fruite[1]);
// console.log(fruite[2]);
// console.log(fruite[3]);
// console.log(fruite[4]);
console.log(fruite.length);
console.log(fruite);
console.log(typeof fruite);

