"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[482],{1521:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=s(4848),r=s(8453);const i={sidebar_position:2},a="Code Smell",o={id:"Basics/code-smell",title:"Code Smell",description:"Code smell is a term used in software development to describe a symptom in the source code of a program that possibly indicates a deeper problem. It's a surface indication that something might be wrong with the code, even if it seems to work correctly. Code smells are usually not bugs, but rather they are signs of bad design, poor coding practices, or other issues that can make the code harder to maintain, understand, or extend.s",source:"@site/docs/Basics/code-smell.md",sourceDirName:"Basics",slug:"/Basics/code-smell",permalink:"/study-notes/docs/Basics/code-smell",draft:!1,unlisted:!1,editUrl:"https://github.com/meiti-x/study-notes/tree/main/docs/Basics/code-smell.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"SOLID",permalink:"/study-notes/docs/Basics/solid"},next:{title:"general",permalink:"/study-notes/docs/Basics/general"}},l={},d=[{value:"Naming",id:"naming",level:2},{value:"Long Method",id:"long-method",level:2},{value:"Long Parameter List",id:"long-parameter-list",level:2},{value:"Primitive Obsession",id:"primitive-obsession",level:2},{value:"Data Clumps",id:"data-clumps",level:2},{value:"Switch Statment",id:"switch-statment",level:2},{value:"Couplers",id:"couplers",level:2},{value:"Feature Envy",id:"feature-envy",level:3},{value:"Message Chain",id:"message-chain",level:3},{value:"Inappropriate",id:"inappropriate",level:3},{value:"Middle Man",id:"middle-man",level:3}];function c(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"code-smell",children:"Code Smell"}),"\n",(0,t.jsx)(n.p,{children:"Code smell is a term used in software development to describe a symptom in the source code of a program that possibly indicates a deeper problem. It's a surface indication that something might be wrong with the code, even if it seems to work correctly. Code smells are usually not bugs, but rather they are signs of bad design, poor coding practices, or other issues that can make the code harder to maintain, understand, or extend.s"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Your Code should Tell a Story"})}),"\n",(0,t.jsx)(n.h2,{id:"naming",children:"Naming"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"\u201cThere are only two hard things in Computer Science: cache invalidation and"})," *",(0,t.jsx)(n.strong,{children:"naming things.\u201d*"})," ",(0,t.jsx)(n.em,{children:"\u2014"})," ",(0,t.jsx)(n.a,{href:"https://quotesondesign.com/phil-karlton/",children:(0,t.jsx)(n.em,{children:"Phil Karlton"})})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"I know, you already heard about that! But Correct naming eliminates the need for comments. these are few guides :"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Choose descriptive and unambiguous names."}),"\n",(0,t.jsx)(n.li,{children:"Make meaningful distinctions."}),"\n",(0,t.jsx)(n.li,{children:"Use pronounceable names."}),"\n",(0,t.jsx)(n.li,{children:"Use searchable names."}),"\n",(0,t.jsx)(n.li,{children:"Replace magic numbers with named constants."}),"\n",(0,t.jsx)(n.li,{children:"Avoid encodings. Don\u2019t append prefixes or type information."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"// Bad -> Good\n\nhandleclick() -> handleOnAddNewProduct\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For example, if you must name a ",(0,t.jsx)(n.strong,{children:"boolean"}),",it should tell what the boolean is up to: ",(0,t.jsx)(n.code,{children:"isLoading"}),", ",(0,t.jsx)(n.code,{children:"hasName"}),", ",(0,t.jsx)(n.code,{children:"canUseOptions"}),"etc."]}),"\n",(0,t.jsxs)(n.p,{children:["If it is a ",(0,t.jsx)(n.strong,{children:"function"}),", a verb should be part of the name: ",(0,t.jsx)(n.code,{children:"handleLogin"}),", ",(0,t.jsx)(n.code,{children:"openScreen"}),", ",(0,t.jsx)(n.code,{children:"validateUser"}),", etc.\nAlternatively, functions and methods can also be used to primarily produce values then, especially when producing ",(0,t.jsx)(n.strong,{children:"booleans"}),", you could also go with adjectives. For example ",(0,t.jsx)(n.code,{children:"isValid()"}),", ",(0,t.jsx)(n.code,{children:"isEmail()"}),", etc"]}),"\n",(0,t.jsxs)(n.p,{children:["as the last tip be consitants, if you use ",(0,t.jsx)(n.code,{children:"fetch"})," for"]}),"\n",(0,t.jsx)(n.h2,{id:"long-method",children:"Long Method"}),"\n",(0,t.jsx)(n.p,{children:"Long Methods are methods that span too many lines. When a method gets too long, perhaps it is responsible for more tasks than it should be."}),"\n",(0,t.jsx)(n.h2,{id:"long-parameter-list",children:"Long Parameter List"}),"\n",(0,t.jsx)(n.p,{children:"Long Parameter Lists are methods that have many arguments (parameters). This could be a sign that the method is responsible for too many tasks, or that the input data is poorly organised."}),"\n",(0,t.jsx)(n.h2,{id:"primitive-obsession",children:"Primitive Obsession"}),"\n",(0,t.jsxs)(n.p,{children:["Primitive Obsession is a code smell that occurs when developers rely too heavily on ",(0,t.jsx)(n.strong,{children:"primitive"})," data types, such as ",(0,t.jsx)(n.strong,{children:"integers"}),", ",(0,t.jsx)(n.strong,{children:"strings"}),", or ",(0,t.jsx)(n.strong,{children:"booleans"}),", instead of creating a new variable  to represent more complex domain concepts. This overuse of primitive types can lead to code that is harder to ",(0,t.jsx)(n.strong,{children:"search"}),", ",(0,t.jsx)(n.strong,{children:"understand"}),", maintain, and debug."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// What is 36000000 for, what does it mean?\nsetTimeout(restart, 36000000);\n\n// BAD\nif(role === 1) // what the heck is 1, do not use magical number\n// GOOD\nif(role === GUEST_ROLE)\n \n// BAD\nif(age > 21 & age < 40 & health === 'well' & excersice === true)\n// GOOD\nconst isYoungAndHealty = age > 21 & age < 40 & health === 'well' & excersice === true\nif(isYoungAndHealty)\n    \n// BAD\nconst total = subtotal + 4.50;\n// GOOD\nconst total = subtotal + SHIPPING_FEE;\n\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"also read"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://refactoring.guru/smells/primitive-obsession",children:"https://refactoring.guru/smells/primitive-obsession"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"data-clumps",children:"Data Clumps"}),"\n",(0,t.jsxs)(n.p,{children:['"',(0,t.jsx)(n.strong,{children:"data clumps"}),'" refer to a group of related variables or values that are often passed together as a unit or clumped together in an object. Data clumps can be a code smell, indicating that the related variables might be better organized or represented using a custom data structure or class, rather than being passed around as individual variables.\nFor example, consider the following TypeScript code:']}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'function displayUserInfo(id: number, name: string, age: number) {\n  console.log(`ID: ${id}, Name: ${name}, Age: ${age}`);\n}\n\nconst userID = 123;\nconst userName = "John Doe";\nconst userAge = 30;\n\ndisplayUserInfo(userID, userName, userAge);\n\n// good\nconst user= {\n    id:123,\n    name:"John Doe"\n}\ndisplayUserInfo(userID, userName, userAge);\n\n'})}),"\n",(0,t.jsx)(n.p,{children:"The problem with Data Clumps, is that it is not easy to centrally control their behaviour"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"also read"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://refactoring.guru/smells/data-clumps",children:"https://refactoring.guru/smells/data-clumps"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"switch-statment",children:"Switch Statment"}),"\n",(0,t.jsxs)(n.p,{children:["A Switch Statement code smell occurs whenever a ",(0,t.jsx)(n.code,{children:"switch"})," statement is used. If instead of an actual ",(0,t.jsx)(n.code,{children:"switch"})," statement, an ",(0,t.jsx)(n.code,{children:"if ... else if"})," statement is used, this is still a Switch Statement code smell :)\nwhy its bad smell? because its violates ",(0,t.jsx)(n.strong,{children:"OCP"})," and ",(0,t.jsx)(n.strong,{children:"SRP"})," principle."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Bad"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"type Fruit = 'apple' | 'banana' | 'orange' | 'pineapple' | 'raspberry'\n\nconst getFruitEmoji = (fruit: Fruit) => {\n  switch (fruit) {\n    case 'apple':\n      return '\ud83c\udf4e'\n    case 'banana':\n      return '\ud83c\udf4c'\n    case 'orange':\n      return '\ud83c\udf4a'\n    case 'pineapple':\n      return '\ud83c\udf4d'\n    default:\n      return '\ud83c\udf47'\n  }\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Good"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"type Fruit = 'apple' | 'banana' | 'orange' | 'pineapple' | 'raspberry'\n\nconst getFruitEmoji = (fruit: Fruit) => {\n  const FRUIT_EMOJI_MAP = {\n    apple: '\ud83c\udf4e',\n    banana: '\ud83c\udf4c',\n    orange: '\ud83c\udf4a',\n    pineapple: '\ud83c\udf4d',\n    raspberry: '\ud83c\udf47'\n  }\n\n  return fruitEmojiMap[fruit] \n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"couplers",children:"Couplers"}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.strong,{children:"Coupler"})," smell represents high degrees of dependency between different parts of the codebase."]}),"\n",(0,t.jsx)(n.h3,{id:"feature-envy",children:"Feature Envy"}),"\n",(0,t.jsx)(n.h3,{id:"message-chain",children:"Message Chain"}),"\n",(0,t.jsx)(n.p,{children:"Message Chain is a code smell that occurs when a series of method calls are chained together, making the code difficult to read and understand. In functional programming, this can happen when you compose multiple functions together in a way that makes it hard to follow the flow of data or the control flow."}),"\n",(0,t.jsx)(n.p,{children:"Here's an example of a Message Chain in TypeScript using functional programming:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"const users = getUsers()\n  .filter(isActive)\n  .map(getUserDetails)\n  .sort(sortByLastName);\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"In this example, we have a series of method calls chained together to process a list of users. While this code is concise and expressive, it can become harder to understand as more functions are added to the chain."}),"\n",(0,t.jsx)(n.p,{children:"To address this code smell, you can break down the method chain into smaller, more readable steps:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"const activeUsers = getUsers().filter(isActive);\nconst detailedUsers = activeUsers.map(getUserDetails);\nconst sortedUsers = detailedUsers.sort(sortByLastName);\n"})}),"\n",(0,t.jsx)(n.p,{children:"In the refactored version, we have broken down the method chain into separate steps, assigning intermediate results to variables with descriptive names. This makes the code easier to read and understand, as the flow of data is now more explicit."}),"\n",(0,t.jsxs)(n.p,{children:["However, do note that breaking down method chains may ",(0,t.jsx)(n.strong,{children:"not always be necessary"}),", especially if the chain is short and the functions involved are ",(0,t.jsx)(n.strong,{children:"simple"})," and ",(0,t.jsx)(n.strong,{children:"well-named"}),". Use your best judgment to determine when breaking down a method chain will improve the readability of your code."]}),"\n",(0,t.jsx)(n.h3,{id:"inappropriate",children:"Inappropriate"}),"\n",(0,t.jsx)(n.h3,{id:"middle-man",children:"Middle Man"}),"\n",(0,t.jsx)(n.p,{children:"The Middle Man code smell occurs when a class or function serves as an intermediary between other classes or functions without adding any significant behavior or value. This can lead to unnecessary complexity and make the code harder to maintain."}),"\n",(0,t.jsx)(n.p,{children:"In functional programming, a Middle Man can manifest as a function that simply delegates work to other functions without performing any meaningful work itself. This can make the code more difficult to understand and can increase the cognitive load for developers."}),"\n",(0,t.jsx)(n.p,{children:"Here's an example of a Middle Man in TypeScript using functional programming:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'const logError = (error: Error) => {\n  console.error("Error:", error.message);\n};\n\nconst handleError = (error: Error) => {\n  logError(error);\n};\n\n// Elsewhere in the codebase\nconst doSomething = () => {\n  // ...\n  if (somethingWentWrong) {\n    handleError(new Error("Something went wrong"));\n  }\n  // ...\n};\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In this example, the ",(0,t.jsx)(n.code,{children:"handleError"})," function acts as a Middle Man between the ",(0,t.jsx)(n.code,{children:"doSomething"})," function and the ",(0,t.jsx)(n.code,{children:"logError"})," function. It doesn't perform any meaningful work itself; it just delegates the task to ",(0,t.jsx)(n.code,{children:"logError"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"To address this code smell, you can remove the Middle Man function and have the client code call the necessary function directly:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'const logError = (error: Error) => {\n  console.error("Error:", error.message);\n};\n\nconst doSomething = () => {\n  // ...\n  if (somethingWentWrong) {\n    logError(new Error("Something went wrong"));\n  }\n  // ...\n};\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In the refactored version, the ",(0,t.jsx)(n.code,{children:"handleError"})," function has been removed, and the ",(0,t.jsx)(n.code,{children:"doSomething"})," function calls the ",(0,t.jsx)(n.code,{children:"logError"})," function directly. This simplifies the code and reduces unnecessary indirection."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var t=s(6540);const r={},i=t.createContext(r);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);