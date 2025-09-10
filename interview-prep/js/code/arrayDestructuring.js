let fruite = ["apple", "banana", "orange",["greenapple","kiwi","mango"]];

// const [a, b, c, [d, e, f]] = fruite;

// console.log(a, b, c, d, e, f);


const obj = {
    name: "Zoro",
     age: 23,
     greet : function(){
        console.log(`hello `,this);

        let age = ()=>{
            console.log(`your age is`,this);
        }
        age();
     }
}

// obj.greet();

function mainOuter(){
    // let z = 10;


function outer(b){
    function inner(){
        console.log(a,b,z);  
    }
    
    var a = 5;

    return inner;


}

return outer;
}
let z = 100;

// mainOuter()("hello world")();
// outer("hello world")();



function CounterFun(){
    let cont = 0;
    this.incrementCounter = function(){
        cont++;
        console.log(cont);
    }

    this.decrementCounter = function(){
        cont--;
        console.log(cont);
    }
}

const increment = new CounterFun();
const decrement = new CounterFun();

increment.incrementCounter();
increment.incrementCounter();
increment.incrementCounter();
decrement.decrementCounter();
decrement.decrementCounter();
