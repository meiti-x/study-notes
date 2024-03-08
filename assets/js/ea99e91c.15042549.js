"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5957],{1075:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=i(4848),t=i(8453);const r={sidebar_position:1},o="SOLID",a={id:"Basics/solid",title:"SOLID",description:"SOLID is an acronym for five design principles in object-oriented programming that help developers create flexible, maintainable, and scalable software systems. These principles were introduced by Robert C. Martin and are widely accepted as essential guidelines for writing clean and maintainable code. The SOLID principles are:",source:"@site/docs/Basics/solid.md",sourceDirName:"Basics",slug:"/Basics/solid",permalink:"/front-lint/docs/Basics/solid",draft:!1,unlisted:!1,editUrl:"https://github.com/meiti-x/front-lint/tree/main/docs/Basics/solid.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Basics",permalink:"/front-lint/docs/category/basics"},next:{title:"Code Smell",permalink:"/front-lint/docs/Basics/code-smell"}},l={},c=[{value:"Open/Closed Principle (OCP)",id:"openclosed-principle-ocp",level:2},{value:"Liskov Substitution Principle",id:"liskov-substitution-principle",level:2},{value:"Interface Segregation Principle (ISP)",id:"interface-segregation-principle-isp",level:2},{value:"Dependency Inversion Principle",id:"dependency-inversion-principle",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"solid",children:"SOLID"}),"\n",(0,s.jsx)(n.p,{children:"SOLID is an acronym for five design principles in object-oriented programming that help developers create flexible, maintainable, and scalable software systems. These principles were introduced by Robert C. Martin and are widely accepted as essential guidelines for writing clean and maintainable code. The SOLID principles are:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Single Responsibility Principle ",(0,s.jsx)(n.strong,{children:"(SRP)"})]}),"\n",(0,s.jsxs)(n.li,{children:["Open/Closed Principle ",(0,s.jsx)(n.strong,{children:"(OCP)"})]}),"\n",(0,s.jsxs)(n.li,{children:["Liskov Substitution Principle ",(0,s.jsx)(n.strong,{children:"(LSP)"})]}),"\n",(0,s.jsxs)(n.li,{children:["Interface Segregation Principle ",(0,s.jsx)(n.strong,{children:"(ISP)"})]}),"\n",(0,s.jsxs)(n.li,{children:["Dependency Inversion Principle ",(0,s.jsx)(n.strong,{children:"(DIP)"})]}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"single-responsibility-principle",children:"Single Responsibility Principle"}),"\n",(0,s.jsx)(n.p,{children:"The Single Responsibility Principle (SRP) in functional programming with TypeScript can be applied by ensuring that each function has a single, well-defined purpose and does not do more than one thing. This leads to cleaner, more maintainable, and easier-to-understand code."}),"\n",(0,s.jsx)(n.p,{children:"Consider the following example of a TypeScript function that violates the SRP:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"Explainconst calculateUserDetailsAndLog = (user: User): UserDetails => {\n  const details = calculateUserDetails(user);\n  logDetails(details);\n  return details;\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In this example, the ",(0,s.jsx)(n.code,{children:"calculateUserDetailsAndLog"})," function has two responsibilities: calculating user details and logging them. This makes the function harder to test and maintain, as it is not clear what the function's primary purpose is."]}),"\n",(0,s.jsx)(n.p,{children:"To apply the SRP, you can split the function into two separate functions, each with its own responsibility:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"Explainconst calculateUserDetails = (user: User): UserDetails => {\n  // Calculate user details\n  return details;\n};\n\nconst logDetails = (details: UserDetails) => {\n  // Log details\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Now, each function has a single responsibility: ",(0,s.jsx)(n.code,{children:"calculateUserDetails"})," is responsible for calculating user details, and ",(0,s.jsx)(n.code,{children:"logDetails"})," is responsible for logging those details. This makes the code easier to understand, test, and maintain."]}),"\n",(0,s.jsx)(n.p,{children:"When using the SRP in functional programming with TypeScript, it is important to focus on creating small, pure functions that have a single responsibility and can be easily composed to create more complex logic. This leads to modular, maintainable, and reusable code."}),"\n",(0,s.jsx)(n.h2,{id:"openclosed-principle-ocp",children:"Open/Closed Principle (OCP)"}),"\n",(0,s.jsx)(n.p,{children:"The Open/Closed Principle (OCP) in functional programming with TypeScript encourages designing functions and modules that are open for extension but closed for modification. This means that you should be able to add new functionality to your code without altering existing functions."}),"\n",(0,s.jsx)(n.h2,{id:"liskov-substitution-principle",children:"Liskov Substitution Principle"}),"\n",(0,s.jsx)(n.p,{children:"The Open/Closed Principle (OCP) in functional programming with TypeScript encourages designing functions and modules that are open for extension but closed for modification. This means that you should be able to add new functionality to your code without altering existing functions."}),"\n",(0,s.jsx)(n.h2,{id:"interface-segregation-principle-isp",children:"Interface Segregation Principle (ISP)"}),"\n",(0,s.jsxs)(n.p,{children:["The Interface Segregation Principle (",(0,s.jsx)(n.strong,{children:"ISP"}),") is one of the SOLID principles that focuses on creating small, specific, and ",(0,s.jsx)(n.strong,{children:"cohesive"})," interfaces to make software systems more modular and maintainable. In functional programming with TypeScript, ISP can be applied by avoiding large, monolithic function signatures and instead using smaller, focused function signatures."]}),"\n",(0,s.jsx)(n.p,{children:"Consider the following TypeScript example that violates the ISP:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"type UserData = {\n  id: string;\n  name: string;\n  email: string;\n  address: {\n    street: string;\n    city: string;\n    zip: string;\n  };\n};\n\nconst saveUserData = (user: UserData): void => {\n  // Implementation to save user data\n};\n\nconst getUserData = (userId: string): UserData => {\n  // Implementation to retrieve user data\n  return user;\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In this example, the ",(0,s.jsx)(n.code,{children:"UserData"})," type is a large interface with many properties. The ",(0,s.jsx)(n.code,{children:"saveUserData"})," and ",(0,s.jsx)(n.code,{children:"getUserData"})," functions depend on this large interface, potentially forcing clients to provide more data than necessary."]}),"\n",(0,s.jsxs)(n.p,{children:["To adhere to the ISP, you can break down the ",(0,s.jsx)(n.code,{children:"UserData"})," type into smaller, more focused interfaces and adjust the function signatures accordingly:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"type UserId = string;\ntype UserBasicInfo = {\n  id: UserId;\n  name: string;\n  email: string;\n};\n\ntype UserAddress = {\n  street: string;\n  city: string;\n  zip: string;\n};\n\nconst saveBasicUserInfo = (user: UserBasicInfo): void => {\n  // Implementation to save basic user info\n};\n\nconst saveUserAddress = (user: UserAddress): void => {\n  // Implementation to save user address\n};\n\nconst getUserBasicInfo = (userId: UserId): UserBasicInfo => {\n  // Implementation to retrieve basic user info\n  return user;\n};\n\nconst getUserAddress = (userId: UserId): UserAddress => {\n  // Implementation to retrieve user address\n  return user;\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In the refactored version, the ",(0,s.jsx)(n.code,{children:"UserData"})," type has been broken down into smaller interfaces: ",(0,s.jsx)(n.code,{children:"UserBasicInfo "}),"and ",(0,s.jsx)(n.code,{children:"UserAddress"}),". The functions now depend on these smaller interfaces, allowing clients to provide only the necessary data for each function."]}),"\n",(0,s.jsx)(n.h2,{id:"dependency-inversion-principle",children:"Dependency Inversion Principle"}),"\n",(0,s.jsxs)(n.p,{children:["DIP states that high-level modules should ",(0,s.jsx)(n.strong,{children:"not depend"})," on low-level modules, but both should depend on ",(0,s.jsx)(n.strong,{children:"abstractions"}),". Additionally, abstractions should not depend on details; details should depend on abstractions."]}),"\n",(0,s.jsx)(n.p,{children:"you can apply DIP by designing your code to depend on abstractions rather than concrete implementations. This can be achieved by using TypeScript's type system and features like interfaces and type aliases."}),"\n",(0,s.jsx)(n.p,{children:"Consider the following example of a TypeScript function that violates the DIP:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"class Logger {\n  log(message: string): void {\n    console.log(message);\n  }\n}\n\nconst createLogger = (): Logger => {\n  return new Logger();\n};\n\nconst logMessage = (logger: Logger, message: string): void => {\n  logger.log(message);\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"In this example, the logMessage function depends on a concrete implementation of the Logger class. This makes it difficult to change the implementation or substitute it with a different logging mechanism."}),"\n",(0,s.jsx)(n.p,{children:"To apply the DIP, you can introduce an abstraction for the Logger and make the logMessage function depend on that abstraction instead:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"interface ILogger {\n  log: (message: string) => void;\n}\n\nclass ConsoleLogger implements ILogger {\n  log(message: string): void {\n    console.log(message);\n  }\n}\n\nconst createLogger = (): ILogger => {\n  return new ConsoleLogger();\n};\n\nconst logMessage = (logger: ILogger, message: string): void => {\n  logger.log(message);\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Now, the ",(0,s.jsx)(n.code,{children:"logMessage"})," function depends on the ",(0,s.jsx)(n.code,{children:"ILogger "}),"interface instead of the concrete ",(0,s.jsx)(n.code,{children:"ConsoleLogger"})," implementation. This allows for greater flexibility, as you can easily swap out the logging implementation by providing a ",(0,s.jsx)(n.strong,{children:"different"})," implementation of the ILogger interface."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"also read:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://samueleresca.net/solid-principles-using-typescript/",children:"https://samueleresca.net/solid-principles-using-typescript/"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design",children:"https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.baeldung.com/solid-principles",children:"https://www.baeldung.com/solid-principles"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var s=i(6540);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);