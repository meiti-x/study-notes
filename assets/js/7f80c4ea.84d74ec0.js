"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[631],{6436:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=t(4848),r=t(8453);const s={sidebar_position:3},o=void 0,a={id:"Basics/general",title:"general",description:"DRY",source:"@site/docs/Basics/general.md",sourceDirName:"Basics",slug:"/Basics/general",permalink:"/front-lint/docs/Basics/general",draft:!1,unlisted:!1,editUrl:"https://github.com/meiti-x/front-lint/tree/main/docs/Basics/general.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Code Smell",permalink:"/front-lint/docs/Basics/code-smell"},next:{title:"General",permalink:"/front-lint/docs/category/general"}},l={},c=[{value:"DRY",id:"dry",level:2},{value:"YAGNI",id:"yagni",level:2}];function d(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"dry",children:"DRY"}),"\n",(0,i.jsxs)(n.p,{children:["DRY: Don\u2019t Repeat Yourself .The DRY principle emphasizes code reuse and reducing ",(0,i.jsx)(n.strong,{children:"duplication"}),". By following this principle, you can improve maintainability, reduce errors, and enhance development efficiency."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-react",children:"// BAD\n\nexport function App(props) {\n  return (\n    <div className='App'>\n      <h1>items</h1>\n      <ul>\n        <li>watermelon</li>\n        <li>orange</li>\n        <li>apple</li>\n      </ul>\n    </div>\n  );\n}\n\n// GOOD\nexport function App(props) {\n  const listItems = ['watermelon', 'orange', 'apple']\n  return (\n    <div className='App'>\n      <h1>items</h1>\n      <ul>\n        {listItems.map(item => <li key={item}>{item}</li>)}\n      </ul>\n    </div>\n  );\n}\n\n"})}),"\n",(0,i.jsx)(n.h2,{id:"yagni",children:"YAGNI"}),"\n",(0,i.jsx)(n.p,{children:'YAGNI stands for "You Ain\'t Gonna Need It," which is a principle in software development that advises developers to avoid adding functionality or features that are not immediately necessary. The main idea behind YAGNI is to prevent over-engineering, unnecessary complexity, and wasted development time by focusing on the essential features required for the current requirements.'})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(6540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);