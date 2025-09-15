> # Beginner

## Q1. What are the different data types in JavaScript?

### primitive types:
- Numbers : integer, float, Nan, Infinity
- String : sequence of characters
- Boolean : true or false
- Undefined : declared but not assigned value
- Null : explicitly assigned null value
- Symbol : unique identifier
- BigInt : large integers

### Reference types:
- Object : key-value pairs
- Array : sequence of values
- Function : block of code that performs a specific task
- Date : Represents date and time
- Error : Represents an error object
- RegExp : Regular expression object
- Map : key-value pairs
- Set : collection of unique values
- WeakMap : key-value pairs with weak references
- WeakSet : collection of unique values with weak references


## Q2. What is the difference between == and === in JavaScript?
- == → loose equality, performs type coercion before comparison.
- === → strict equality, compares both value and type.

## Q3. how js handle type coercion?
- it handle automatically 
    - String + number it concate value and convert into String
    - number * String it multiple the value and convert into Number.

## Q4. Explain var, let, and const.

feature         var                 let            const
Scope       function-scope      block-scope     block-scope
Hoisting    hoisted(undefined)  hoisted(error)  hoisted(error)
re-declare  allowed             not-allowed     not-allowed
re-assign   allowed             allowed         not-allowed

## Q5. What are closures in JavaScript?

- A closure is when a function “remembers” the variables from its outer scope, even after the outer function has finished executing.


## 6. Execution Context & Scope

- Execution context is an enviroment in which javascript code is executed
- it define the variable, function, and object are accessible at a given time.
- think of it as a container that holds information about:

    - variable environment
    - lexical environment
    - this binding

### Type of execution context
#### 1. Global Execution Context
- created when js program starts.
- provides global object and this.
- only one GEC exists.

#### 2. Function Execution Context
- craeted whenever a function is called.
- Each call creates a new execution context with its own scope.

#### 3. Eval Execution Context
- rarely used, created when eval() is called.


> ### phases of execution context
#### 1. creation phase (memory allocation)
- memory is allocated.
- variables are initialized with undefined.
- function are stored entirely.
- this binding is set.
- scope chain prepared.

#### 2. Execution phase (code execution)
- code is executed line by line.
- variables get their assigned values.
- functions are invoked, creating new execution context.


> ### Scope
- **Socpe** determines the accedssibility of variables and functions.

#### Types of scope
##### 1. Global Scope
- variables declared outside any function/block.
- accessible everywhere.

##### 2. Function Scope
- variable declared inside a function using var.
- accessible only inside that function.

##### 3. Block Scope
- Created by {} which let and const.
- var ignores block scope.

##### 4. Lexical Scope
- a function can access variables defined in its parent scope, even after the parent has finished execution.
- basis of Closures.


## Hoisting
- Hoisting is javascript defalut behaviour of moving variable and function declarations to the top of their scope during the creation phase of the execution context.

- only declarations are hoisted, not initializations/ assignments.
- this is why sometimes see undefined instead of a ReferenceError.

## this keyword (basic usage)
- this refers to the object that is currently executing the function.
- Its value depends on how the function is called, not where it is defined.

## Explain var, let, and const.

feature         var                 let            const
Scope       function-scope      block-scope     block-scope
Hoisting    hoisted(undefined)  hoisted(error)  hoisted(error)
re-declare  allowed             not-allowed     not-allowed
re-assign   allowed             allowed         not-allowed

## Arrow functions
- Arrow functions are a shorter syntax for writing functions introduced in ES6.
- Unlike normal functions, they do not have their own this, arguments, super, or new.target


// | Feature           | Normal Function                                  | Arrow Function                                   |
// | :---------------- | :----------------------------------------------- | :----------------------------------------------- |
// | `this` binding    | Dynamic, depends on how the function is called.  | Lexical, inherits `this` from the parent scope.  |
// | `arguments` object| Has its own `arguments` object.                  | Does not have its own `arguments` object.        |
// | `new` keyword     | Can be used as a constructor with `new`.         | Cannot be used as a constructor with `new`.      |
// | `prototype` property | Has a `prototype` property.                   | Does not have a `prototype` property.            |
// | Syntax            | `function name(args) { ... }`                    | `(args) => { ... }` or `args => ...`             |
// | Return            | `return` keyword is explicit.                    | Implicit return for single-expression bodies.    |



## Template literals

- Introduced in ES6.
- Template literals use backticks.
- They support string interpolation, multi-line strings, and expression embedding.
- Tagged templates allow custom string processing.


## Destructuring

- Destructuring is a syntax to unpack values from arrays or objects into variables.
- Makes code shorter and more readable than manual property access.
- Supports default values, nested structures, and renaming variables.

## Spread & Rest operators
- Both use ... but meaning depends on context.
- Spread expands an array/object into individual elements.
- Rest collects remaining values into an array/object.

- Spread creates shallow copies, not deep.
- Rest must be the last parameter in function arguments.

## Equality (== vs ===)
- == → loose equality, performs type coercion before comparison.
- === → strict equality, compares both value and type.

## JSON basics
- JSON (JavaScript Object Notation) is a lightweight text format for data exchange.
- Keys must be strings (double quotes), values can be strings, numbers, booleans, arrays, objects, or null.
- Used for APIs, configuration, and storage.

