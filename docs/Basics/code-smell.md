---
sidebar_position: 2
---

# Code smell
Code smell is a term used in software development to describe a symptom in the source code of a program that possibly indicates a deeper problem. It's a surface indication that something might be wrong with the code, even if it seems to work correctly. Code smells are usually not bugs, but rather they are signs of bad design, poor coding practices, or other issues that can make the code harder to maintain, understand, or extend.

> Your Code should Tell a Story

## Primitive Obsession
Primitive Obsession is a code smell that occurs when developers rely too heavily on **primitive** data types, such as **integers**, **strings**, or **booleans**, instead of creating a new variable  to represent more complex domain concepts. This overuse of primitive types can lead to code that is harder to **search**, **understand**, maintain, and debug. 

**Example**

~~~javascript
// What is 36000000 for, what does it mean?
setTimeout(restart, 36000000);

// BAD
if(role === 1) // what the heck is 1, do not use magical number
// GOOD
if(role === GUEST_ROLE)
 
// BAD
if(age > 21 & age < 40 & health === 'well' & excersice === true)
// GOOD
const isYoungAndHealty = age > 21 & age < 40 & health === 'well' & excersice === true
if(isYoungAndHealty)
~~~



**also read**

- https://refactoring.guru/smells/primitive-obsession
- Martin Fowler, **"Refactoring: Improving the Design of Existing Code"*



## Data Clumps

In TypeScript, "**data clumps**" refer to a group of related variables or values that are often passed together as a unit or clumped together in an object. Data clumps can be a code smell, indicating that the related variables might be better organized or represented using a custom data structure or class, rather than being passed around as individual variables.
For example, consider the following TypeScript code:

~~~typescript
function displayUserInfo(id: number, name: string, age: number) {
  console.log(`ID: ${id}, Name: ${name}, Age: ${age}`);
}

const userID = 123;
const userName = "John Doe";
const userAge = 30;

displayUserInfo(userID, userName, userAge);

// good
const user= {
    id:123,
    name:"John Doe"
}
displayUserInfo(userID, userName, userAge);

~~~

The problem with Data Clumps, is that it is not easy to centrally control their behaviour

**also read**

- https://refactoring.guru/smells/data-clumps

## Long method

