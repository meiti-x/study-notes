---
sidebar_position: 2
---

# Code Smell
Code smell is a term used in software development to describe a symptom in the source code of a program that possibly indicates a deeper problem. It's a surface indication that something might be wrong with the code, even if it seems to work correctly. Code smells are usually not bugs, but rather they are signs of bad design, poor coding practices, or other issues that can make the code harder to maintain, understand, or extend.s

:::note

Your Code should Tell a Story

:::

## Naming

> *“There are only two hard things in Computer Science: cache invalidation and* ***naming things.”\*** *—* [*Phil Karlton*](https://quotesondesign.com/phil-karlton/)

I know, you already heard about that! But Correct naming eliminates the need for comments. these are few guides :

1. Choose descriptive and unambiguous names.
2. Make meaningful distinctions.
3. Use pronounceable names.
4. Use searchable names.
5. Replace magic numbers with named constants.
6. Avoid encodings. Don’t append prefixes or type information.

~~~typescript
// Bad -> Good

handleclick() -> handleOnAddNewProduct
~~~

For example, if you must name a **boolean**,it should tell what the boolean is up to: `isLoading`, `hasName`, `canUseOptions`etc.



If it is a **function**, a verb should be part of the name: `handleLogin`, `openScreen`, `validateUser`, etc.
Alternatively, functions and methods can also be used to primarily produce values then, especially when producing **booleans**, you could also go with adjectives. For example `isValid()`, `isEmail()`, etc



as the last tip be consitants, if you use `fetch` for 

## Long Method

Long Methods are methods that span too many lines. When a method gets too long, perhaps it is responsible for more tasks than it should be.



## Long Parameter List

Long Parameter Lists are methods that have many arguments (parameters). This could be a sign that the method is responsible for too many tasks, or that the input data is poorly organised.



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
    
// BAD
const total = subtotal + 4.50;
// GOOD
const total = subtotal + SHIPPING_FEE;

~~~



**also read**

- https://refactoring.guru/smells/primitive-obsession



## Data Clumps

"**data clumps**" refer to a group of related variables or values that are often passed together as a unit or clumped together in an object. Data clumps can be a code smell, indicating that the related variables might be better organized or represented using a custom data structure or class, rather than being passed around as individual variables.
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



## Switch Statment

A Switch Statement code smell occurs whenever a `switch` statement is used. If instead of an actual `switch` statement, an `if ... else if` statement is used, this is still a Switch Statement code smell :)
why its bad smell? because its violates **OCP** and **SRP** principle.

**Bad**

```typescript
type Fruit = 'apple' | 'banana' | 'orange' | 'pineapple' | 'raspberry'

const getFruitEmoji = (fruit: Fruit) => {
  switch (fruit) {
    case 'apple':
      return '🍎'
    case 'banana':
      return '🍌'
    case 'orange':
      return '🍊'
    case 'pineapple':
      return '🍍'
    default:
      return '🍇'
  }
}
```

**Good**

```typescript
type Fruit = 'apple' | 'banana' | 'orange' | 'pineapple' | 'raspberry'

const getFruitEmoji = (fruit: Fruit) => {
  const FRUIT_EMOJI_MAP = {
    apple: '🍎',
    banana: '🍌',
    orange: '🍊',
    pineapple: '🍍',
    raspberry: '🍇'
  }

  return fruitEmojiMap[fruit] 
}
```

## Couplers

A **Coupler** smell represents high degrees of dependency between different parts of the codebase.

### Feature Envy



### Message Chain 

Message Chain is a code smell that occurs when a series of method calls are chained together, making the code difficult to read and understand. In functional programming, this can happen when you compose multiple functions together in a way that makes it hard to follow the flow of data or the control flow.

Here's an example of a Message Chain in TypeScript using functional programming:

~~~typescript
const users = getUsers()
  .filter(isActive)
  .map(getUserDetails)
  .sort(sortByLastName);

~~~

In this example, we have a series of method calls chained together to process a list of users. While this code is concise and expressive, it can become harder to understand as more functions are added to the chain.

To address this code smell, you can break down the method chain into smaller, more readable steps:

~~~typescript
const activeUsers = getUsers().filter(isActive);
const detailedUsers = activeUsers.map(getUserDetails);
const sortedUsers = detailedUsers.sort(sortByLastName);
~~~

In the refactored version, we have broken down the method chain into separate steps, assigning intermediate results to variables with descriptive names. This makes the code easier to read and understand, as the flow of data is now more explicit.

However, do note that breaking down method chains may **not always be necessary**, especially if the chain is short and the functions involved are **simple** and **well-named**. Use your best judgment to determine when breaking down a method chain will improve the readability of your code.

### Inappropriate

### Middle Man

The Middle Man code smell occurs when a class or function serves as an intermediary between other classes or functions without adding any significant behavior or value. This can lead to unnecessary complexity and make the code harder to maintain.

In functional programming, a Middle Man can manifest as a function that simply delegates work to other functions without performing any meaningful work itself. This can make the code more difficult to understand and can increase the cognitive load for developers.

Here's an example of a Middle Man in TypeScript using functional programming:



```typescript
const logError = (error: Error) => {
  console.error("Error:", error.message);
};

const handleError = (error: Error) => {
  logError(error);
};

// Elsewhere in the codebase
const doSomething = () => {
  // ...
  if (somethingWentWrong) {
    handleError(new Error("Something went wrong"));
  }
  // ...
};
```

In this example, the `handleError` function acts as a Middle Man between the `doSomething` function and the `logError` function. It doesn't perform any meaningful work itself; it just delegates the task to `logError`.

To address this code smell, you can remove the Middle Man function and have the client code call the necessary function directly:

```typescript
const logError = (error: Error) => {
  console.error("Error:", error.message);
};

const doSomething = () => {
  // ...
  if (somethingWentWrong) {
    logError(new Error("Something went wrong"));
  }
  // ...
};
```

In the refactored version, the `handleError` function has been removed, and the `doSomething` function calls the `logError` function directly. This simplifies the code and reduces unnecessary indirection.
