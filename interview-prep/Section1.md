# Section 1: Core JavaScript – Basics

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
