# Execution Context
- entire env all the thing evaluate 
- every time you run code it created 

- GEC global execution context 

- Hoisting: Before the execution of code, variables and functions are extracted for memory allocation. This process is called Hoisting.


- init global execution context is created.
- when ever you create new function or called it store into call stack and it create new execution context.

- in the execution context has 2 phase 

- first phase is before runnig the code (Memory Phase)
    - memory is allocated to the variable and function

- second phase (Code Phase)
    - code is executed line by line.
    - javascript is a synchronize single thread language.

// Example of Global Execution Context (GEC)
console.log(a); // Output: undefined (due to hoisting)
var a = 10;
console.log(a); // Output: 10

function greet() {
    console.log("Hello from greet function!");
}

greet(); // Function call creates a new Function Execution Context (FEC)

// Example of Function Execution Context (FEC)
function outer() {
    var x = 20;
    function inner() {
        var y = 30;
        console.log(x + y); // inner FEC can access x from outer FEC (closure)
    }
    inner();
}

outer(); // Calling outer creates its own FEC, which then calls inner, creating another FEC.

// Call Stack example
function first() {
    console.log("Inside first");
    second();
    console.log("Back in first");
}

function second() {
    console.log("Inside second");
    third();
    console.log("Back in second");
}

function third() {
    console.log("Inside third");
}

first();

/*
Call Stack Order:
1. GEC (global)
2. first()
3. second()
4. third()
(third() finishes and pops off)
5. second() (continues)
(second() finishes and pops off)
6. first() (continues)
(first() finishes and pops off)
7. GEC (global) (finishes)
*/