> # Intermediate

## Closures
- A closure is when a function “remembers” the variables from its outer scope, even after the outer function has finished executing.
- if variable not present in outer scope of function it goes for global variable to resolve the variable if not found global give error
- closure is function with lexical scope.


## Higher-Order Functions
- A Higher-Order Function (HOF) is a function that either takes another function as an argument or returns a function.
- Enables abstraction, reusability, and functional programming patterns.
- Common HOFs: map, filter, reduce, forEach.


## Currying & Partial Application
- currying is the process of transforming a function with multiple arguments into a sequence of functions that each take a single argument.
- Currying transforms a function with multiple arguments into a series of functions each taking one argument.
- Partial Application fixes some arguments of a function and returns a new function for the rest.


## Prototypal Inheritance
- Prototypal Inheritance is a mechanism in JavaScript where objects inherit properties and methods from other objects via the prototype chain.

## Event Delegation
- Event delegation is a technique where instead of attaching event listeners to multiple child elements, you attach a single event listener to a common parent.

## Shallow vs Deep Copy
- A shallow copy only duplicates the first level, sharing nested objects by reference. A deep copy creates a fully independent clone of all levels. Shallow is faster but riskier; deep is safer but costlier.

## Error Handling & try/catch
Error handling in JavaScript ensures that when something goes wrong, your program doesn’t crash but instead gracefully manages the failure.
This is mainly done using the try...catch...finally construct.

## OOP in JS (classes, constructors, new)

## DOM Manipulation & Events (bubbling, capturing, stopPropagation)

## Modules (import/export, CommonJS vs ESM)

## Symbols & BigInt

## Sets, Maps, WeakSet, WeakMap

## Optional Chaining & Nullish Coalescing

>> ## Advanced

## Event Loop (Call Stack, Microtask vs Macrotask)

## Promises & async/await
- A Promise represents the eventual result of an async operation. async/await is built on top of Promises, making async code look synchronous and easier to read.


    ### Promise
    - A Promise is an object representing the eventual completion or failure of an asynchronous operation.

    - States: pending → fulfilled → rejected
    - Methods: .then(), .catch(), .finally()

    ### async/await

    - async/await is syntactic sugar over Promises for cleaner code.
    - async makes a function return a Promise.
    - await pauses execution until a Promise settles.

| Feature        | Promises       | async/await                |
| -------------- | -------------- | -------------------------- |
| Syntax         | `.then/.catch` | Cleaner, synchronous style |
| Error Handling | `.catch()`     | `try/catch`                |
| Readability    | Nested chains  | Flat, easy to follow       |


## Callback Hell vs Promises vs async/await

| Feature        | Callback Hell    | Promises              | async/await          |
| -------------- | --------------   | --------------------- | -------------------- |
| Readability    | ❌ Hard, nested  | ⚠️ Better, chained    | ✅ Best, flat code    |
| Error Handling | ❌ Messy         | ✅ `.catch()`         | ✅ `try/catch`        |
| Flow Control   | ❌ Hard          | ⚠️ Sequential, chain  | ✅ Natural, sync-like |
| Use Case       | Legacy code      | Modern async handling | Cleanest async code  |


## Debouncing & Throttling

### debouncing
- Debouncing ensures a function is executed only after a specified delay has passed since the last call.
- Useful when you want to limit how often a function runs during rapid events.
- Prevents multiple API calls for every keystroke → only calls after user stops typing.

### Throttling
- Throttling ensures a function is executed at most once in a fixed interval, no matter how many times it’s triggered.

youtube chat section with slow mode you only message with-in same time interval

## Promise utilities (all, race, allSettled, any)

## Garbage Collection & Memory Management (WeakMap/WeakSet use cases)

## Generators & Iterators

## Performance optimizations (lazy loading, memoization, etc.)

## Functional Programming (immutability, pure functions)

## Advanced this behavior (bind, call, apply)
- call(thisArg, arg1, arg2, …) → Invokes immediately, arguments passed individually.
- apply(thisArg, [args]) → Invokes immediately, arguments passed as an array.
- bind(thisArg, arg1, arg2, …) → Returns a new function with fixed this, doesn’t run immediately.

## Prototype chain deep dive
- The prototype chain is the mechanism by which JavaScript objects inherit properties and methods from other objects.
- Every object in JS has a hidden property [[Prototype]] (accessible via __proto__).
- If a property/method is not found on the object, JS looks up the chain until Object.prototype.
- The chain ends at null.

- The prototype chain is how JavaScript objects inherit: if a property isn’t found on the object, it’s searched up the chain (obj → prototype → Object.prototype → null).”

## Advanced async patterns (parallel vs sequential execution)

### 1. Sequential Execution
- Tasks run one after another, each waiting for the previous to finish.
- Useful when tasks are dependent.

```
async function sequential() {
  await task1();
  await task2();
  await task3();
}
```

### 2. Parallel Execution
- Tasks run at the same time (non-blocking).
- Useful when tasks are independent.

```
async function parallel() {
  await Promise.all([task1(), task2(), task3()]);
}
```
