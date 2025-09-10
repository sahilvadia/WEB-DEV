# Beginner

## 1. Execution Context & Scope

- Execution context is an enviroment in which javascript code id executed
- it define the variable, function, and object are accessible at a given time.
- think of it as a container that holds information about:

    - variable environment
    - lexical environment
    - this binding

> ### Type of execution context
#### 1. Global Execution Context
- created when js program starts.
- provides global object and this.
- only one GEC exists.

#### 2. Function Execution Context
- craeted whenever a function is called.
- Each call creates a new execution context with its own scope.

#### 3. Eval Execution Context
- rarely userd, created when eval() is called.


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

this keyword (basic usage)

let / const / var

Arrow functions

Template literals

Destructuring

Spread & Rest operators

Equality (== vs ===)

JSON basics

Intermediate

Closures

Higher-Order Functions

Currying & Partial Application

Prototypal Inheritance

Event Delegation

Shallow vs Deep Copy

Error Handling & try/catch

OOP in JS (classes, constructors, new)

DOM Manipulation & Events (bubbling, capturing, stopPropagation)

Modules (import/export, CommonJS vs ESM)

Symbols & BigInt

Sets, Maps, WeakSet, WeakMap

Optional Chaining & Nullish Coalescing

Advanced

Event Loop (Call Stack, Microtask vs Macrotask)

Promises & async/await

Callback Hell vs Promises vs async/await

Debouncing & Throttling

Promise utilities (all, race, allSettled, any)

Garbage Collection & Memory Management (WeakMap/WeakSet use cases)

Generators & Iterators

Performance optimizations (lazy loading, memoization, etc.)

Functional Programming (immutability, pure functions)

Advanced this behavior (bind, call, apply)

Prototype chain deep dive

Advanced async patterns (parallel vs sequential execution)