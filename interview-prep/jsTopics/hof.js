// high order functions

let array = [1,4,2,5,6,3,8,9,7];
// foreach : iterable over array element
// array.forEach((element)=> console.log(element)) 

// map : transform each element return a new array
const double  =  array.map((x)=> x * 2);
// console.log(double);

// filter : keep element that pass condition
const even = array.filter((n) => n%2==0);
// console.log(even);

// reduce : Accumulates values into a single result
const sum = array.reduce((a,b)=> a+b,0);
// console.log(sum);

// some : return true if any element match the conditaion
const isEven = array.some((a)=>a%2==0);
// console.log(isEven);

// every : return true if every element fullfill the conditaion
const allEven = array.every((e)=> e%2==0);
// console.log(allEven);

// find : return first matching element
const findFirst = array.find((a) => a==1 );
// console.log(findFirst);

// findIndex : return index of first match

//>>>>>>>>>>>>>>> currying <<<<<<<<<<<<<<
// high order function and functional programming 
// function student(name){
//     return function academic(acainfo){
//          return function result(marks){
//             console.log(`Student Name : ${name}, Academic : ${acainfo}, Result : ${marks}`);
//         }
//     }
// }

// const step1 = student("penil")
// const step2 = step1("Orange A")
// step2(100);


// using ES6

const email = (to) => (subject) => (body) => `Sending Email to : ${to}, Subject : ${subject}, Body: ${body}`;

// const step1 = email("penil@gmail.com")
// const step2 = step1("Java Interview Question")
// console.log(step2("java inter view question 1,2,3,4,4,5,5,6,6,7"));


function add(a,b,c){
    return a+b+c;
}

add(1,2,3); /*?*/


function partial(fn,...args){
    return function fn(...moreArgs){
        return fn(...args,...moreArgs);
    };
}

const plus = partial(add,1,2);
plus(3);