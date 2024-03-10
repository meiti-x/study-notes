---
sidebar_position: 2
---

# React 





## Use UUID Correctly
according to docs, it's not good practice to generate keys while rendering. for example :

~~~react
 import { v4 as uuidv4 } from 'uuid';

function MyComponent() {
  const items = ['Apple', 'Banana', 'Orange'];

  return (
    <ul>
      {items.map((item) => (
        <li key={uuidv4()}>{item}</li>
      ))}
    </ul>
  );
}

~~~

**but, why?** This will cause keys to never match up between renders, leading to all your components and DOM being recreated every time. Not only is this slow, but it will also lose any user input inside the list items. Instead, use a stable ID based on the data.

The better way is to generate keys on the data source not at the component level.



~~~react
 import { v4 as uuidv4 } from 'uuid';

function MyComponent() {
  const items = [
    {
        id:uuidv4(),
        title:'Apple',
    },
    {
        id:uuidv4(),
        title:'Banana',
    },
    {
        id:uuidv4(),
        title:'Orange',
    }
];

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}

~~~

even if you get dynamic value from server and there is no unique value for set as key, you should add them to list. for example:

~~~react
useEffect(() => {
  getShopItems().then((res)=>addIdToData(res.data))
}, []);

function addIdToData(data){
  data.map(item=>{
    return {...item,id:uuidv4()}
  })
}
~~~



## Create a folder for each component
Think of a component like being itself a **mini** application on the main application. 
If the component contains business logic, extract it to a custom hook.

If the component needs to be split into subcomponents, create a “components” folder inside the component folder and
put each subcomponent in it.

If there is a translation for it, add the folder with languages to it.

If there is a need to create some helper function, put it in the “utils” files.

In this way everything the component needs is enclosed in one folder specific to it.

Placing all files under the same directory is a good way to make the code more comprehensible to others.

It’s easier to understand how different files relate to each other when they are grouped under the same directory.

Instead, placing your component’s related files by their types in some “type” folders, is terribly cumbersome and not as clear to deal with as we need to jump from the component file to its hook, to its utility function or its subcomponents along all the app structure.



## extract to new component

We know that we need to extract a new component whenever one component becomes too big.
But only extracting a new component because the component is too big does not mean much.

A component can be as big as you want in terms of JSX and there is nothing wrong with that.

