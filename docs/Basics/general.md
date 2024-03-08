---
sidebar_position: 3
---



## DRY

DRY: Don’t Repeat Yourself .The DRY principle emphasizes code reuse and reducing **duplication**. By following this principle, you can improve maintainability, reduce errors, and enhance development efficiency. 

~~~react
// BAD

export function App(props) {
  return (
    <div className='App'>
      <h1>items</h1>
      <ul>
        <li>watermelon</li>
        <li>orange</li>
        <li>apple</li>
      </ul>
    </div>
  );
}

// GOOD
export function App(props) {
  const listItems = ['watermelon', 'orange', 'apple']
  return (
    <div className='App'>
      <h1>items</h1>
      <ul>
        {listItems.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}

~~~



## YAGNI

YAGNI stands for "You Ain't Gonna Need It," which is a principle in software development that advises developers to avoid adding functionality or features that are not immediately necessary. The main idea behind YAGNI is to prevent over-engineering, unnecessary complexity, and wasted development time by focusing on the essential features required for the current requirements.



