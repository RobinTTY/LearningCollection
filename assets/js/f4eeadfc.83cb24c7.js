"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[2133],{3905:(M,i,N)=>{N.d(i,{Zo:()=>a,kt:()=>z});var I=N(7294);function j(M,i,N){return i in M?Object.defineProperty(M,i,{value:N,enumerable:!0,configurable:!0,writable:!0}):M[i]=N,M}function g(M,i){var N=Object.keys(M);if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(M);i&&(I=I.filter((function(i){return Object.getOwnPropertyDescriptor(M,i).enumerable}))),N.push.apply(N,I)}return N}function D(M){for(var i=1;i<arguments.length;i++){var N=null!=arguments[i]?arguments[i]:{};i%2?g(Object(N),!0).forEach((function(i){j(M,i,N[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(N)):g(Object(N)).forEach((function(i){Object.defineProperty(M,i,Object.getOwnPropertyDescriptor(N,i))}))}return M}function e(M,i){if(null==M)return{};var N,I,j=function(M,i){if(null==M)return{};var N,I,j={},g=Object.keys(M);for(I=0;I<g.length;I++)N=g[I],i.indexOf(N)>=0||(j[N]=M[N]);return j}(M,i);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(M);for(I=0;I<g.length;I++)N=g[I],i.indexOf(N)>=0||Object.prototype.propertyIsEnumerable.call(M,N)&&(j[N]=M[N])}return j}var t=I.createContext({}),T=function(M){var i=I.useContext(t),N=i;return M&&(N="function"==typeof M?M(i):D(D({},i),M)),N},a=function(M){var i=T(M.components);return I.createElement(t.Provider,{value:i},M.children)},o={inlineCode:"code",wrapper:function(M){var i=M.children;return I.createElement(I.Fragment,{},i)}},n=I.forwardRef((function(M,i){var N=M.components,j=M.mdxType,g=M.originalType,t=M.parentName,a=e(M,["components","mdxType","originalType","parentName"]),n=T(N),z=j,l=n["".concat(t,".").concat(z)]||n[z]||o[z]||g;return N?I.createElement(l,D(D({ref:i},a),{},{components:N})):I.createElement(l,D({ref:i},a))}));function z(M,i){var N=arguments,j=i&&i.mdxType;if("string"==typeof M||j){var g=N.length,D=new Array(g);D[0]=n;var e={};for(var t in i)hasOwnProperty.call(i,t)&&(e[t]=i[t]);e.originalType=M,e.mdxType="string"==typeof M?M:j,D[1]=e;for(var T=2;T<g;T++)D[T]=N[T];return I.createElement.apply(null,D)}return I.createElement.apply(null,N)}n.displayName="MDXCreateElement"},3707:(M,i,N)=>{N.r(i),N.d(i,{assets:()=>t,contentTitle:()=>D,default:()=>o,frontMatter:()=>g,metadata:()=>e,toc:()=>T});var I=N(7462),j=(N(7294),N(3905));const g={id:"position",title:"Document Flow and Positioning",sidebar_position:7},D=void 0,e={unversionedId:"Web/CSS/position",id:"Web/CSS/position",title:"Document Flow and Positioning",description:"HTML documents are displayed on the page from top to bottom, so the elements that are described higher in the HTML file will be rendered in the browser earlier than those described lower.",source:"@site/docs/Web/CSS/position.md",sourceDirName:"Web/CSS",slug:"/Web/CSS/position",permalink:"/LearningCollection/Web/CSS/position",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/Web/CSS/position.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"position",title:"Document Flow and Positioning",sidebar_position:7},sidebar:"mySidebar",previous:{title:"Flexbox",permalink:"/LearningCollection/Web/CSS/flexbox"},next:{title:"Constructable Stylesheets",permalink:"/LearningCollection/Web/CSS/constructable-stylesheets"}},t={},T=[{value:"Absolute positioning",id:"absolute-positioning",level:2},{value:"Example",id:"example",level:3},{value:"Relative positioning",id:"relative-positioning",level:2},{value:"Fixed positioning",id:"fixed-positioning",level:2},{value:"Sticky positioning",id:"sticky-positioning",level:2}],a={toc:T};function o(M){let{components:i,...g}=M;return(0,j.kt)("wrapper",(0,I.Z)({},a,g,{components:i,mdxType:"MDXLayout"}),(0,j.kt)("p",null,"HTML documents are displayed on the page from top to bottom, so the elements that are described higher in the HTML file will be rendered in the browser earlier than those described lower."),(0,j.kt)("p",null,"The order in which the elements are displayed on a page by default is called ",(0,j.kt)("strong",{parentName:"p"},"normal flow"),". It corresponds to the value of the static ",(0,j.kt)("inlineCode",{parentName:"p"},"position")," property. Changing the values of that property will change the flow of the document, which is a process called ",(0,j.kt)("strong",{parentName:"p"},"positioning"),"."),(0,j.kt)("h2",{id:"absolute-positioning"},"Absolute positioning"),(0,j.kt)("p",null,"Absolute positioning refers to positioning relative to the bounds of the parent element, out of the normal flow. Here is the syntax:"),(0,j.kt)("pre",null,(0,j.kt)("code",{parentName:"pre",className:"language-css"},"element {\n  position: absolute;\n}\n")),(0,j.kt)("p",null,"If there is no parent element, then it is set relative to the bounds of the browser viewport. So, with absolute positioning, the browser window will act as a parent from whose borders the distance is set:"),(0,j.kt)("p",null,(0,j.kt)("img",{alt:"absolute-positioning",src:N(7578).Z,width:"1474",height:"830"})),(0,j.kt)("p",null,"Of course, it can also be set from the border of a parent element that has any position other than static:"),(0,j.kt)("p",null,(0,j.kt)("img",{alt:"absolute-positioning2",src:N(3262).Z,width:"1474",height:"830"})),(0,j.kt)("h3",{id:"example"},"Example"),(0,j.kt)("p",null,"In the picture below, four blue blocks are positioned in the normal flow, that is, their position is set to static by default:"),(0,j.kt)("p",null,(0,j.kt)("img",{alt:"absolute-positioning3",src:N(3879).Z,width:"1474",height:"1471"})),(0,j.kt)("p",null,"If we change the positioning of the element 2 to absolute, it will instead look like this:"),(0,j.kt)("p",null,(0,j.kt)("img",{alt:"absolute-positioning4",src:N(3984).Z,width:"1474",height:"1471"})),(0,j.kt)("p",null,"The elements in the normal flow neatly follow each other and occupy their space on the page. Absolute positioning basically pulls the element out of the normal flow and, as it happened in our example, lifts it up. Element 2 rises to the absolute level, and since it is not on the plane between the elements 1 and 3, they shift towards each other."),(0,j.kt)("p",null,(0,j.kt)("img",{alt:"absolute-positioning5",src:N(7849).Z,width:"1474",height:"1844"})),(0,j.kt)("p",null,"So, the absolute plane lies on top of the static plane, which gives the blending effect like in the above example."),(0,j.kt)("p",null,"In most cases, absolutely positioned elements have auto width and height sized to match their content. They can also be stretched to their full width or height if you don't set the element size manually, that is, if you leave it as auto.\nTo do this, you need to set the ",(0,j.kt)("inlineCode",{parentName:"p"},"top")," and ",(0,j.kt)("inlineCode",{parentName:"p"},"bottom")," or ",(0,j.kt)("inlineCode",{parentName:"p"},"left")," and ",(0,j.kt)("inlineCode",{parentName:"p"},"right")," properties to ",(0,j.kt)("inlineCode",{parentName:"p"},"0"),". This can come in handy, for example, to fill the entire height of the container:"),(0,j.kt)("pre",null,(0,j.kt)("code",{parentName:"pre",className:"language-css"},".parent {\n  position: relative;\n}\n\n.child {\n  position: absolute;\n  width: 50px;\n  background-color: rgb(250, 135, 135);\n  top: 0;\n  bottom: 0;\n}\n")),(0,j.kt)("p",null,(0,j.kt)("img",{alt:"absolute-positioning6",src:N(8010).Z,width:"1474",height:"1471"})),(0,j.kt)("p",null,"Filling the width works in a similar way:"),(0,j.kt)("pre",null,(0,j.kt)("code",{parentName:"pre",className:"language-css"},".child {\n position: absolute;\n height: 50px;\n background-color: rgb(250, 135, 135);\n left: 0;\n right: 0;\n}\n")),(0,j.kt)("p",null,(0,j.kt)("img",{alt:"absolute-positioning7",src:N(4757).Z,width:"1474",height:"1471"})),(0,j.kt)("p",null,"Having the ",(0,j.kt)("inlineCode",{parentName:"p"},"position: relative")," in the parent class, makes the child class position itself relative to the parent."),(0,j.kt)("h2",{id:"relative-positioning"},"Relative positioning"),(0,j.kt)("p",null,"A relatively positioned element is set relative to its original position on the page. Take a look at the syntax:"),(0,j.kt)("pre",null,(0,j.kt)("code",{parentName:"pre",className:"language-css"},"element {\n  position: relative;\n}\n")),(0,j.kt)("p",null,"Let's visualize it and consider an example. Here are four relatively positioned blocks:"),(0,j.kt)("p",null,(0,j.kt)("img",{alt:"relative-positioning",src:N(8989).Z,width:"1474",height:"1543"})),(0,j.kt)("p",null,"Now, we'll move the even-numbered blocks to the right and the odd-numbered ones to the left by 50px:"),(0,j.kt)("p",null,(0,j.kt)("img",{alt:"relative-positioning2",src:N(2132).Z,width:"1474",height:"1543"})),(0,j.kt)("p",null,"The blocks have shifted from the center to the left and right. But relatively positioned elements have a peculiarity that distinguishes them from absolutely positioned elements. To see it, let's consider the same four blocks, but this time, only block 3 will be ",(0,j.kt)("inlineCode",{parentName:"p"},"position: relative"),", and the rest will remain in the normal flow. To make the example a little clearer, let's move that block up a little:"),(0,j.kt)("p",null,(0,j.kt)("img",{alt:"relative-positioning3",src:N(8886).Z,width:"1474",height:"1543"})),(0,j.kt)("p",null,"Block 3, as expected, moved up by the distance that was indicated, but pay attention to the empty space where the third element had been earlier. The difference with relative positioning is the fact that the block exists on the page materially (the display of other elements around this block is calculated based on the space it occupies), but it still rises to a higher plane as an absolutely positioned element would. This way, block 3 overlapped with block 2, and block 4 stayed in place and did not move up."),(0,j.kt)("p",null,"This behavior allows you to move page elements anywhere without breaking the layout of the site because the occupied space remains duly occupied."),(0,j.kt)("h2",{id:"fixed-positioning"},"Fixed positioning"),(0,j.kt)("p",null,"Fixed positioning is similar to absolute positioning, but it locks the element on the page relative to the visible part of the browser's viewport and maintains that position during vertical scrolling."),(0,j.kt)("pre",null,(0,j.kt)("code",{parentName:"pre",className:"language-css",metastring:"{5}","{5}":!0},".header {\n  background-color: rgba(255, 255, 255, .8);\n  text-align: center;\n  text-transform: uppercase;\n  position: fixed;\n  width: 250px;\n}\n")),(0,j.kt)("pre",null,(0,j.kt)("code",{parentName:"pre",className:"language-html"},'<div class="body">\n     <header class="header">\n       <h2>Kitty</h2>\n     </header>\n     <div class="content">\n       <img src="image_dfdvcix.jpeg" alt="">\n       <img src="image_dsfsvcv.jpeg" alt="">\n       <img src="image_ioeriou.jpeg" alt="">\n     </div>\n</div>\n')),(0,j.kt)("p",null,"Here is what the result looks like:"),(0,j.kt)("p",null,(0,j.kt)("img",{alt:"kitty",src:N(5660).Z,width:"1474",height:"2054"})),(0,j.kt)("p",null,"The title stays in place as the page scrolls with the images. Fixed positioning is often used for subheadings, menu buttons, content logos, back to top buttons, and so on."),(0,j.kt)("h2",{id:"sticky-positioning"},"Sticky positioning"),(0,j.kt)("p",null,"Sticky positioning is between relative and fixed positioning. The element is positioned relatively until the page is scrolled to a certain point, after which the positioning will be fixed."),(0,j.kt)("pre",null,(0,j.kt)("code",{parentName:"pre",className:"language-css",metastring:"{2}","{2}":!0},".sticky {\n   position: sticky;\n   top: 10px;\n   width: 50px;\n   height: 50px;\n   margin-bottom: 150px;\n   background-color: rgb(255, 255, 255);\n   border: 1px solid black;\n}\n")),(0,j.kt)("pre",null,(0,j.kt)("code",{parentName:"pre",className:"language-html"},' <div class="parent">\n   <div class="sticky">1</div>\n   <div class="sticky">2</div>\n   <div class="sticky">3</div>\n   <div class="sticky">4</div>\n </div>\n')),(0,j.kt)("p",null,"Note that in order for this type of positioning to work, you need to specify the limit point. The blocks will stop at this limit point, which in our case is the top property, ",(0,j.kt)("inlineCode",{parentName:"p"},"10px"),". When you're scrolling the page and reach that point, the elements will stack one on top of the other as shown in the animation below:"),(0,j.kt)("p",null,(0,j.kt)("img",{alt:"box1",src:N(9281).Z,width:"1474",height:"1729"})),(0,j.kt)("p",null,"If the top property is removed, the positioning will be similar to relative:"),(0,j.kt)("p",null,(0,j.kt)("img",{alt:"box2",src:N(198).Z,width:"1474",height:"1729"})))}o.isMDXComponent=!0},7578:(M,i,N)=>{N.d(i,{Z:()=>I});const I=N.p+"assets/images/absolute-positioning-5d3883fafa679903859b595f313e0989.svg"},3262:(M,i,N)=>{N.d(i,{Z:()=>I});const I=N.p+"assets/images/absolute-positioning2-e030a01e719925d72766aa27c3ab4ed8.svg"},3879:(M,i,N)=>{N.d(i,{Z:()=>I});const I="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ3NCIgaGVpZ2h0PSIxNDcxIiB2aWV3Qm94PSIwIDAgMTQ3NCAxNDcxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfOTQzXzczMikiPgo8cmVjdCB3aWR0aD0iMTQ3NCIgaGVpZ2h0PSIxNDcxIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIyNSIgeT0iMjUiIHdpZHRoPSIxNDIwIiBoZWlnaHQ9IjE0MjAiIGZpbGw9IndoaXRlIiBzdHJva2U9IiMwMDdCRkYiIHN0cm9rZS13aWR0aD0iOCIvPgo8cmVjdCB4PSI2OCIgeT0iNjgiIHdpZHRoPSIyNzkiIGhlaWdodD0iMjc5IiBmaWxsPSIjMDA3QkZGIiBzdHJva2U9IiMyNzQ4NjciIHN0cm9rZS13aWR0aD0iNCIvPgo8cGF0aCBkPSJNMTA3LjY2NSAxODRIMTU4LjkwNVYxNzEuNzZIMTQxLjAyNVYxMDBIMTI0LjM0NUwxMDcuNTQ1IDExMS41MlYxMjUuNTZMMTI0LjIyNSAxMTQuMjhIMTI3LjEwNVYxNzEuNzZIMTA3LjY2NVYxODRaIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSI2OCIgeT0iNDIwIiB3aWR0aD0iMjc5IiBoZWlnaHQ9IjI3OSIgZmlsbD0iIzAwN0JGRiIgc3Ryb2tlPSIjMjc0ODY3IiBzdHJva2Utd2lkdGg9IjQiLz4KPHBhdGggZD0iTTExNi4zNTYgNDc2LjI0QzExNy4zMTYgNDY3IDEyMy4zMTYgNDYyLjggMTMxLjQ3NiA0NjIuOEMxNDAuMTE2IDQ2Mi44IDE0NS45OTYgNDY3LjQ4IDE0NS45OTYgNDc2LjcyQzE0NS45OTYgNDg1LjYgMTM4LjkxNiA0OTIuMzIgMTMyLjY3NiA0OTcuMjRMMTAyLjU1NiA1MjFWNTM2SDE2Mi40MzZWNTIzLjc2SDEyMy41NTZWNTIwLjg4TDE0Mi45OTYgNTA1LjE2QzE1Mi41OTYgNDk3LjQ4IDE2MC4wMzYgNDg4IDE2MC4wMzYgNDc2LjZDMTYwLjAzNiA0NTkuNDQgMTQ4LjE1NiA0NTAuMzIgMTMxLjgzNiA0NTAuMzJDMTE1LjE1NiA0NTAuMzIgMTAzLjM5NiA0NTguOTYgMTAyLjQzNiA0NzYuMjRIMTE2LjM1NloiIGZpbGw9IndoaXRlIi8+CjxyZWN0IHg9IjY4IiB5PSI3NzIiIHdpZHRoPSIyNzkiIGhlaWdodD0iMjc5IiBmaWxsPSIjMDA3QkZGIiBzdHJva2U9IiMyNzQ4NjciIHN0cm9rZS13aWR0aD0iNCIvPgo8cGF0aCBkPSJNMTA1LjkwNSA4MDRWODE1Ljg4SDE0MS41NDVWODE4Ljc2TDEyMy40MjUgODMzLjUyVjg0Ni4yNEMxMjUuNDY1IDg0NS43NiAxMjcuOTg1IDg0NS41MiAxMzAuOTg1IDg0NS41MkMxNDEuOTA1IDg0NS41MiAxNDcuNzg1IDg1MS43NiAxNDcuNzg1IDg2MS4zNkMxNDcuNzg1IDg3MS4wOCAxNDEuMzA1IDg3Ny4wOCAxMzAuODY1IDg3Ny4wOEMxMjEuODY1IDg3Ny4wOCAxMTUuMDI1IDg3Mi4wNCAxMTQuMTg1IDg2My40SDEwMC4xNDVDMTAwLjc0NSA4NzguMjggMTEyLjg2NSA4ODkuNTYgMTMwLjg2NSA4ODkuNTZDMTQ4Ljg2NSA4ODkuNTYgMTYxLjcwNSA4NzkgMTYxLjcwNSA4NjEuMzZDMTYxLjcwNSA4NDUuNzYgMTUxLjg2NSA4MzcuMTIgMTM5LjI2NSA4MzYuNTJWODMzLjUyTDE1Ny41MDUgODE4Ljc2VjgwNEgxMDUuOTA1WiIgZmlsbD0id2hpdGUiLz4KPHJlY3QgeD0iNjgiIHk9IjExMjQiIHdpZHRoPSIyNzkiIGhlaWdodD0iMjc5IiBmaWxsPSIjMDA3QkZGIiBzdHJva2U9IiMyNzQ4NjciIHN0cm9rZS13aWR0aD0iNCIvPgo8cGF0aCBkPSJNMTUzLjQxNyAxMjA4LjkyVjExNTZIMTM2LjAxN0w5OS4wNTcyIDEyMDYuMDRWMTIyMS4xNkgxMzkuODU3VjEyNDBIMTUzLjQxN1YxMjIxLjE2SDE2NC4zMzdWMTIwOC45MkgxNTMuNDE3Wk0xMTIuODU3IDEyMDguOTJWMTIwNi4wNEwxMzcuMzM3IDExNzEuODRIMTQwLjIxN1YxMjA4LjkySDExMi44NTdaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzk0M183MzIiPgo8cmVjdCB3aWR0aD0iMTQ3NCIgaGVpZ2h0PSIxNDcxIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="},3984:(M,i,N)=>{N.d(i,{Z:()=>I});const I="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ3NCIgaGVpZ2h0PSIxNDcxIiB2aWV3Qm94PSIwIDAgMTQ3NCAxNDcxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfOTQzXzcxOCkiPgo8cmVjdCB3aWR0aD0iMTQ3NCIgaGVpZ2h0PSIxNDcxIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIyNSIgeT0iMjUiIHdpZHRoPSIxNDIwIiBoZWlnaHQ9IjE0MjAiIGZpbGw9IndoaXRlIiBzdHJva2U9IiMwMDdCRkYiIHN0cm9rZS13aWR0aD0iOCIvPgo8cmVjdCB4PSI2OCIgeT0iNjgiIHdpZHRoPSIyNzkiIGhlaWdodD0iMjc5IiBmaWxsPSIjMDA3QkZGIiBzdHJva2U9IiMyNzQ4NjciIHN0cm9rZS13aWR0aD0iNCIvPgo8cGF0aCBkPSJNMTA3LjY2NSAxODRIMTU4LjkwNVYxNzEuNzZIMTQxLjAyNVYxMDBIMTI0LjM0NUwxMDcuNTQ1IDExMS41MlYxMjUuNTZMMTI0LjIyNSAxMTQuMjhIMTI3LjEwNVYxNzEuNzZIMTA3LjY2NVYxODRaIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSI2OCIgeT0iMzk3IiB3aWR0aD0iMjc5IiBoZWlnaHQ9IjMyOCIgZmlsbD0iIzAwN0JGRiIgc3Ryb2tlPSIjMjc0ODY3IiBzdHJva2Utd2lkdGg9IjQiLz4KPHBhdGggZD0iTTExNi4zNTYgNTAyLjI0QzExNy4zMTYgNDkzIDEyMy4zMTYgNDg4LjggMTMxLjQ3NiA0ODguOEMxNDAuMTE2IDQ4OC44IDE0NS45OTYgNDkzLjQ4IDE0NS45OTYgNTAyLjcyQzE0NS45OTYgNTExLjYgMTM4LjkxNiA1MTguMzIgMTMyLjY3NiA1MjMuMjRMMTAyLjU1NiA1NDdWNTYySDE2Mi40MzZWNTQ5Ljc2SDEyMy41NTZWNTQ2Ljg4TDE0Mi45OTYgNTMxLjE2QzE1Mi41OTYgNTIzLjQ4IDE2MC4wMzYgNTE0IDE2MC4wMzYgNTAyLjZDMTYwLjAzNiA0ODUuNDQgMTQ4LjE1NiA0NzYuMzIgMTMxLjgzNiA0NzYuMzJDMTE1LjE1NiA0NzYuMzIgMTAzLjM5NiA0ODQuOTYgMTAyLjQzNiA1MDIuMjRIMTE2LjM1NloiIGZpbGw9IndoaXRlIi8+CjxyZWN0IHg9IjY4IiB5PSI3MjkiIHdpZHRoPSIyNzkiIGhlaWdodD0iMjc5IiBmaWxsPSIjMDA3QkZGIiBzdHJva2U9IiMyNzQ4NjciIHN0cm9rZS13aWR0aD0iNCIvPgo8cGF0aCBkPSJNMTUzLjQxNyA4MTMuOTJWNzYxSDEzNi4wMTdMOTkuMDU3MiA4MTEuMDRWODI2LjE2SDEzOS44NTdWODQ1SDE1My40MTdWODI2LjE2SDE2NC4zMzdWODEzLjkySDE1My40MTdaTTExMi44NTcgODEzLjkyVjgxMS4wNEwxMzcuMzM3IDc3Ni44NEgxNDAuMjE3VjgxMy45MkgxMTIuODU3WiIgZmlsbD0id2hpdGUiLz4KPGxpbmUgeDE9IjY3IiB5MT0iNDMzIiB4Mj0iMzQ5IiB5Mj0iNDMzIiBzdHJva2U9IiMyNzQ4NjciIHN0cm9rZS13aWR0aD0iNCIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzk0M183MTgiPgo8cmVjdCB3aWR0aD0iMTQ3NCIgaGVpZ2h0PSIxNDcxIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="},7849:(M,i,N)=>{N.d(i,{Z:()=>I});const I="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ3NCIgaGVpZ2h0PSIxODQ0IiB2aWV3Qm94PSIwIDAgMTQ3NCAxODQ0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfOTQzXzcwMCkiPgo8cmVjdCB3aWR0aD0iMTQ3NCIgaGVpZ2h0PSIxODQ0IiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSI1NSIgeT0iMjEyIiB3aWR0aD0iNTg2IiBoZWlnaHQ9IjE1ODAiIHN0cm9rZT0iIzAwN0JGRiIgc3Ryb2tlLXdpZHRoPSI4Ii8+CjxyZWN0IHg9Ijg0MSIgeT0iMjEyIiB3aWR0aD0iNTg2IiBoZWlnaHQ9IjE1ODAiIHN0cm9rZT0iIzAwN0JGRiIgc3Ryb2tlLXdpZHRoPSI4Ii8+CjxyZWN0IHg9IjU2OCIgeT0iMjg0IiB3aWR0aD0iNDI2IiBoZWlnaHQ9IjQ0MCIgdHJhbnNmb3JtPSJyb3RhdGUoOTAgNTY4IDI4NCkiIGZpbGw9IiMwMDdCRkYiLz4KPHJlY3QgeD0iNTY4IiB5PSI3ODEiIHdpZHRoPSI0MjYiIGhlaWdodD0iNDQwIiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA1NjggNzgxKSIgZmlsbD0iIzAwN0JGRiIvPgo8cmVjdCB4PSIxMzU0IiB5PSI3ODEiIHdpZHRoPSI0MjYiIGhlaWdodD0iNDQwIiB0cmFuc2Zvcm09InJvdGF0ZSg5MCAxMzU0IDc4MSkiIGZpbGw9IiMwMDdCRkYiLz4KPHJlY3QgeD0iNTY4IiB5PSIxMjc4IiB3aWR0aD0iNDI2IiBoZWlnaHQ9IjQ0MCIgdHJhbnNmb3JtPSJyb3RhdGUoOTAgNTY4IDEyNzgpIiBmaWxsPSIjMDA3QkZGIi8+CjxwYXRoIGQ9Ik0yMDQuOTY1IDg5LjE4QzE5OC4zMzUgODguMTQgMTk1LjA4NSA4Ni4xOSAxOTUuMDg1IDgxLjEyQzE5NS4wODUgNzUuNTMgMjAwLjgwNSA3Mi40MSAyMDkuMjU1IDcyLjQxQzIxNy40NDUgNzIuNDEgMjIzLjY4NSA3NS4yNyAyMjQuNTk1IDgxLjUxSDIzNS42NDVDMjM0LjIxNSA3MC4wNyAyMjUuMjQ1IDYyLjc5IDIwOS43NzUgNjIuNzlDMTkyLjA5NSA2Mi43OSAxODMuOTA1IDcxLjI0IDE4My45MDUgODIuMTZDMTgzLjkwNSA5Mi4wNCAxOTAuMjc1IDk2Ljk4IDE5OS42MzUgOTguNjdMMjE0LjMyNSAxMDEuMTRDMjIyLjY0NSAxMDIuNTcgMjI2LjI4NSAxMDUuNjkgMjI2LjI4NSAxMTEuNDFDMjI2LjI4NSAxMTguNTYgMjE5Ljc4NSAxMjIuMDcgMjA5LjkwNSAxMjIuMDdDMjAwLjAyNSAxMjIuMDcgMTkzLjUyNSAxMTguNDMgMTkyLjQ4NSAxMTEuMDJIMTgxLjMwNUMxODIuNzM1IDEyMy41IDE5MS44MzUgMTMxLjY5IDIxMC40MjUgMTMxLjY5QzIyOC4xMDUgMTMxLjY5IDIzNy4zMzUgMTIxLjk0IDIzNy4zMzUgMTExLjE1QzIzNy4zMzUgOTkuMTkgMjMwLjA1NSA5My4zNCAyMTguNjE1IDkxLjM5TDIxMS4yMDUgOTAuMjJMMjA0Ljk2NSA4OS4xOFpNMjY4Ljc1MyA2NC40OFY0NC43MkgyNTcuNzAzVjY0LjQ4SDI0Ni4zOTNWNzQuMUgyNTcuNzAzVjExMS42N0MyNTcuNzAzIDEyNS41OCAyNjYuMDIzIDEzMCAyODAuMTkzIDEzMEgyODUuMjYzVjEyMC4xMkgyODAuNDUzQzI3MS42MTMgMTIwLjEyIDI2OC43NTMgMTE2Ljc0IDI2OC43NTMgMTEwLjExVjc0LjFIMjg1LjI2M1Y2NC40OEgyNjguNzUzWk0zNDUuMTY1IDEzMEgzNTUuNTY1Vjg1LjQxQzM1NS41NjUgNzAuNzIgMzQ1LjAzNSA2Mi43OSAzMjguNTI1IDYyLjc5QzMxMy44MzUgNjIuNzkgMzAzLjQzNSA2OS44MSAzMDIuNTI1IDgxLjlIMzEzLjU3NUMzMTQuMDk1IDc2LjE4IDMxOS4wMzUgNzIuNDEgMzI4Ljc4NSA3Mi40MUMzNDAuMjI1IDcyLjQxIDM0NC43NzUgNzguMTMgMzQ0Ljc3NSA4Ni4wNlY4OC42NkgzMjMuNDU1QzMwNS4yNTUgODguNjYgMjk4LjM2NSA5OS44NCAyOTguMzY1IDExMC4zN0MyOTguMzY1IDEyMS41NSAzMDYuODE1IDEzMS42OSAzMjEuODk1IDEzMS42OUMzMzEuMjU1IDEzMS42OSAzMzguMjc1IDEyOC4xOCAzNDIuMzA1IDEyMy4xMUgzNDUuMTY1VjEzMFpNMzI0LjYyNSAxMjIuMDdDMzE0Ljg3NSAxMjIuMDcgMzA5LjQxNSAxMTcuMzkgMzA5LjQxNSAxMDkuOThDMzA5LjQxNSAxMDIuMTggMzE0LjM1NSA5Ny41IDMyNS4xNDUgOTcuNUgzNDQuNzc1VjEwMy40OEMzNDQuNzc1IDExMy44OCAzMzUuNTQ1IDEyMi4wNyAzMjQuNjI1IDEyMi4wN1pNMzkxLjAwOSA2NC40OFY0NC43MkgzNzkuOTU5VjY0LjQ4SDM2OC42NDlWNzQuMUgzNzkuOTU5VjExMS42N0MzNzkuOTU5IDEyNS41OCAzODguMjc5IDEzMCA0MDIuNDQ5IDEzMEg0MDcuNTE5VjEyMC4xMkg0MDIuNzA5QzM5My44NjkgMTIwLjEyIDM5MS4wMDkgMTE2Ljc0IDM5MS4wMDkgMTEwLjExVjc0LjFINDA3LjUxOVY2NC40OEgzOTEuMDA5Wk00MzcuMzkxIDQ3LjQ1VjM1LjQ5SDQyNS42OTFWNDcuNDVINDM3LjM5MVpNNDM3LjAwMSA2NC40OEg0MjUuOTUxVjEzMEg0MzcuMDAxVjY0LjQ4Wk01MDMuMDI5IDExMC4yNEM1MDEuMzM5IDExNy41MiA0OTUuODc5IDEyMi4wNyA0ODYuNTE5IDEyMi4wN0M0NzEuODI5IDEyMi4wNyA0NjUuNzE5IDExMC4xMSA0NjUuNzE5IDk2Ljk4QzQ2NS43MTkgODMuOTggNDcxLjY5OSA3Mi40MSA0ODYuNTE5IDcyLjQxQzQ5NS40ODkgNzIuNDEgNTAwLjU1OSA3Ni44MyA1MDIuNjM5IDgzLjQ2SDUxMy42ODlDNTExLjQ3OSA3MS4zNyA1MDIuMTE5IDYyLjc5IDQ4Ni41MTkgNjIuNzlDNDY2LjEwOSA2Mi43OSA0NTQuNjY5IDc3LjQ4IDQ1NC42NjkgOTcuMjRDNDU0LjY2OSAxMTYuNjEgNDY2LjEwOSAxMzEuNjkgNDg2LjUxOSAxMzEuNjlDNTAxLjcyOSAxMzEuNjkgNTExLjYwOSAxMjMuMTEgNTE0LjA3OSAxMTAuMjRINTAzLjAyOVoiIGZpbGw9IiMyNzQ4NjciLz4KPHBhdGggZD0iTTkyMC42MjEgMTMwSDkzMS4wMjFWODUuNDFDOTMxLjAyMSA3MC43MiA5MjAuNDkxIDYyLjc5IDkwMy45ODEgNjIuNzlDODg5LjI5MSA2Mi43OSA4NzguODkxIDY5LjgxIDg3Ny45ODEgODEuOUg4ODkuMDMxQzg4OS41NTEgNzYuMTggODk0LjQ5MSA3Mi40MSA5MDQuMjQxIDcyLjQxQzkxNS42ODEgNzIuNDEgOTIwLjIzMSA3OC4xMyA5MjAuMjMxIDg2LjA2Vjg4LjY2SDg5OC45MTFDODgwLjcxMSA4OC42NiA4NzMuODIxIDk5Ljg0IDg3My44MjEgMTEwLjM3Qzg3My44MjEgMTIxLjU1IDg4Mi4yNzEgMTMxLjY5IDg5Ny4zNTEgMTMxLjY5QzkwNi43MTEgMTMxLjY5IDkxMy43MzEgMTI4LjE4IDkxNy43NjEgMTIzLjExSDkyMC42MjFWMTMwWk05MDAuMDgxIDEyMi4wN0M4OTAuMzMxIDEyMi4wNyA4ODQuODcxIDExNy4zOSA4ODQuODcxIDEwOS45OEM4ODQuODcxIDEwMi4xOCA4ODkuODExIDk3LjUgOTAwLjYwMSA5Ny41SDkyMC4yMzFWMTAzLjQ4QzkyMC4yMzEgMTEzLjg4IDkxMS4wMDEgMTIyLjA3IDkwMC4wODEgMTIyLjA3Wk05ODUuMTg1IDYyLjc5Qzk3NC43ODUgNjIuNzkgOTY4LjY3NSA2Ni44MiA5NjUuMTY1IDcxLjVIOTYyLjMwNVYzNS40OUg5NTEuMjU1VjEzMEg5NjEuOTE1VjEyMi45OEg5NjQuNzc1Qzk2OC40MTUgMTI3LjUzIDk3NC43ODUgMTMxLjY5IDk4NS4xODUgMTMxLjY5QzEwMDMuMjUgMTMxLjY5IDEwMTMuOTEgMTE2LjYxIDEwMTMuOTEgOTcuMjRDMTAxMy45MSA3Ny40OCAxMDAzLjI1IDYyLjc5IDk4NS4xODUgNjIuNzlaTTk4Mi43MTUgMTIyLjA3Qzk2OC4xNTUgMTIyLjA3IDk2Mi4xNzUgMTEwLjExIDk2Mi4xNzUgOTcuMjRDOTYyLjE3NSA4NC4zNyA5NjguMTU1IDcyLjQxIDk4Mi43MTUgNzIuNDFDOTk1Ljg0NSA3Mi40MSAxMDAyLjg2IDgyLjY4IDEwMDIuODYgOTcuMjRDMTAwMi44NiAxMTEuOCA5OTUuODQ1IDEyMi4wNyA5ODIuNzE1IDEyMi4wN1pNMTA0OS40NCA4OS4xOEMxMDQyLjgxIDg4LjE0IDEwMzkuNTYgODYuMTkgMTAzOS41NiA4MS4xMkMxMDM5LjU2IDc1LjUzIDEwNDUuMjggNzIuNDEgMTA1My43MyA3Mi40MUMxMDYxLjkyIDcyLjQxIDEwNjguMTYgNzUuMjcgMTA2OS4wNyA4MS41MUgxMDgwLjEyQzEwNzguNjkgNzAuMDcgMTA2OS43MiA2Mi43OSAxMDU0LjI1IDYyLjc5QzEwMzYuNTcgNjIuNzkgMTAyOC4zOCA3MS4yNCAxMDI4LjM4IDgyLjE2QzEwMjguMzggOTIuMDQgMTAzNC43NSA5Ni45OCAxMDQ0LjExIDk4LjY3TDEwNTguOCAxMDEuMTRDMTA2Ny4xMiAxMDIuNTcgMTA3MC43NiAxMDUuNjkgMTA3MC43NiAxMTEuNDFDMTA3MC43NiAxMTguNTYgMTA2NC4yNiAxMjIuMDcgMTA1NC4zOCAxMjIuMDdDMTA0NC41IDEyMi4wNyAxMDM4IDExOC40MyAxMDM2Ljk2IDExMS4wMkgxMDI1Ljc4QzEwMjcuMjEgMTIzLjUgMTAzNi4zMSAxMzEuNjkgMTA1NC45IDEzMS42OUMxMDcyLjU4IDEzMS42OSAxMDgxLjgxIDEyMS45NCAxMDgxLjgxIDExMS4xNUMxMDgxLjgxIDk5LjE5IDEwNzQuNTMgOTMuMzQgMTA2My4wOSA5MS4zOUwxMDU1LjY4IDkwLjIyTDEwNDkuNDQgODkuMThaTTExMjYuMjIgNjIuNzlDMTEwNS42OCA2Mi43OSAxMDkzLjk4IDc3Ljg3IDEwOTMuOTggOTcuMjRDMTA5My45OCAxMTYuNjEgMTEwNS42OCAxMzEuNjkgMTEyNi4yMiAxMzEuNjlDMTE0Ni42MyAxMzEuNjkgMTE1OC40NiAxMTYuNjEgMTE1OC40NiA5Ny4yNEMxMTU4LjQ2IDc3Ljg3IDExNDYuNjMgNjIuNzkgMTEyNi4yMiA2Mi43OVpNMTEyNi4yMiAxMjIuMDdDMTExMS42NiAxMjIuMDcgMTEwNS4wMyAxMTAuMTEgMTEwNS4wMyA5Ny4yNEMxMTA1LjAzIDg0LjM3IDExMTEuNjYgNzIuNDEgMTEyNi4yMiA3Mi40MUMxMTQwLjY1IDcyLjQxIDExNDcuNDEgODQuMzcgMTE0Ny40MSA5Ny4yNEMxMTQ3LjQxIDExMC4xMSAxMTQwLjY1IDEyMi4wNyAxMTI2LjIyIDEyMi4wN1pNMTE3NS43MSAzNS40OVYxMzBIMTE4Ni43NlYzNS40OUgxMTc1LjcxWk0xMjA3LjA0IDY0LjQ4VjEwNi4wOEMxMjA3LjA0IDEyMS44MSAxMjE1Ljg4IDEzMS42OSAxMjMyIDEzMS42OUMxMjQwLjg0IDEzMS42OSAxMjQ4LjEyIDEyOC4wNSAxMjUxLjc2IDEyMi45OEgxMjU0LjYyVjEzMEgxMjY1LjI4VjY0LjQ4SDEyNTQuMjNWOTkuOTdDMTI1NC4yMyAxMTEuOCAxMjQ2LjMgMTIxLjgxIDEyMzQuNzMgMTIxLjgxQzEyMjMuNjggMTIxLjgxIDEyMTguMDkgMTE1LjgzIDEyMTguMDkgMTAzLjc0VjY0LjQ4SDEyMDcuMDRaTTEzMDEuNzUgNjQuNDhWNDQuNzJIMTI5MC43VjY0LjQ4SDEyNzkuMzlWNzQuMUgxMjkwLjdWMTExLjY3QzEyOTAuNyAxMjUuNTggMTI5OS4wMiAxMzAgMTMxMy4xOSAxMzBIMTMxOC4yNlYxMjAuMTJIMTMxMy40NUMxMzA0LjYxIDEyMC4xMiAxMzAxLjc1IDExNi43NCAxMzAxLjc1IDExMC4xMVY3NC4xSDEzMTguMjZWNjQuNDhIMTMwMS43NVpNMTM5Mi4yMiA5My4zNEMxMzkxLjgzIDc3LjIyIDEzODIuNDcgNjIuNzkgMTM2Mi45NyA2Mi43OUMxMzQzLjA4IDYyLjc5IDEzMzEuMzggNzYuNDQgMTMzMS4zOCA5Ni41OUMxMzMxLjM4IDExNi43NCAxMzQyLjgyIDEzMS42OSAxMzYzLjIzIDEzMS42OUMxMzc5LjQ4IDEzMS42OSAxMzg4Ljk3IDEyMy4xMSAxMzkxLjA1IDExMS45M0gxMzc5Ljg3QzEzNzcuOTIgMTE4LjE3IDEzNzIuNDYgMTIyLjA3IDEzNjMuMjMgMTIyLjA3QzEzNDkuNzEgMTIyLjA3IDEzNDIuNjkgMTEyLjcxIDEzNDIuMyA5Ny4xMUgxMzkyLjIyVjkzLjM0Wk0xMzYyLjcxIDcyLjQxQzEzNzMuNzYgNzIuNDEgMTM4MC4xMyA3OS41NiAxMzgwLjc4IDg3Ljg4SDEzNDIuOTVDMTM0NC4zOCA3OS41NiAxMzUwLjg4IDcyLjQxIDEzNjIuNzEgNzIuNDFaIiBmaWxsPSIjMjc0ODY3Ii8+CjxwYXRoIGQ9Ik0xODUuMDU0IDU1NkgyNTMuMzc0VjUzOS42OEgyMjkuNTM0VjQ0NEgyMDcuMjk0TDE4NC44OTQgNDU5LjM2VjQ3OC4wOEwyMDcuMTM0IDQ2My4wNEgyMTAuOTc0VjUzOS42OEgxODUuMDU0VjU1NloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xODIuMjA3IDk0MVY5NTYuODRIMjI5LjcyN1Y5NjAuNjhMMjA1LjU2NyA5ODAuMzZWOTk3LjMyQzIwOC4yODcgOTk2LjY4IDIxMS42NDcgOTk2LjM2IDIxNS42NDcgOTk2LjM2QzIzMC4yMDcgOTk2LjM2IDIzOC4wNDcgMTAwNC42OCAyMzguMDQ3IDEwMTcuNDhDMjM4LjA0NyAxMDMwLjQ0IDIyOS40MDcgMTAzOC40NCAyMTUuNDg3IDEwMzguNDRDMjAzLjQ4NyAxMDM4LjQ0IDE5NC4zNjcgMTAzMS43MiAxOTMuMjQ3IDEwMjAuMkgxNzQuNTI3QzE3NS4zMjcgMTA0MC4wNCAxOTEuNDg3IDEwNTUuMDggMjE1LjQ4NyAxMDU1LjA4QzIzOS40ODcgMTA1NS4wOCAyNTYuNjA3IDEwNDEgMjU2LjYwNyAxMDE3LjQ4QzI1Ni42MDcgOTk2LjY4IDI0My40ODcgOTg1LjE2IDIyNi42ODcgOTg0LjM2Vjk4MC4zNkwyNTEuMDA3IDk2MC42OFY5NDFIMTgyLjIwN1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik05ODAuMTQyIDk3My4zMkM5ODEuNDIyIDk2MSA5ODkuNDIyIDk1NS40IDEwMDAuMyA5NTUuNEMxMDExLjgyIDk1NS40IDEwMTkuNjYgOTYxLjY0IDEwMTkuNjYgOTczLjk2QzEwMTkuNjYgOTg1LjggMTAxMC4yMiA5OTQuNzYgMTAwMS45IDEwMDEuMzJMOTYxLjc0MiAxMDMzVjEwNTNIMTA0MS41OFYxMDM2LjY4SDk4OS43NDJWMTAzMi44NEwxMDE1LjY2IDEwMTEuODhDMTAyOC40NiAxMDAxLjY0IDEwMzguMzggOTg5IDEwMzguMzggOTczLjhDMTAzOC4zOCA5NTAuOTIgMTAyMi41NCA5MzguNzYgMTAwMC43OCA5MzguNzZDOTc4LjU0MiA5MzguNzYgOTYyLjg2MiA5NTAuMjggOTYxLjU4MiA5NzMuMzJIOTgwLjE0MloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yNTEuNTU2IDE1MDguNTZWMTQzOEgyMjguMzU2TDE3OS4wNzYgMTUwNC43MlYxNTI0Ljg4SDIzMy40NzZWMTU1MEgyNTEuNTU2VjE1MjQuODhIMjY2LjExNlYxNTA4LjU2SDI1MS41NTZaTTE5Ny40NzYgMTUwOC41NlYxNTA0LjcyTDIzMC4xMTYgMTQ1OS4xMkgyMzMuOTU2VjE1MDguNTZIMTk3LjQ3NloiIGZpbGw9IndoaXRlIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfOTQzXzcwMCI+CjxyZWN0IHdpZHRoPSIxNDc0IiBoZWlnaHQ9IjE4NDQiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="},8010:(M,i,N)=>{N.d(i,{Z:()=>I});const I="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ3NCIgaGVpZ2h0PSIxNDcxIiB2aWV3Qm94PSIwIDAgMTQ3NCAxNDcxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfOTQzXzY5NikiPgo8cmVjdCB3aWR0aD0iMTQ3NCIgaGVpZ2h0PSIxNDcxIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIyNSIgeT0iMjUiIHdpZHRoPSIxNDIwIiBoZWlnaHQ9IjE0MjAiIGZpbGw9IndoaXRlIiBzdHJva2U9IiMwMDdCRkYiIHN0cm9rZS13aWR0aD0iOCIvPgo8cmVjdCB4PSIzNzQiIHk9IjIxIiB3aWR0aD0iMTQyOCIgaGVpZ2h0PSIzNTMiIHRyYW5zZm9ybT0icm90YXRlKDkwIDM3NCAyMSkiIGZpbGw9IiMwMDdCRkYiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF85NDNfNjk2Ij4KPHJlY3Qgd2lkdGg9IjE0NzQiIGhlaWdodD0iMTQ3MSIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"},4757:(M,i,N)=>{N.d(i,{Z:()=>I});const I="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ3NCIgaGVpZ2h0PSIxNDcxIiB2aWV3Qm94PSIwIDAgMTQ3NCAxNDcxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfOTQzXzY4MCkiPgo8cmVjdCB3aWR0aD0iMTQ3NCIgaGVpZ2h0PSIxNDcxIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIyNSIgeT0iMjUiIHdpZHRoPSIxNDIwIiBoZWlnaHQ9IjE0MjAiIGZpbGw9IndoaXRlIiBzdHJva2U9IiMwMDdCRkYiIHN0cm9rZS13aWR0aD0iOCIvPgo8cmVjdCB4PSIyMSIgeT0iMjEiIHdpZHRoPSIxNDI4IiBoZWlnaHQ9IjM1MyIgZmlsbD0iIzAwN0JGRiIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzk0M182ODAiPgo8cmVjdCB3aWR0aD0iMTQ3NCIgaGVpZ2h0PSIxNDcxIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="},9281:(M,i,N)=>{N.d(i,{Z:()=>I});const I=N.p+"assets/images/box1-e11d5dfe5f0d2937752a3b981b76addc.gif"},198:(M,i,N)=>{N.d(i,{Z:()=>I});const I=N.p+"assets/images/box2-6e63710cffe5aee3764b4c923343d6a3.gif"},5660:(M,i,N)=>{N.d(i,{Z:()=>I});const I=N.p+"assets/images/kitty-64c56a3a897cdacacc7bc37428bebea0.gif"},8989:(M,i,N)=>{N.d(i,{Z:()=>I});const I="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ3NCIgaGVpZ2h0PSIxNTQzIiB2aWV3Qm94PSIwIDAgMTQ3NCAxNTQzIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfOTQzXzY1OSkiPgo8cmVjdCB3aWR0aD0iMTQ3NCIgaGVpZ2h0PSIxNTQzIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIyMSIgeT0iMjEiIHdpZHRoPSIxNDI4IiBoZWlnaHQ9IjE1MDAiIGZpbGw9IiNDQ0U1RkYiLz4KPHJlY3QgeD0iNTk1IiB5PSI4NyIgd2lkdGg9IjI4MyIgaGVpZ2h0PSIyODMiIGZpbGw9IiMwMDdCRkYiLz4KPHBhdGggZD0iTTYxNi42NjUgMjA1SDY2Ny45MDVWMTkyLjc2SDY1MC4wMjVWMTIxSDYzMy4zNDVMNjE2LjU0NSAxMzIuNTJWMTQ2LjU2TDYzMy4yMjUgMTM1LjI4SDYzNi4xMDVWMTkyLjc2SDYxNi42NjVWMjA1WiIgZmlsbD0id2hpdGUiLz4KPHJlY3QgeD0iNTk1IiB5PSI0NDkiIHdpZHRoPSIyODMiIGhlaWdodD0iMjgzIiBmaWxsPSIjMDA3QkZGIi8+CjxwYXRoIGQ9Ik02MjUuMzU2IDUwNy4yNEM2MjYuMzE2IDQ5OCA2MzIuMzE2IDQ5My44IDY0MC40NzYgNDkzLjhDNjQ5LjExNiA0OTMuOCA2NTQuOTk2IDQ5OC40OCA2NTQuOTk2IDUwNy43MkM2NTQuOTk2IDUxNi42IDY0Ny45MTYgNTIzLjMyIDY0MS42NzYgNTI4LjI0TDYxMS41NTYgNTUyVjU2N0g2NzEuNDM2VjU1NC43Nkg2MzIuNTU2VjU1MS44OEw2NTEuOTk2IDUzNi4xNkM2NjEuNTk2IDUyOC40OCA2NjkuMDM2IDUxOSA2NjkuMDM2IDUwNy42QzY2OS4wMzYgNDkwLjQ0IDY1Ny4xNTYgNDgxLjMyIDY0MC44MzYgNDgxLjMyQzYyNC4xNTYgNDgxLjMyIDYxMi4zOTYgNDg5Ljk2IDYxMS40MzYgNTA3LjI0SDYyNS4zNTZaIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSI1OTUiIHk9IjgxMSIgd2lkdGg9IjI4MyIgaGVpZ2h0PSIyODMiIGZpbGw9IiMwMDdCRkYiLz4KPHBhdGggZD0iTTYxNC45MDUgODQ1Vjg1Ni44OEg2NTAuNTQ1Vjg1OS43Nkw2MzIuNDI1IDg3NC41MlY4ODcuMjRDNjM0LjQ2NSA4ODYuNzYgNjM2Ljk4NSA4ODYuNTIgNjM5Ljk4NSA4ODYuNTJDNjUwLjkwNSA4ODYuNTIgNjU2Ljc4NSA4OTIuNzYgNjU2Ljc4NSA5MDIuMzZDNjU2Ljc4NSA5MTIuMDggNjUwLjMwNSA5MTguMDggNjM5Ljg2NSA5MTguMDhDNjMwLjg2NSA5MTguMDggNjI0LjAyNSA5MTMuMDQgNjIzLjE4NSA5MDQuNEg2MDkuMTQ1QzYwOS43NDUgOTE5LjI4IDYyMS44NjUgOTMwLjU2IDYzOS44NjUgOTMwLjU2QzY1Ny44NjUgOTMwLjU2IDY3MC43MDUgOTIwIDY3MC43MDUgOTAyLjM2QzY3MC43MDUgODg2Ljc2IDY2MC44NjUgODc4LjEyIDY0OC4yNjUgODc3LjUyVjg3NC41Mkw2NjYuNTA1IDg1OS43NlY4NDVINjE0LjkwNVoiIGZpbGw9IndoaXRlIi8+CjxyZWN0IHg9IjU5NSIgeT0iMTE3MyIgd2lkdGg9IjI4MyIgaGVpZ2h0PSIyODMiIGZpbGw9IiMwMDdCRkYiLz4KPHBhdGggZD0iTTY2Mi40MTcgMTI1OS45MlYxMjA3SDY0NS4wMTdMNjA4LjA1NyAxMjU3LjA0VjEyNzIuMTZINjQ4Ljg1N1YxMjkxSDY2Mi40MTdWMTI3Mi4xNkg2NzMuMzM3VjEyNTkuOTJINjYyLjQxN1pNNjIxLjg1NyAxMjU5LjkyVjEyNTcuMDRMNjQ2LjMzNyAxMjIyLjg0SDY0OS4yMTdWMTI1OS45Mkg2MjEuODU3WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF85NDNfNjU5Ij4KPHJlY3Qgd2lkdGg9IjE0NzQiIGhlaWdodD0iMTU0MyIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"},2132:(M,i,N)=>{N.d(i,{Z:()=>I});const I="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ3NCIgaGVpZ2h0PSIxNTQzIiB2aWV3Qm94PSIwIDAgMTQ3NCAxNTQzIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfOTQzXzY0NCkiPgo8cmVjdCB3aWR0aD0iMTQ3NCIgaGVpZ2h0PSIxNTQzIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIyMSIgeT0iMjEiIHdpZHRoPSIxNDI4IiBoZWlnaHQ9IjE1MDAiIGZpbGw9IiNDQ0U1RkYiLz4KPHJlY3QgeD0iMTI0IiB5PSI4NyIgd2lkdGg9IjI4MyIgaGVpZ2h0PSIyODMiIGZpbGw9IiMwMDdCRkYiLz4KPHJlY3QgeD0iMTI0IiB5PSI3NDgiIHdpZHRoPSIyODMiIGhlaWdodD0iMjgzIiBmaWxsPSIjMDA3QkZGIi8+CjxyZWN0IHg9IjEwNjMiIHk9IjUwOSIgd2lkdGg9IjI4MyIgaGVpZ2h0PSIyODMiIGZpbGw9IiMwMDdCRkYiLz4KPHJlY3QgeD0iMTA2MyIgeT0iMTE3MiIgd2lkdGg9IjI4MyIgaGVpZ2h0PSIyODMiIGZpbGw9IiMwMDdCRkYiLz4KPHBhdGggZD0iTTE0NS42NjUgMjA1SDE5Ni45MDVWMTkyLjc2SDE3OS4wMjVWMTIxSDE2Mi4zNDVMMTQ1LjU0NSAxMzIuNTJWMTQ2LjU2TDE2Mi4yMjUgMTM1LjI4SDE2NS4xMDVWMTkyLjc2SDE0NS42NjVWMjA1WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTE0My45MDUgNzgyVjc5My44OEgxNzkuNTQ1Vjc5Ni43NkwxNjEuNDI1IDgxMS41MlY4MjQuMjRDMTYzLjQ2NSA4MjMuNzYgMTY1Ljk4NSA4MjMuNTIgMTY4Ljk4NSA4MjMuNTJDMTc5LjkwNSA4MjMuNTIgMTg1Ljc4NSA4MjkuNzYgMTg1Ljc4NSA4MzkuMzZDMTg1Ljc4NSA4NDkuMDggMTc5LjMwNSA4NTUuMDggMTY4Ljg2NSA4NTUuMDhDMTU5Ljg2NSA4NTUuMDggMTUzLjAyNSA4NTAuMDQgMTUyLjE4NSA4NDEuNEgxMzguMTQ1QzEzOC43NDUgODU2LjI4IDE1MC44NjUgODY3LjU2IDE2OC44NjUgODY3LjU2QzE4Ni44NjUgODY3LjU2IDE5OS43MDUgODU3IDE5OS43MDUgODM5LjM2QzE5OS43MDUgODIzLjc2IDE4OS44NjUgODE1LjEyIDE3Ny4yNjUgODE0LjUyVjgxMS41MkwxOTUuNTA1IDc5Ni43NlY3ODJIMTQzLjkwNVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMDkzLjg2IDU2Ny4yNEMxMDk0LjgyIDU1OCAxMTAwLjgyIDU1My44IDExMDguOTggNTUzLjhDMTExNy42MiA1NTMuOCAxMTIzLjUgNTU4LjQ4IDExMjMuNSA1NjcuNzJDMTEyMy41IDU3Ni42IDExMTYuNDIgNTgzLjMyIDExMTAuMTggNTg4LjI0TDEwODAuMDYgNjEyVjYyN0gxMTM5Ljk0VjYxNC43NkgxMTAxLjA2VjYxMS44OEwxMTIwLjUgNTk2LjE2QzExMzAuMSA1ODguNDggMTEzNy41NCA1NzkgMTEzNy41NCA1NjcuNkMxMTM3LjU0IDU1MC40NCAxMTI1LjY2IDU0MS4zMiAxMTA5LjM0IDU0MS4zMkMxMDkyLjY2IDU0MS4zMiAxMDgwLjkgNTQ5Ljk2IDEwNzkuOTQgNTY3LjI0SDEwOTMuODZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTEzMC45MiAxMjU4LjkyVjEyMDZIMTExMy41MkwxMDc2LjU2IDEyNTYuMDRWMTI3MS4xNkgxMTE3LjM2VjEyOTBIMTEzMC45MlYxMjcxLjE2SDExNDEuODRWMTI1OC45MkgxMTMwLjkyWk0xMDkwLjM2IDEyNTguOTJWMTI1Ni4wNEwxMTE0Ljg0IDEyMjEuODRIMTExNy43MlYxMjU4LjkySDEwOTAuMzZaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzk0M182NDQiPgo8cmVjdCB3aWR0aD0iMTQ3NCIgaGVpZ2h0PSIxNTQzIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="},8886:(M,i,N)=>{N.d(i,{Z:()=>I});const I="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ3NCIgaGVpZ2h0PSIxNTQzIiB2aWV3Qm94PSIwIDAgMTQ3NCAxNTQzIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfOTQyXzU4NikiPgo8cmVjdCB3aWR0aD0iMTQ3NCIgaGVpZ2h0PSIxNTQzIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB4PSIyMSIgeT0iMjEiIHdpZHRoPSIxNDI4IiBoZWlnaHQ9IjE1MDAiIGZpbGw9IiNDQ0U1RkYiLz4KPHJlY3QgeD0iNTkzIiB5PSIxMzUiIHdpZHRoPSIyODQiIGhlaWdodD0iMjk4IiBmaWxsPSIjMDA3QkZGIi8+CjxyZWN0IHg9IjU5MyIgeT0iMTEyNSIgd2lkdGg9IjI4NCIgaGVpZ2h0PSIyOTgiIGZpbGw9IiMwMDdCRkYiLz4KPHJlY3QgeD0iNTkzIiB5PSI0NjUiIHdpZHRoPSIyODQiIGhlaWdodD0iNDMyIiBmaWxsPSIjMDA3QkZGIi8+CjxwYXRoIGQ9Ik02MTUuMTY1IDI1M0g2NjYuNDA1VjI0MC43Nkg2NDguNTI1VjE2OUg2MzEuODQ1TDYxNS4wNDUgMTgwLjUyVjE5NC41Nkw2MzEuNzI1IDE4My4yOEg2MzQuNjA1VjI0MC43Nkg2MTUuMTY1VjI1M1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik02NjYuOTE3IDEyMTEuOTJWMTE1OUg2NDkuNTE3TDYxMi41NTcgMTIwOS4wNFYxMjI0LjE2SDY1My4zNTdWMTI0M0g2NjYuOTE3VjEyMjQuMTZINjc3LjgzN1YxMjExLjkySDY2Ni45MTdaTTYyNi4zNTcgMTIxMS45MlYxMjA5LjA0TDY1MC44MzcgMTE3NC44NEg2NTMuNzE3VjEyMTEuOTJINjI2LjM1N1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik02MjguMzU2IDUyMS4yNEM2MjkuMzE2IDUxMiA2MzUuMzE2IDUwNy44IDY0My40NzYgNTA3LjhDNjUyLjExNiA1MDcuOCA2NTcuOTk2IDUxMi40OCA2NTcuOTk2IDUyMS43MkM2NTcuOTk2IDUzMC42IDY1MC45MTYgNTM3LjMyIDY0NC42NzYgNTQyLjI0TDYxNC41NTYgNTY2VjU4MUg2NzQuNDM2VjU2OC43Nkg2MzUuNTU2VjU2NS44OEw2NTQuOTk2IDU1MC4xNkM2NjQuNTk2IDU0Mi40OCA2NzIuMDM2IDUzMyA2NzIuMDM2IDUyMS42QzY3Mi4wMzYgNTA0LjQ0IDY2MC4xNTYgNDk1LjMyIDY0My44MzYgNDk1LjMyQzYyNy4xNTYgNDk1LjMyIDYxNS4zOTYgNTAzLjk2IDYxNC40MzYgNTIxLjI0SDYyOC4zNTZaTTYxNy45MDUgNjE5VjYzMC44OEg2NTMuNTQ1VjYzMy43Nkw2MzUuNDI1IDY0OC41MlY2NjEuMjRDNjM3LjQ2NSA2NjAuNzYgNjM5Ljk4NSA2NjAuNTIgNjQyLjk4NSA2NjAuNTJDNjUzLjkwNSA2NjAuNTIgNjU5Ljc4NSA2NjYuNzYgNjU5Ljc4NSA2NzYuMzZDNjU5Ljc4NSA2ODYuMDggNjUzLjMwNSA2OTIuMDggNjQyLjg2NSA2OTIuMDhDNjMzLjg2NSA2OTIuMDggNjI3LjAyNSA2ODcuMDQgNjI2LjE4NSA2NzguNEg2MTIuMTQ1QzYxMi43NDUgNjkzLjI4IDYyNC44NjUgNzA0LjU2IDY0Mi44NjUgNzA0LjU2QzY2MC44NjUgNzA0LjU2IDY3My43MDUgNjk0IDY3My43MDUgNjc2LjM2QzY3My43MDUgNjYwLjc2IDY2My44NjUgNjUyLjEyIDY1MS4yNjUgNjUxLjUyVjY0OC41Mkw2NjkuNTA1IDYzMy43NlY2MTlINjE3LjkwNVoiIGZpbGw9IndoaXRlIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfOTQyXzU4NiI+CjxyZWN0IHdpZHRoPSIxNDc0IiBoZWlnaHQ9IjE1NDMiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="}}]);