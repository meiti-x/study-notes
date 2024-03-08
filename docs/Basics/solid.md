---
sidebar_position: 1
---

# SOLID

SOLID is an acronym for five design principles in object-oriented programming that help developers create flexible, maintainable, and scalable software systems. These principles were introduced by Robert C. Martin and are widely accepted as essential guidelines for writing clean and maintainable code. The SOLID principles are:
  1. Single Responsibility Principle **(SRP)**
  2. Open/Closed Principle **(OCP)**
  3. Liskov Substitution Principle **(LSP)**
  4. Interface Segregation Principle **(ISP)**
  5. Dependency Inversion Principle **(DIP)**



# Single Responsibility Principle

The Single Responsibility Principle (SRP) in functional programming with TypeScript can be applied by ensuring that each function has a single, well-defined purpose and does not do more than one thing. This leads to cleaner, more maintainable, and easier-to-understand code.

Consider the following example of a TypeScript function that violates the SRP:

```typescript
Explainconst calculateUserDetailsAndLog = (user: User): UserDetails => {
  const details = calculateUserDetails(user);
  logDetails(details);
  return details;
};
```

In this example, the `calculateUserDetailsAndLog` function has two responsibilities: calculating user details and logging them. This makes the function harder to test and maintain, as it is not clear what the function's primary purpose is.

To apply the SRP, you can split the function into two separate functions, each with its own responsibility:



```typescript
Explainconst calculateUserDetails = (user: User): UserDetails => {
  // Calculate user details
  return details;
};

const logDetails = (details: UserDetails) => {
  // Log details
};
```

Now, each function has a single responsibility: `calculateUserDetails` is responsible for calculating user details, and `logDetails` is responsible for logging those details. This makes the code easier to understand, test, and maintain.

When using the SRP in functional programming with TypeScript, it is important to focus on creating small, pure functions that have a single responsibility and can be easily composed to create more complex logic. This leads to modular, maintainable, and reusable code.

## Open/Closed Principle (OCP)

The Open/Closed Principle (OCP) in functional programming with TypeScript encourages designing functions and modules that are open for extension but closed for modification. This means that you should be able to add new functionality to your code without altering existing functions.



## Liskov Substitution Principle

The Open/Closed Principle (OCP) in functional programming with TypeScript encourages designing functions and modules that are open for extension but closed for modification. This means that you should be able to add new functionality to your code without altering existing functions.



##  Interface Segregation Principle (ISP)

The Interface Segregation Principle (**ISP**) is one of the SOLID principles that focuses on creating small, specific, and **cohesive** interfaces to make software systems more modular and maintainable. In functional programming with TypeScript, ISP can be applied by avoiding large, monolithic function signatures and instead using smaller, focused function signatures.

Consider the following TypeScript example that violates the ISP:

```typescript
type UserData = {
  id: string;
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
    zip: string;
  };
};

const saveUserData = (user: UserData): void => {
  // Implementation to save user data
};

const getUserData = (userId: string): UserData => {
  // Implementation to retrieve user data
  return user;
};
```

In this example, the `UserData` type is a large interface with many properties. The `saveUserData` and `getUserData` functions depend on this large interface, potentially forcing clients to provide more data than necessary.

To adhere to the ISP, you can break down the `UserData` type into smaller, more focused interfaces and adjust the function signatures accordingly:



```typescript
type UserId = string;
type UserBasicInfo = {
  id: UserId;
  name: string;
  email: string;
};

type UserAddress = {
  street: string;
  city: string;
  zip: string;
};

const saveBasicUserInfo = (user: UserBasicInfo): void => {
  // Implementation to save basic user info
};

const saveUserAddress = (user: UserAddress): void => {
  // Implementation to save user address
};

const getUserBasicInfo = (userId: UserId): UserBasicInfo => {
  // Implementation to retrieve basic user info
  return user;
};

const getUserAddress = (userId: UserId): UserAddress => {
  // Implementation to retrieve user address
  return user;
};
```

In the refactored version, the `UserData` type has been broken down into smaller interfaces: `UserBasicInfo `and `UserAddress`. The functions now depend on these smaller interfaces, allowing clients to provide only the necessary data for each function.



##  Dependency Inversion Principle

DIP states that high-level modules should **not depend** on low-level modules, but both should depend on **abstractions**. Additionally, abstractions should not depend on details; details should depend on abstractions.

you can apply DIP by designing your code to depend on abstractions rather than concrete implementations. This can be achieved by using TypeScript's type system and features like interfaces and type aliases.

Consider the following example of a TypeScript function that violates the DIP:



```typescript
class Logger {
  log(message: string): void {
    console.log(message);
  }
}

const createLogger = (): Logger => {
  return new Logger();
};

const logMessage = (logger: Logger, message: string): void => {
  logger.log(message);
};
```

In this example, the logMessage function depends on a concrete implementation of the Logger class. This makes it difficult to change the implementation or substitute it with a different logging mechanism.

To apply the DIP, you can introduce an abstraction for the Logger and make the logMessage function depend on that abstraction instead:



```typescript
interface ILogger {
  log: (message: string) => void;
}

class ConsoleLogger implements ILogger {
  log(message: string): void {
    console.log(message);
  }
}

const createLogger = (): ILogger => {
  return new ConsoleLogger();
};

const logMessage = (logger: ILogger, message: string): void => {
  logger.log(message);
};
```

Now, the `logMessage` function depends on the `ILogger `interface instead of the concrete `ConsoleLogger` implementation. This allows for greater flexibility, as you can easily swap out the logging implementation by providing a **different** implementation of the ILogger interface.



**also read:**

- https://samueleresca.net/solid-principles-using-typescript/
- https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design
- https://www.baeldung.com/solid-principles
