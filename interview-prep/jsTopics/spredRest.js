// function sum(...args){
//     return args.reduce((a,b)=> a+b);
// }

// console.log(sum(1, 2, 3, 4));
// const [first,...rest] = [10,20,30];
// console.log(first);
// console.log(rest);

// Spread = Scatter → expands array/object into elements.
// const first = [1,2,3,4,]
// const spredOpt =  [...first,5,6]
// console.log(spredOpt);


// rest
function sum (a,b,...args){
    return a+b+args.reduce((a,b)=>a+b,0);
}

console.log(sum(1,2,3,4,5));

