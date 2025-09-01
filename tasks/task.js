// Task 1:

// Write a function stringToNumber that takes a string input and tries to convert it to a number.
//  If the conversion fails, return "Not a number". 

function stringToNumber(input) {
    const number = Number(input);
    if (isNaN(number)) {
      return "Not a number";
    }
    return number;
  }


// Task 2:

// Write a function flipBoolean that takes any input and converts it to its boolean equivalent,
//  then flips it. For example, true becomes false, 0 becomes true, etc.

  function flipBoolean(params) {
    return !params
  }


// Task 3:

// Write a function whatAmI that takes an input and returns a string describing its type
//  after conversion. If it's a number, return "I'm a number!", if it's a string, return 
// "I'm a string!" 

  function whatAmI(params) {
    return "I'm a "+typeof params+"!";
  }

// Task 4
function isItTruthy(params) {
    if(params){
       return "It's truthy!";
  } else {
    return "It's falsey!";
  }
}


//   task 1
//   console.log(stringToNumber("123"));
//   console.log(stringToNumber("abc"));

// task2 
//   console.log(flipBoolean(true));
//   console.log(flipBoolean(false));
//   console.log(flipBoolean(0));
//   console.log(flipBoolean(1));

// task3
// console.log(whatAmI(2.0));
  

// console.log(isItTruthy(0));
// console.log(isItTruthy(1));
// console.log(isItTruthy("hello"));
// console.log(isItTruthy(""));




// Arrays and Method

// 1. Array filtering
let array = [1,7,4,6,3,8,2,5,9];

function sortArray(array) {
  return array.sort(); 
}

console.log(sortArray(array));
