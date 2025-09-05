## Q6. What is the difference between function declaration and function expression?

### Function Declaration → Hoisted completely.
    ```
    sayHi(); // works
    function sayHi() { console.log("Hi"); }
    ```
    
### Function Expression → Hoisted only as variable (not initialized).
    ```
    sayHello(); // Error: sayHello is not a function
    var sayHello = function() { console.log("Hello"); };
    ```