"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[5899],{3905:function(n,e,t){t.d(e,{Zo:function(){return c},kt:function(){return m}});var o=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},a=Object.keys(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var i=o.createContext({}),p=function(n){var e=o.useContext(i),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},c=function(n){var e=p(n.components);return o.createElement(i.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(n,e){var t=n.components,r=n.mdxType,a=n.originalType,i=n.parentName,c=l(n,["components","mdxType","originalType","parentName"]),d=p(t),m=r,y=d["".concat(i,".").concat(m)]||d[m]||u[m]||a;return t?o.createElement(y,s(s({ref:e},c),{},{components:t})):o.createElement(y,s({ref:e},c))}));function m(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var a=t.length,s=new Array(a);s[0]=d;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=n,l.mdxType="string"==typeof n?n:r,s[1]=l;for(var p=2;p<a;p++)s[p]=t[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5858:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var o=t(7462),r=t(3366),a=(t(7294),t(3905)),s=["components"],l={id:"stylingComponents",title:"Styling Components",sidebar_position:3},i=void 0,p={unversionedId:"Web/React/Main Concepts/stylingComponents",id:"Web/React/Main Concepts/stylingComponents",isDocsHomePage:!1,title:"Styling Components",description:"TODO: break out into multiple topics if necessary",source:"@site/docs/Web/React/Main Concepts/Styling Components.md",sourceDirName:"Web/React/Main Concepts",slug:"/Web/React/Main Concepts/stylingComponents",permalink:"/LearningCollection/Web/React/Main Concepts/stylingComponents",editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/Web/React/Main Concepts/Styling Components.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"stylingComponents",title:"Styling Components",sidebar_position:3},sidebar:"mySidebar",previous:{title:"Basics",permalink:"/LearningCollection/Web/React/Main Concepts/basics"},next:{title:"Functional vs Class Components",permalink:"/LearningCollection/Web/React/Main Concepts/functionalVsClassComponents"}},c=[{value:"Dynamic styling",id:"dynamic-styling",children:[]},{value:"Isolating styles to a component using Styled Components",id:"isolating-styles-to-a-component-using-styled-components",children:[{value:"Using dynamic styles",id:"using-dynamic-styles",children:[]}]},{value:"Isolating styles to a component using CSS Modules",id:"isolating-styles-to-a-component-using-css-modules",children:[]}],u={toc:c};function d(n){var e=n.components,t=(0,r.Z)(n,s);return(0,a.kt)("wrapper",(0,o.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"TODO: break out into multiple topics if necessary"))),(0,a.kt)("h2",{id:"dynamic-styling"},"Dynamic styling"),(0,a.kt)("p",null,"We can dynamically apply styles to components using the className property:"),(0,a.kt)("p",null,"Styles in ",(0,a.kt)("inlineCode",{parentName:"p"},"CourseInput.css"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".form-control.invalid input {\n  border-color: red;\n  background: #ffd7d7;\n}\n\n.form-control.invalid label {\n  color: red;\n}\n")),(0,a.kt)("p",null,"Applying it inside the JSX through the className property:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'const CourseInput = (props) => {\n  ...\n\n  return (\n    <form onSubmit={formSubmitHandler}>\n      <div className={`form-control ${!isValid ? "invalid" : ""}`}>\n        <label>Course Goal</label>\n        <input type="text" onChange={goalInputChangeHandler} />\n      </div>\n      <Button type="submit">Add Goal</Button>\n    </form>\n  );\n};\n')),(0,a.kt)("h2",{id:"isolating-styles-to-a-component-using-styled-components"},"Isolating styles to a component using Styled Components"),(0,a.kt)("p",null,"The library ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/styled-components/styled-components"},"Styled Components")," allows you to scope styles to a component. Instead of using a css file like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".button {\n  font: inherit;\n  padding: 0.5rem 1.5rem;\n  border: 1px solid #8b005d;\n  color: white;\n  background: #8b005d;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);\n  cursor: pointer;\n}\n\n.button:focus {\n  outline: none;\n}\n\n.button:hover,\n.button:active {\n  background: #ac0e77;\n  border-color: #ac0e77;\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);\n}\n")),(0,a.kt)("p",null,"You just write you CSS directly in the js file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import styled from "styled-components";\n\n// tagged template literal (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)\n// for details on how this works see: https://styled-components.com/docs\nconst Button = styled.button`\n  font: inherit;\n  padding: 0.5rem 1.5rem;\n  border: 1px solid #8b005d;\n  color: white;\n  background: #8b005d;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);\n  cursor: pointer;\n\n  &:focus {\n    outline: none;\n  }\n\n  &:hover,\n  &:active {\n    background: #ac0e77;\n    border-color: #ac0e77;\n    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);\n  }\n`;\n\n// old component syntax\n// const Button = props => {\n//   return (\n//     <button type={props.type} className="button" onClick={props.onClick}>\n//       {props.children}\n//     </button>\n//   );\n// };\n\nexport default Button;\n')),(0,a.kt)("h3",{id:"using-dynamic-styles"},"Using dynamic styles"),(0,a.kt)("p",null,'We can also dynamically apply styles based upon props on the elements with the "Styled Components" library. This is done like this:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'const FormControl = styled.div`\n  margin: 0.5rem 0;\n\n  & label {\n    font-weight: bold;\n    display: block;\n    margin-bottom: 0.5rem;\n    color: ${(props) => (props.invalid ? "red" : "black")};\n  }\n\n  & input {\n    display: block;\n    width: 100%;\n    border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};\n    background: ${(props) => (props.invalid ? "#ffd7d7" : "transparent")};\n    font: inherit;\n    line-height: 1.5rem;\n    padding: 0 0.25rem;\n  }\n\n  & input:focus {\n    outline: none;\n    background: #fad0ec;\n    border-color: #8b005d;\n  }\n\n  // We don\'t need these anymore since we dynamically apply the styles above\n  // &.invalid input {\n  //   border-color: red;\n  //   background: #ffd7d7;\n  // }\n\n  // &.invalid label {\n  //   color: red;\n  // }\n`;\n\n// here we set the invalid prop\nconst CourseInput = (props) => {\n  ...\n  return (\n    <form onSubmit={formSubmitHandler}>\n      <FormControl invalid={!isValid}>\n        <label>Course Goal</label>\n        <input type="text" onChange={goalInputChangeHandler} />\n      </FormControl>\n      <Button type="submit">Add Goal</Button>\n    </form>\n  );\n};\n')),(0,a.kt)("h2",{id:"isolating-styles-to-a-component-using-css-modules"},"Isolating styles to a component using CSS Modules"),(0,a.kt)("p",null,"Another way to scope styles to a component is to use ",(0,a.kt)("a",{parentName:"p",href:"https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/"},"CSS Modules"),". In this approach we keep our CSS in a separate file and import it into our JSX file in a special way:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'// We name our file with the .module extension\nimport styles from "./Button.module.css";\n\n// then we can use the style in our component\nconst Button = (props) => {\n  return (\n    <button type={props.type} className={styles.button} onClick={props.onClick}>\n      {props.children}\n    </button>\n  );\n};\n')),(0,a.kt)("p",null,"In the DOM the component now looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<button type="submit" class="Button_button__plK1F">Add Goal</button>\n')),(0,a.kt)("p",null,"The style is applied through the class ",(0,a.kt)("inlineCode",{parentName:"p"},"Button_button__plK1F"),". The naming consists of ",(0,a.kt)("inlineCode",{parentName:"p"},"<component-name>_<style-name>__<unique-hash>"),"."),(0,a.kt)("p",null,'If you have styles in your CSS with names like "form-control" where a dash is in the name, you need to access them like this: ',(0,a.kt)("inlineCode",{parentName:"p"},'styles["form-control"]'),"."),(0,a.kt)("p",null,"Adding a conditional style can be done like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'return (\n  <form onSubmit={formSubmitHandler}>\n    <div\n      className={`${styles["form-control"]} ${!isValid ? styles.invalid : ""}`}\n    >\n      <label>Course Goal</label>\n      <input type="text" onChange={goalInputChangeHandler} />\n    </div>\n    <Button type="submit">Add Goal</Button>\n  </form>\n);\n')))}d.isMDXComponent=!0}}]);