[read more](https://kentcdodds.com/blog/when-to-break-up-a-component-into-multiple-components)

## Avoid overusing 3rd parties

Please avoid the usage of the libraries like lodash or ramda (even though it is more about functional programming than a syntactic sugar) for things that can be done with Vanilla JavaScript.
JavaScrip has gone quite far and is now capable of many things that these helper libraries used to provide.
There are, of course, some valid use cases for these depending on the task, it just shouldn't be a default thing to reach for on a daily basis.

[supply chain attack](https://en.wikipedia.org/wiki/Supply_chain_attack)

https://www.davidhaney.io/npm-left-pad-have-we-forgotten-how-to-program/



## React components and specific hooks for each

**Never put any business logic into UI components!**

Pattern: do you have an useState,  useEffect or whatever hook into the UI component Bad!

**Extract all of that to a custom hook!**

Components returning JSX do not need and have no need to know about any business
logic, small or big!

This is the approach to create a nice,clean, structured and consistent React
Components for the Native and Web app.

There are some principles behind the folder structure for top level components, reusable feature components and feature-agnostic UI components but
the way they are implemented internally is pretty much universal.

Use Functional Components (or FC for short) exclusively in your codebase, alongside with React Hooks instead of the obsolete class components.

So, everything in this guide implies the usage of functional components.

### Component-specific hooks.

For simple components, it's completely fine to just place everything into the component file itself, even if it's a simple data-fetching query hook and a bunch of intl's formatMessage calls.

Once the component gets more complicated, with more and more data to fetch, more computed data to calculate, more static strings to format, effects to run, etc, the component might become quite a bit bloated - in this case it's advised to extract such logic into the component-specific hook.

Component-specific hook is named strictly after the component (using the

So, if there was some `MyAwesomeComponent.tsx `(or MyAwesomeComponent/index.tsx), the default component-specific hook file would be AwesomeComponent/useAwesomeComponent.ts. 

It is imported by the component using relative import path:
`import { useMyAwesomeComponent } from './useMyAwesomeComponent';`
This hook isn't necessarily for business-logic-heavy data-driven components only.

They can be very useful for complex UI-only components as well.
Please note that these hooks are intentionally not reusable, so while there are extremely rare cases where some other component borrows another component's component-specific hook, it's really specific to the original component it was created for.

Don't move purely UI-specific things into a default component-specific hook. These include UI-level aspects like dealing with theme/palette, device screen sizes and such.

It is possible to move those to a hook if that hook is specific to such UI-only aspects.
Component aspect-specific hooks. 

Component-specific hooks might get complicated over time (e.g., for complex components) and while this might mean the itself does too much on its own (remember

this hook is just a part of component), there might also be multiple component-specific hooks each tailored to a certain aspect of component's behaviour thus becoming component aspect-specific hooks.

While the default hook, useMyComponent, is generic in what it does for the component (anything except purely UI things), there might be hooks like: useMyComponentData that would be only concerned about fetching and preparing the data component should display `useMyComponentAnimations` that would only be responsible for animations for the component useMyComponentEffects that would only run the component's effects (if there are many of those and they have quite a bit of logic).

`useMyComponent<ASPECT>` - any aspect can be extracted into a hook. 

Note though, that since aspects can be reusable too, chances often are that a regular reusable hook independent from a component would work better.

There can be any combination of component aspect-specific hooks and having a default/generic component-specific hook is not necessary.

For example, if component is all about complex animations but doesn't really have anything else, consider only having the useMyComponentAnimations hook for it and handle everything else (e.g., if it needs a couple formatted translation strings besides the animations) in the component itself.

Note of warning! Resist the temptation of putting unrelated stuff into aspect-specific hook.

If a hook is strictly about "animations", don't think that "Ah, I already have some hook for the component, so one little nice data fetching query amidst the animation logic won't hurt anyone" - the thing is that it WILL, that query will get lost and someone will pull their hair wondering "where the hell that query is made from, this component only seems to have animations rolling O_o".

Note that a default component-specific hook, useMyComponent can have some animation logic along with some other bits, but the aspect-specific (e.g., useMyComponentAnimations) hook shouldn't have anything besides animations.

## Always check for booleans in JSX

Always pay careful attention to what you are checking on the **left side** of a logical statement everywhere but especially in JSX.

~~~react
// BAD
undefined && ...
null && ...
array.length && ...
// GOOD
!!undefined && ..
!!null && ...
Array.isArray(array) && !!array.length && ...
typeof someFunction === 'function' && ...
Object.entries(obj).length > 0 && ...
~~~

Is it a string or a number and you are sure it can't be anything else than a string or a number? Check them with the double bang always!
**Tip:** double bang `!!` can be replaced with Boolean

## Don’t use inline functions if possible

An inline function is an anonymous function. It will get created on every render.

Creating new functions, same as creating new objects, comes with its costs.

## Fetching in useEffect


Fetching data inside the useEffect hook might not fit the React mental model because it can lead to some issues and unexpected behavior. The React mental model encourages declarative, predictable, and efficient code. Fetching data inside useEffect can potentially break these principles in the following ways:

1. **Non-declarative**: Fetching data inside useEffect often leads to imperative code that's harder to read and reason about. You might have to manually handle dependencies, manage loading and error states, and deal with cleanup. This can make your components more complex and less declarative.
2. **Unpredictable**: Using useEffect for data fetching can result in unpredictable behavior due to the timing of when the effect runs. For example, if you fetch data inside a useEffect without an empty dependency array, the fetch request might be called more times than expected, leading to unnecessary requests and potential inconsistencies in your application's state.
3. **Inefficient**: When you fetch data in useEffect, you might not be able to take full advantage of React's ability to skip rendering when props and state haven't changed. This can result in unnecessary re-renders, which can be inefficient and slow down your application.

Instead of fetching data in useEffect, it's recommended to use a library like React Query, SWR, or Axios with a custom hook to manage data fetching. These libraries provide a more declarative and efficient way to handle data fetching, helping you maintain the React mental model and keep your components clean and easy to reason about.



## Put functions outside the component

In the case when you create functions inside the component, the function will be recreated new on every render of the component.
Of course, you can use the useCallback on it to preserve its identity but using useCallback has its own costs anyway.
A much better approach is to put the function outside the component

## Don't use Context as global state manager

n

## Don’t put JSX in custom hooks

Custom hooks should be used only for **business logic**.
If you add JSX in a custom hook that is no longer a custom hook but a component.
And it is not used properly because it ispulled in another component at the top level. This is about good practices and consistency rather than performance or functionality.

## Don’t import SVGs as JSX or directly in React

If you import a SVG like in the image above, you will include the SVGs into the bundle which will make the app slow to load.

Each SVG has hundreds of elements so when React generates the Fiber tree, you will end up with a giant object with thousands of unnecessary data which will increase the memory consumption.

## Destructure Props on component call



## Avoid Nested Ternary Operators

Nested ternaries are bad because they are hard to read and prone to errors.

Ternary operators become hard to read after the first level.

## Use composition instead of Context



## Use virtualization for large lists

Using virtualization in React can be highly beneficial for performance optimization, especially when dealing with large lists or tables. Virtualization is a technique that involves rendering only a small subset of the items in a list or table while giving the appearance of rendering the entire dataset. This is particularly useful when working with large amounts of data or when rendering a large number of components.



## Remove all the Listeners When Unmounting Components

Removing all event listeners when unmounting components in React is crucial to prevent memory leaks, improve performance, and avoid unexpected behavior. When you attach an event listener to a DOM element or a window object, it will persist even after the component is unmounted, unless you explicitly remove it.

```react
 useEffect(() => {
    const handleClick = () => {
      // do something on click
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);
```
