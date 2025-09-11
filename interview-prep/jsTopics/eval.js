function outer(){

    let secret = "hidden";

    function inner(){
        eval("console.log(`this is ${secret}`)")
    }

    inner();
}

// outer();

// same thing we do in closuere right??
function outerWithClosure() {
    let secret = "hidden with closure";

    function innerClosure() {
        console.log(`this is ${secret}`);
    }

    innerClosure();
}

// outerWithClosure();

// The main difference lies in how they access the `secret` variable and their implications for security and performance.

// `eval()`:
// - `eval()` executes a string as JavaScript code.
// - In the `outer` function, `eval("console.log(`this is ${secret}`)")` directly executes the string.
// - When `eval` is called, it looks for variables in its current scope (which is `inner`'s scope) and then in the outer scopes (like `outer`'s scope).
// - This allows `eval` to access `secret`.
// - **Security Risk:** `eval()` is generally discouraged because it can execute arbitrary code. If the string passed to `eval` comes from untrusted user input, it can lead to cross-site scripting (XSS) vulnerabilities.
// - **Performance:** `eval()` can be slower because the JavaScript engine cannot optimize the code as effectively since it doesn't know what code will be executed until runtime.
// - **Scope:** `eval` can introduce new variables into the current scope if not used carefully (though in this specific case, it's just logging).

// Closures:
// - A closure is a function bundled together with its lexical environment (the scope in which it was declared).
// - In `outerWithClosure`, `innerClosure` "remembers" the `secret` variable from its parent scope (`outerWithClosure`) even after `outerWithClosure` has finished executing.
// - This is a fundamental and safe feature of JavaScript for managing private variables and state.
// - **Security:** Closures are inherently secure because they don't involve executing arbitrary strings. The code is defined at development time.
// - **Performance:** Closures are optimized by the JavaScript engine and generally perform well.
// - **Encapsulation:** Closures are a powerful mechanism for data encapsulation, allowing you to create private variables that can only be accessed or modified by specific functions.

// In summary:
// - Both achieve access to an outer scope variable.
// - `eval()` does it by executing a string, which is flexible but risky and less performant.
// - Closures do it through JavaScript's lexical scoping rules, which is secure, performant, and a standard pattern for managing scope and private data.

// You should almost always prefer closures over `eval()` for accessing variables from an outer scope





// {

// let a = 10;
// var b = 2;
    
// }
    // console.log(a);
    // console.log(b);



const a = { msg: "Hello" };
const b = { msg: "Hi" };

// greet.call(a);

// const bound = greet.bind(b);
// bound();


// var c = 10;
// var c = 11;
// c=12;

// let v = 10;
// v = 11;
// let v = 11; not allowed

const obj ={
    name : "zoro",
    normal: function(){
        console.log(this.name);
    },
    arrow: ()=>{
        setTimeout(()=>{
            console.log(this.name);
        },200)        
    }
}


// obj.normal();
// obj.arrow();

const onj = {
    name:"zoro",
    fun : function(){
        console.log(this.name);
    },
    tofun :function() {
        setTimeout(() =>{
            console.log(this.name);
        },2000)
    }
}

// onj.fun();
// onj.tofun();



