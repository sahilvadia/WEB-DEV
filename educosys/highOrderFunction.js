let arr= [1,2,3,4,5];

// map
// it is use to transform the array
// it return new array

let transformDouble = arr.map((val)=> {
    return val * 2 + 1; 
});

console.log(transformDouble);


// filter
// it is use to filter the array based on condition
// it return new array

let filterArr = arr.filter((val) => {
    return val % 2 == 0;
})

console.log(filterArr);


// reduce
// it is use to reduce the array to single value
// it return single value

let sum = arr.reduce((acc,val) => {
    return acc + val;
},0)

console.log(sum);


// forEach
// it is use to iterate over the array
// it does not return anything

arr.forEach((val) => {
    // console.log(val);
})


// sort
// it is use to sort the array
// it modify the original array

let sortArr = [5,2,8,1,9];
sortArr.sort((a,b) => {
    return a - b; // ascending order
    // return b - a; // descending order
})

// console.log(sortArr);


// find
// it is use to find the first element that satisfy the condition
// it return the element

let findArr = [1,2,3,4,5];
let findVal = findArr.find((val) => {
    return val > 2;
})

// console.log(findVal);


// some
// it is use to check if some element satisfy the condition
// it return boolean

let someArr = [1,2,3,4,5];
let someVal = someArr.some((val) => {
    return val > 6;
})

console.log(someVal);


// every
// it is use to check if every element satisfy the condition
// it return boolean

let everyArr = [1,2,3,4,5];
let everyVal = everyArr.every((val) => {
    return val > 0;
})

// console.log(everyVal);