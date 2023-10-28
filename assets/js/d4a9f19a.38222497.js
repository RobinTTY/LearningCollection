"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[9781],{3905:(M,N,j)=>{j.d(N,{Zo:()=>T,kt:()=>c});var D=j(7294);function e(M,N,j){return N in M?Object.defineProperty(M,N,{value:j,enumerable:!0,configurable:!0,writable:!0}):M[N]=j,M}function g(M,N){var j=Object.keys(M);if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols(M);N&&(D=D.filter((function(N){return Object.getOwnPropertyDescriptor(M,N).enumerable}))),j.push.apply(j,D)}return j}function i(M){for(var N=1;N<arguments.length;N++){var j=null!=arguments[N]?arguments[N]:{};N%2?g(Object(j),!0).forEach((function(N){e(M,N,j[N])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(j)):g(Object(j)).forEach((function(N){Object.defineProperty(M,N,Object.getOwnPropertyDescriptor(j,N))}))}return M}function I(M,N){if(null==M)return{};var j,D,e=function(M,N){if(null==M)return{};var j,D,e={},g=Object.keys(M);for(D=0;D<g.length;D++)j=g[D],N.indexOf(j)>=0||(e[j]=M[j]);return e}(M,N);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(M);for(D=0;D<g.length;D++)j=g[D],N.indexOf(j)>=0||Object.prototype.propertyIsEnumerable.call(M,j)&&(e[j]=M[j])}return e}var z=D.createContext({}),t=function(M){var N=D.useContext(z),j=N;return M&&(j="function"==typeof M?M(N):i(i({},N),M)),j},T=function(M){var N=t(M.components);return D.createElement(z.Provider,{value:N},M.children)},u="mdxType",a={inlineCode:"code",wrapper:function(M){var N=M.children;return D.createElement(D.Fragment,{},N)}},y=D.forwardRef((function(M,N){var j=M.components,e=M.mdxType,g=M.originalType,z=M.parentName,T=I(M,["components","mdxType","originalType","parentName"]),u=t(j),y=e,c=u["".concat(z,".").concat(y)]||u[y]||a[y]||g;return j?D.createElement(c,i(i({ref:N},T),{},{components:j})):D.createElement(c,i({ref:N},T))}));function c(M,N){var j=arguments,e=N&&N.mdxType;if("string"==typeof M||e){var g=j.length,i=new Array(g);i[0]=y;var I={};for(var z in N)hasOwnProperty.call(N,z)&&(I[z]=N[z]);I.originalType=M,I[u]="string"==typeof M?M:e,i[1]=I;for(var t=2;t<g;t++)i[t]=j[t];return D.createElement.apply(null,i)}return D.createElement.apply(null,j)}y.displayName="MDXCreateElement"},6052:(M,N,j)=>{j.r(N),j.d(N,{assets:()=>z,contentTitle:()=>i,default:()=>a,frontMatter:()=>g,metadata:()=>I,toc:()=>t});var D=j(7462),e=(j(7294),j(3905));const g={id:"flexbox",title:"Flexbox",sidebar_position:2},i=void 0,I={unversionedId:"web/css/site-layout/flexbox",id:"web/css/site-layout/flexbox",title:"Flexbox",description:"For a long time, there were only several simple CSS properties like float, margin, position, display and other similar tools for setting up a proper layout.",source:"@site/docs/web/css/site-layout/flexbox.md",sourceDirName:"web/css/site-layout",slug:"/web/css/site-layout/flexbox",permalink:"/LearningCollection/web/css/site-layout/flexbox",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/web/css/site-layout/flexbox.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"flexbox",title:"Flexbox",sidebar_position:2},sidebar:"docs",previous:{title:"Document Flow and Positioning",permalink:"/LearningCollection/web/css/site-layout/position"},next:{title:"Constructable Stylesheets",permalink:"/LearningCollection/web/css/advanced-concepts/constructable-stylesheets"}},z={},t=[{value:"Basic terms",id:"basic-terms",level:2},{value:"Setting up a flexbox",id:"setting-up-a-flexbox",level:2},{value:"Important Details",id:"important-details",level:2}],T={toc:t},u="wrapper";function a(M){let{components:N,...g}=M;return(0,e.kt)(u,(0,D.Z)({},T,g,{components:N,mdxType:"MDXLayout"}),(0,e.kt)("p",null,"For a long time, there were only several simple CSS properties like ",(0,e.kt)("inlineCode",{parentName:"p"},"float"),", ",(0,e.kt)("inlineCode",{parentName:"p"},"margin"),", ",(0,e.kt)("inlineCode",{parentName:"p"},"position"),", ",(0,e.kt)("inlineCode",{parentName:"p"},"display")," and other similar tools for setting up a proper layout."),(0,e.kt)("p",null,"Everything becomes much easier with Flexbox! ",(0,e.kt)("strong",{parentName:"p"},"Flexbox")," is short for ",(0,e.kt)("strong",{parentName:"p"},"Flexible Box Layout Module"),". It is a one-dimensional layout method for laying out items in rows or columns. Items flex to fill additional space and shrink to fit into smaller spaces. It allows us to center the items vertically and horizontally. And the flex items can also be aligned on the horizontal and vertical axis using flexbox properties."),(0,e.kt)("h2",{id:"basic-terms"},"Basic terms"),(0,e.kt)("p",null,"Flexbox consists of a ",(0,e.kt)("strong",{parentName:"p"},"flex container")," and ",(0,e.kt)("strong",{parentName:"p"},"flex items"),":"),(0,e.kt)("ul",null,(0,e.kt)("li",{parentName:"ul"},"A flex container is a wrapping for flex items"),(0,e.kt)("li",{parentName:"ul"},"Flex items are children and they can line up in a row or a column")),(0,e.kt)("p",null,"The remaining free space is distributed among the items in a way determined by the corresponding property."),(0,e.kt)("p",null,"With a flexbox you can line up elements in four different directions:"),(0,e.kt)("ul",null,(0,e.kt)("li",{parentName:"ul"},"left to right"),(0,e.kt)("li",{parentName:"ul"},"right to left"),(0,e.kt)("li",{parentName:"ul"},"top to bottom"),(0,e.kt)("li",{parentName:"ul"},"and bottom to top")),(0,e.kt)("p",null,"You can also override the elements' display order, automatically set up their sizes so that they fit in the available space, change the positioning of items inside the container, and finally solve the problem with horizontal and vertical alignment."),(0,e.kt)("p",null,"WHen talking about flexboxes, some terms are important. They are the following:"),(0,e.kt)("p",null,(0,e.kt)("img",{alt:"flexbox-terms",src:j(5403).Z,width:"1180",height:"512"})),(0,e.kt)("ul",null,(0,e.kt)("li",{parentName:"ul"},(0,e.kt)("strong",{parentName:"li"},"Main axis"),": the axis that determines the direction in which all the elements are going to be placed by default"),(0,e.kt)("li",{parentName:"ul"},(0,e.kt)("strong",{parentName:"li"},"Cross axis"),": the axis perpendicular to the main axis"),(0,e.kt)("li",{parentName:"ul"},(0,e.kt)("strong",{parentName:"li"},"Main start/end"),": borders that determine where the flex container begins and ends"),(0,e.kt)("li",{parentName:"ul"},(0,e.kt)("strong",{parentName:"li"},"Cross start/end"),": borders that determine where the cross axis begins and ends"),(0,e.kt)("li",{parentName:"ul"},(0,e.kt)("strong",{parentName:"li"},"Main size"),": the size of the main axis"),(0,e.kt)("li",{parentName:"ul"},(0,e.kt)("strong",{parentName:"li"},"Cross size"),": the size of the cross axis")),(0,e.kt)("p",null,"Depending on how you want to align flex items, ",(0,e.kt)("strong",{parentName:"p"},"the dimensions may shuffle"),", meaning that the main axis will become the cross axis and the cross axis will become the main axis. This affects the way items are arranged: vertically or horizontally."),(0,e.kt)("h2",{id:"setting-up-a-flexbox"},"Setting up a flexbox"),(0,e.kt)("p",null,"The property ",(0,e.kt)("inlineCode",{parentName:"p"},"display: flex;")," is used to set a block up as a flexbox. All its child elements will automatically become flex items. They will be lined up along the direction of the main axis."),(0,e.kt)("p",null,"Example with 3 child elements:"),(0,e.kt)("pre",null,(0,e.kt)("code",{parentName:"pre",className:"language-html"},'<div class="flex-container">\n  <div class="flex-item">item 1</div>\n  <div class="flex-item">item 2</div>\n  <div class="flex-item">item 3</div>\n</div>\n')),(0,e.kt)("p",null,"This is what it looks like with ",(0,e.kt)("inlineCode",{parentName:"p"},"display: block;")," set to the flex-container:"),(0,e.kt)("p",null,(0,e.kt)("img",{alt:"flex-display-block",src:j(6862).Z,width:"1474",height:"717"})),(0,e.kt)("p",null,"And this is what happens if ",(0,e.kt)("inlineCode",{parentName:"p"},"display: flex;")," is applied:"),(0,e.kt)("p",null,(0,e.kt)("img",{alt:"flex-display-flex",src:j(4197).Z,width:"1474",height:"323"})),(0,e.kt)("p",null,"If the block has a text or an image not wrapped with ",(0,e.kt)("inlineCode",{parentName:"p"},"<div></div>"),", they become ",(0,e.kt)("strong",{parentName:"p"},"anonymous flex items"),". In this case, the text will be stuck to the top, and the height of the image will be equal to the height of the container."),(0,e.kt)("h2",{id:"important-details"},"Important Details"),(0,e.kt)("p",null,"There are a couple of things to keep in mind when working with flexboxes:"),(0,e.kt)("ul",null,(0,e.kt)("li",{parentName:"ul"},"Properties ",(0,e.kt)("inlineCode",{parentName:"li"},"display"),", ",(0,e.kt)("inlineCode",{parentName:"li"},"float"),", ",(0,e.kt)("inlineCode",{parentName:"li"},"clear"),", and ",(0,e.kt)("inlineCode",{parentName:"li"},"vertical-align")," are redundant for flexbox, so they will be ignored even if you set them."),(0,e.kt)("li",{parentName:"ul"},"You don't need to set the ",(0,e.kt)("inlineCode",{parentName:"li"},"display: flex;")," property for flexible elements, just apply it to the container that is the parent element."),(0,e.kt)("li",{parentName:"ul"},"If the values of ",(0,e.kt)("inlineCode",{parentName:"li"},"margin")," and ",(0,e.kt)("inlineCode",{parentName:"li"},"padding")," are set as a percentage, they will be calculated based on the inner size of the parental block."),(0,e.kt)("li",{parentName:"ul"},"The default minimum size of the flex item is the minimal size of its content. Basically, it's ",(0,e.kt)("inlineCode",{parentName:"li"},"min-width: auto;"),". The minimum size of the elements with visible overflow is 0 by default.")))}a.isMDXComponent=!0},6862:(M,N,j)=>{j.d(N,{Z:()=>D});const D="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ3NCIgaGVpZ2h0PSI3MTciIHZpZXdCb3g9IjAgMCAxNDc0IDcxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik0xNTQ3IC0yNUgtNDFWNzE3SDE1NDdWLTI1WiIgZmlsbD0id2hpdGUiLz4KPHJlY3QgeD0iMzYiIHk9IjQwIiB3aWR0aD0iMTM5MCIgaGVpZ2h0PSI2MTciIHN0cm9rZT0iIzAwN0JGRiIgc3Ryb2tlLXdpZHRoPSI0Ii8+CjxyZWN0IHg9IjgzIiB5PSI4OSIgd2lkdGg9IjEyOTYiIGhlaWdodD0iMTQyIiBzdHJva2U9IiMwMDdCRkYiIHN0cm9rZS13aWR0aD0iNCIvPgo8cmVjdCB4PSI4MyIgeT0iMjc4IiB3aWR0aD0iMTI5NiIgaGVpZ2h0PSIxNDIiIHN0cm9rZT0iIzAwN0JGRiIgc3Ryb2tlLXdpZHRoPSI0Ii8+CjxyZWN0IHg9IjgzIiB5PSI0NjciIHdpZHRoPSIxMjk2IiBoZWlnaHQ9IjE0MiIgc3Ryb2tlPSIjMDA3QkZGIiBzdHJva2Utd2lkdGg9IjQiLz4KPHBhdGggZD0iTTEyMS4wMjUgMTM5LjYyNVYxMzMuMzQxSDExNC44NzdWMTM5LjYyNUgxMjEuMDI1Wk0xMjAuODIgMTQ4LjU3M0gxMTUuMDE0VjE4M0gxMjAuODJWMTQ4LjU3M1pNMTQwLjIxMyAxNDguNTczVjEzOC4xOTFIMTM0LjQwN1YxNDguNTczSDEyOC40NjRWMTUzLjYyOEgxMzQuNDA3VjE3My4zNjlDMTM0LjQwNyAxODAuNjc4IDEzOC43NzggMTgzIDE0Ni4yMjQgMTgzSDE0OC44ODhWMTc3LjgwOUgxNDYuMzYxQzE0MS43MTYgMTc3LjgwOSAxNDAuMjEzIDE3Ni4wMzMgMTQwLjIxMyAxNzIuNTQ5VjE1My42MjhIMTQ4Ljg4OFYxNDguNTczSDE0MC4yMTNaTTE4Ny43NTMgMTYzLjczN0MxODcuNTQ4IDE1NS4yNjcgMTgyLjYzIDE0Ny42ODUgMTcyLjM4NCAxNDcuNjg1QzE2MS45MzMgMTQ3LjY4NSAxNTUuNzg1IDE1NC44NTggMTU1Ljc4NSAxNjUuNDQ1QzE1NS43ODUgMTc2LjAzMyAxNjEuNzk2IDE4My44ODggMTcyLjUyIDE4My44ODhDMTgxLjA1OSAxODMuODg4IDE4Ni4wNDUgMTc5LjM4IDE4Ny4xMzggMTczLjUwNUgxODEuMjY0QzE4MC4yMzkgMTc2Ljc4NCAxNzcuMzcgMTc4LjgzMyAxNzIuNTIgMTc4LjgzM0MxNjUuNDE3IDE3OC44MzMgMTYxLjcyOCAxNzMuOTE1IDE2MS41MjMgMTY1LjcxOEgxODcuNzUzVjE2My43MzdaTTE3Mi4yNDcgMTUyLjc0QzE3OC4wNTMgMTUyLjc0IDE4MS40IDE1Ni40OTcgMTgxLjc0MiAxNjAuODY5SDE2MS44NjVDMTYyLjYxNiAxNTYuNDk3IDE2Ni4wMzEgMTUyLjc0IDE3Mi4yNDcgMTUyLjc0Wk0yMzIuOTI3IDE0Ny42ODVDMjI4LjYyNCAxNDcuNjg1IDIyNS4zNDUgMTQ5LjE4OCAyMjMuMjI3IDE1Mi4yNjJIMjIxLjcyNEMyMTkuODggMTQ5LjE4OCAyMTYuODA2IDE0Ny42ODUgMjEyLjY0IDE0Ny42ODVDMjA4LjI2OCAxNDcuNjg1IDIwNS42MDQgMTQ5LjI1NiAyMDMuODk2IDE1MS45MkgyMDIuMzk0VjE0OC41NzNIMTk2Ljc5MlYxODNIMjAyLjU5OVYxNjMuOTQyQzIwMi41OTkgMTU3LjcyNiAyMDUuMzMxIDE1Mi44NzcgMjExLjA2OSAxNTIuODc3QzIxNS4zNzIgMTUyLjg3NyAyMTcuNjI2IDE1NS44MTQgMjE3LjYyNiAxNjEuNDgzVjE4M0gyMjMuNDMyVjE2Mi44NDlDMjIzLjQzMiAxNTcuMDQzIDIyNi40MzggMTUyLjg3NyAyMzEuODM0IDE1Mi44NzdDMjM2LjI3NCAxNTIuODc3IDIzOC40NiAxNTUuNjc3IDIzOC40NiAxNjEuMzQ3VjE4M0gyNDQuMjY2VjE2MC43MzJDMjQ0LjI2NiAxNTIuODA4IDI0MC44NSAxNDcuNjg1IDIzMi45MjcgMTQ3LjY4NVpNMjcyLjMzNCAxODNIMzAwLjEzNVYxNzcuNjcySDI4OS42ODRWMTM1LjE4NUgyODIuMjM4TDI3Mi4yNjUgMTQxLjk0N1YxNDguMjMyTDI4Mi4zMDYgMTQxLjQ2OUgyODMuNjczVjE3Ny42NzJIMjcyLjMzNFYxODNaIiBmaWxsPSIjMDA3QkZGIi8+CjxwYXRoIGQ9Ik0xMTguMzU3IDMzNC42MjVWMzI4LjM0MUgxMTIuMjA5VjMzNC42MjVIMTE4LjM1N1pNMTE4LjE1MiAzNDMuNTczSDExMi4zNDZWMzc4SDExOC4xNTJWMzQzLjU3M1pNMTM3LjU0NSAzNDMuNTczVjMzMy4xOTFIMTMxLjczOVYzNDMuNTczSDEyNS43OTZWMzQ4LjYyOEgxMzEuNzM5VjM2OC4zNjlDMTMxLjczOSAzNzUuNjc4IDEzNi4xMSAzNzggMTQzLjU1NiAzNzhIMTQ2LjIyVjM3Mi44MDlIMTQzLjY5MkMxMzkuMDQ3IDM3Mi44MDkgMTM3LjU0NSAzNzEuMDMzIDEzNy41NDUgMzY3LjU0OVYzNDguNjI4SDE0Ni4yMlYzNDMuNTczSDEzNy41NDVaTTE4NS4wODUgMzU4LjczN0MxODQuODggMzUwLjI2NyAxNzkuOTYyIDM0Mi42ODUgMTY5LjcxNiAzNDIuNjg1QzE1OS4yNjUgMzQyLjY4NSAxNTMuMTE3IDM0OS44NTggMTUzLjExNyAzNjAuNDQ1QzE1My4xMTcgMzcxLjAzMyAxNTkuMTI4IDM3OC44ODggMTY5Ljg1MiAzNzguODg4QzE3OC4zOTEgMzc4Ljg4OCAxODMuMzc3IDM3NC4zOCAxODQuNDcgMzY4LjUwNUgxNzguNTk2QzE3Ny41NzEgMzcxLjc4NCAxNzQuNzAyIDM3My44MzMgMTY5Ljg1MiAzNzMuODMzQzE2Mi43NDggMzczLjgzMyAxNTkuMDYgMzY4LjkxNSAxNTguODU1IDM2MC43MThIMTg1LjA4NVYzNTguNzM3Wk0xNjkuNTc5IDM0Ny43NEMxNzUuMzg1IDM0Ny43NCAxNzguNzMyIDM1MS40OTcgMTc5LjA3NCAzNTUuODY5SDE1OS4xOTZDMTU5Ljk0OCAzNTEuNDk3IDE2My4zNjMgMzQ3Ljc0IDE2OS41NzkgMzQ3Ljc0Wk0yMzAuMjU5IDM0Mi42ODVDMjI1Ljk1NSAzNDIuNjg1IDIyMi42NzcgMzQ0LjE4OCAyMjAuNTU5IDM0Ny4yNjJIMjE5LjA1NkMyMTcuMjEyIDM0NC4xODggMjE0LjEzOCAzNDIuNjg1IDIwOS45NzEgMzQyLjY4NUMyMDUuNiAzNDIuNjg1IDIwMi45MzYgMzQ0LjI1NiAyMDEuMjI4IDM0Ni45MkgxOTkuNzI1VjM0My41NzNIMTk0LjEyNFYzNzhIMTk5LjkzVjM1OC45NDJDMTk5LjkzIDM1Mi43MjYgMjAyLjY2MyAzNDcuODc3IDIwOC40IDM0Ny44NzdDMjEyLjcwNCAzNDcuODc3IDIxNC45NTggMzUwLjgxNCAyMTQuOTU4IDM1Ni40ODNWMzc4SDIyMC43NjRWMzU3Ljg0OUMyMjAuNzY0IDM1Mi4wNDMgMjIzLjc2OSAzNDcuODc3IDIyOS4xNjYgMzQ3Ljg3N0MyMzMuNjA2IDM0Ny44NzcgMjM1Ljc5MSAzNTAuNjc3IDIzNS43OTEgMzU2LjM0N1YzNzhIMjQxLjU5OFYzNTUuNzMyQzI0MS41OTggMzQ3LjgwOCAyMzguMTgyIDM0Mi42ODUgMjMwLjI1OSAzNDIuNjg1Wk0yNzUuMjY3IDM0My4zNjhDMjc1Ljg4MSAzMzcuMzU3IDI3OS42MzggMzM0LjU1NyAyODUuMDM0IDMzNC41NTdDMjkwLjg0MSAzMzQuNTU3IDI5NC42NjYgMzM3Ljc2NyAyOTQuNjY2IDM0My43NzhDMjk0LjY2NiAzNDkuNDQ4IDI5MC40OTkgMzUzLjM0MSAyODcuMjIgMzU2LjI3OEMyODQuNjkzIDM1OC42MDEgMjgwLjE4NSAzNjIuNDI2IDI3Ni4zNTkgMzY1LjVMMjY5LjMyNCAzNzEuMjM4VjM3OEgzMDIuMTc5VjM3Mi42NzJIMjc4LjA2N1YzNzEuMTY5TDI5MC4wODkgMzYxLjA2QzI5NS43NTkgMzU2LjM0NyAzMDAuNjc3IDM1MC4yNjcgMzAwLjY3NyAzNDMuNzc4QzMwMC42NzcgMzM0LjIxNSAyOTQuMTE5IDMyOS4yMjkgMjg1LjE3MSAzMjkuMjI5QzI3Ni43MDEgMzI5LjIyOSAyNjkuODAyIDMzMy44MDUgMjY5LjI1NSAzNDMuMzY4SDI3NS4yNjdaIiBmaWxsPSIjMDA3QkZGIi8+CjxwYXRoIGQ9Ik0xMTguNzkgNTIzLjYyNVY1MTcuMzQxSDExMi42NDNWNTIzLjYyNUgxMTguNzlaTTExOC41ODUgNTMyLjU3M0gxMTIuNzc5VjU2N0gxMTguNTg1VjUzMi41NzNaTTEzNy45NzggNTMyLjU3M1Y1MjIuMTkxSDEzMi4xNzJWNTMyLjU3M0gxMjYuMjI5VjUzNy42MjhIMTMyLjE3MlY1NTcuMzY5QzEzMi4xNzIgNTY0LjY3OCAxMzYuNTQ0IDU2NyAxNDMuOTg5IDU2N0gxNDYuNjUzVjU2MS44MDlIMTQ0LjEyNkMxMzkuNDgxIDU2MS44MDkgMTM3Ljk3OCA1NjAuMDMzIDEzNy45NzggNTU2LjU0OVY1MzcuNjI4SDE0Ni42NTNWNTMyLjU3M0gxMzcuOTc4Wk0xODUuNTE4IDU0Ny43MzdDMTg1LjMxMyA1MzkuMjY3IDE4MC4zOTUgNTMxLjY4NSAxNzAuMTQ5IDUzMS42ODVDMTU5LjY5OCA1MzEuNjg1IDE1My41NTEgNTM4Ljg1OCAxNTMuNTUxIDU0OS40NDVDMTUzLjU1MSA1NjAuMDMzIDE1OS41NjIgNTY3Ljg4OCAxNzAuMjg2IDU2Ny44ODhDMTc4LjgyNCA1NjcuODg4IDE4My44MTEgNTYzLjM4IDE4NC45MDQgNTU3LjUwNUgxNzkuMDI5QzE3OC4wMDUgNTYwLjc4NCAxNzUuMTM2IDU2Mi44MzMgMTcwLjI4NiA1NjIuODMzQzE2My4xODIgNTYyLjgzMyAxNTkuNDkzIDU1Ny45MTUgMTU5LjI4OCA1NDkuNzE4SDE4NS41MThWNTQ3LjczN1pNMTcwLjAxMyA1MzYuNzRDMTc1LjgxOSA1MzYuNzQgMTc5LjE2NiA1NDAuNDk3IDE3OS41MDcgNTQ0Ljg2OUgxNTkuNjNDMTYwLjM4MSA1NDAuNDk3IDE2My43OTcgNTM2Ljc0IDE3MC4wMTMgNTM2Ljc0Wk0yMzAuNjkyIDUzMS42ODVDMjI2LjM4OSA1MzEuNjg1IDIyMy4xMSA1MzMuMTg4IDIyMC45OTMgNTM2LjI2MkgyMTkuNDlDMjE3LjY0NiA1MzMuMTg4IDIxNC41NzIgNTMxLjY4NSAyMTAuNDA1IDUzMS42ODVDMjA2LjAzMyA1MzEuNjg1IDIwMy4zNjkgNTMzLjI1NiAyMDEuNjYyIDUzNS45MkgyMDAuMTU5VjUzMi41NzNIMTk0LjU1OFY1NjdIMjAwLjM2NFY1NDcuOTQyQzIwMC4zNjQgNTQxLjcyNiAyMDMuMDk2IDUzNi44NzcgMjA4LjgzNCA1MzYuODc3QzIxMy4xMzcgNTM2Ljg3NyAyMTUuMzkxIDUzOS44MTQgMjE1LjM5MSA1NDUuNDgzVjU2N0gyMjEuMTk4VjU0Ni44NDlDMjIxLjE5OCA1NDEuMDQzIDIyNC4yMDMgNTM2Ljg3NyAyMjkuNTk5IDUzNi44NzdDMjM0LjAzOSA1MzYuODc3IDIzNi4yMjUgNTM5LjY3NyAyMzYuMjI1IDU0NS4zNDdWNTY3SDI0Mi4wMzFWNTQ0LjczMkMyNDIuMDMxIDUzNi44MDggMjM4LjYxNiA1MzEuNjg1IDIzMC42OTIgNTMxLjY4NVpNMjcxLjQ2NSA1MTkuMTg1VjUyNC4zNzZIMjkyLjM2N1Y1MjUuODc5TDI4MC42ODcgNTM1Ljk4OVY1NDIuMzQxQzI4MS43NzkgNTQyLjA2OCAyODMuMTQ2IDU0MS45MzEgMjg0Ljg1MyA1NDEuOTMxQzI5MS44ODkgNTQxLjkzMSAyOTUuNjQ2IDU0NS44MjUgMjk1LjY0NiA1NTIuMTA5QzI5NS42NDYgNTU4LjY2NyAyOTEuMzQyIDU2Mi41NiAyODQuNzg1IDU2Mi41NkMyNzkuMDQ3IDU2Mi41NiAyNzQuNjA3IDU1OS4wNzYgMjc0LjA2MSA1NTMuNjEySDI2OC4wNUMyNjguNTk2IDU2MS43NCAyNzUuMDg1IDU2Ny44ODggMjg0Ljc4NSA1NjcuODg4QzI5NC41NTMgNTY3Ljg4OCAzMDEuNjU3IDU2Mi4wMTQgMzAxLjY1NyA1NTIuMTA5QzMwMS42NTcgNTQyLjg4OCAyOTUuNjQ2IDUzNy43NjUgMjg3LjQ0OSA1MzcuNTZWNTM2LjEyNUwyOTkuNDAzIDUyNS44NzlWNTE5LjE4NUgyNzEuNDY1WiIgZmlsbD0iIzAwN0JGRiIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwIj4KPHJlY3Qgd2lkdGg9IjE0NzQiIGhlaWdodD0iNzE3IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="},4197:(M,N,j)=>{j.d(N,{Z:()=>D});const D="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ3NCIgaGVpZ2h0PSIzMjMiIHZpZXdCb3g9IjAgMCAxNDc0IDMyMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik0xNTQ3IC0yNUgtNDFWNzE3SDE1NDdWLTI1WiIgZmlsbD0id2hpdGUiLz4KPHJlY3QgeD0iMzciIHk9IjM5IiB3aWR0aD0iMTM5MCIgaGVpZ2h0PSIyNDAiIHN0cm9rZT0iIzAwN0JGRiIgc3Ryb2tlLXdpZHRoPSI0Ii8+CjxyZWN0IHg9Ijg3IiB5PSI4NyIgd2lkdGg9IjI0MiIgaGVpZ2h0PSIxNDIiIHN0cm9rZT0iIzAwN0JGRiIgc3Ryb2tlLXdpZHRoPSI0Ii8+CjxyZWN0IHg9IjQyMyIgeT0iODciIHdpZHRoPSIyNDIiIGhlaWdodD0iMTQyIiBzdHJva2U9IiMwMDdCRkYiIHN0cm9rZS13aWR0aD0iNCIvPgo8cmVjdCB4PSI3NTkiIHk9Ijg3IiB3aWR0aD0iMjQyIiBoZWlnaHQ9IjE0MiIgc3Ryb2tlPSIjMDA3QkZGIiBzdHJva2Utd2lkdGg9IjQiLz4KPHBhdGggZD0iTTEyMy4wMjUgMTM3LjYyNVYxMzEuMzQxSDExNi44NzdWMTM3LjYyNUgxMjMuMDI1Wk0xMjIuODIgMTQ2LjU3M0gxMTcuMDE0VjE4MUgxMjIuODJWMTQ2LjU3M1pNMTQyLjIxMyAxNDYuNTczVjEzNi4xOTFIMTM2LjQwN1YxNDYuNTczSDEzMC40NjRWMTUxLjYyOEgxMzYuNDA3VjE3MS4zNjlDMTM2LjQwNyAxNzguNjc4IDE0MC43NzggMTgxIDE0OC4yMjQgMTgxSDE1MC44ODhWMTc1LjgwOUgxNDguMzYxQzE0My43MTYgMTc1LjgwOSAxNDIuMjEzIDE3NC4wMzMgMTQyLjIxMyAxNzAuNTQ5VjE1MS42MjhIMTUwLjg4OFYxNDYuNTczSDE0Mi4yMTNaTTE4OS43NTMgMTYxLjczN0MxODkuNTQ4IDE1My4yNjcgMTg0LjYzIDE0NS42ODUgMTc0LjM4NCAxNDUuNjg1QzE2My45MzMgMTQ1LjY4NSAxNTcuNzg1IDE1Mi44NTggMTU3Ljc4NSAxNjMuNDQ1QzE1Ny43ODUgMTc0LjAzMyAxNjMuNzk2IDE4MS44ODggMTc0LjUyIDE4MS44ODhDMTgzLjA1OSAxODEuODg4IDE4OC4wNDUgMTc3LjM4IDE4OS4xMzggMTcxLjUwNUgxODMuMjY0QzE4Mi4yMzkgMTc0Ljc4NCAxNzkuMzcgMTc2LjgzMyAxNzQuNTIgMTc2LjgzM0MxNjcuNDE3IDE3Ni44MzMgMTYzLjcyOCAxNzEuOTE1IDE2My41MjMgMTYzLjcxOEgxODkuNzUzVjE2MS43MzdaTTE3NC4yNDcgMTUwLjc0QzE4MC4wNTMgMTUwLjc0IDE4My40IDE1NC40OTcgMTgzLjc0MiAxNTguODY5SDE2My44NjVDMTY0LjYxNiAxNTQuNDk3IDE2OC4wMzEgMTUwLjc0IDE3NC4yNDcgMTUwLjc0Wk0yMzQuOTI3IDE0NS42ODVDMjMwLjYyNCAxNDUuNjg1IDIyNy4zNDUgMTQ3LjE4OCAyMjUuMjI3IDE1MC4yNjJIMjIzLjcyNEMyMjEuODggMTQ3LjE4OCAyMTguODA2IDE0NS42ODUgMjE0LjY0IDE0NS42ODVDMjEwLjI2OCAxNDUuNjg1IDIwNy42MDQgMTQ3LjI1NiAyMDUuODk2IDE0OS45MkgyMDQuMzk0VjE0Ni41NzNIMTk4Ljc5MlYxODFIMjA0LjU5OVYxNjEuOTQyQzIwNC41OTkgMTU1LjcyNiAyMDcuMzMxIDE1MC44NzcgMjEzLjA2OSAxNTAuODc3QzIxNy4zNzIgMTUwLjg3NyAyMTkuNjI2IDE1My44MTQgMjE5LjYyNiAxNTkuNDgzVjE4MUgyMjUuNDMyVjE2MC44NDlDMjI1LjQzMiAxNTUuMDQzIDIyOC40MzggMTUwLjg3NyAyMzMuODM0IDE1MC44NzdDMjM4LjI3NCAxNTAuODc3IDI0MC40NiAxNTMuNjc3IDI0MC40NiAxNTkuMzQ3VjE4MUgyNDYuMjY2VjE1OC43MzJDMjQ2LjI2NiAxNTAuODA4IDI0Mi44NSAxNDUuNjg1IDIzNC45MjcgMTQ1LjY4NVpNMjc0LjMzNCAxODFIMzAyLjEzNVYxNzUuNjcySDI5MS42ODRWMTMzLjE4NUgyODQuMjM4TDI3NC4yNjUgMTM5Ljk0N1YxNDYuMjMyTDI4NC4zMDYgMTM5LjQ2OUgyODUuNjczVjE3NS42NzJIMjc0LjMzNFYxODFaIiBmaWxsPSIjMDA3QkZGIi8+CjxwYXRoIGQ9Ik00NTYuMzU3IDEzNy42MjVWMTMxLjM0MUg0NTAuMjA5VjEzNy42MjVINDU2LjM1N1pNNDU2LjE1MiAxNDYuNTczSDQ1MC4zNDZWMTgxSDQ1Ni4xNTJWMTQ2LjU3M1pNNDc1LjU0NSAxNDYuNTczVjEzNi4xOTFINDY5LjczOVYxNDYuNTczSDQ2My43OTZWMTUxLjYyOEg0NjkuNzM5VjE3MS4zNjlDNDY5LjczOSAxNzguNjc4IDQ3NC4xMSAxODEgNDgxLjU1NiAxODFINDg0LjIyVjE3NS44MDlINDgxLjY5MkM0NzcuMDQ3IDE3NS44MDkgNDc1LjU0NSAxNzQuMDMzIDQ3NS41NDUgMTcwLjU0OVYxNTEuNjI4SDQ4NC4yMlYxNDYuNTczSDQ3NS41NDVaTTUyMy4wODUgMTYxLjczN0M1MjIuODggMTUzLjI2NyA1MTcuOTYyIDE0NS42ODUgNTA3LjcxNiAxNDUuNjg1QzQ5Ny4yNjUgMTQ1LjY4NSA0OTEuMTE3IDE1Mi44NTggNDkxLjExNyAxNjMuNDQ1QzQ5MS4xMTcgMTc0LjAzMyA0OTcuMTI4IDE4MS44ODggNTA3Ljg1MiAxODEuODg4QzUxNi4zOTEgMTgxLjg4OCA1MjEuMzc3IDE3Ny4zOCA1MjIuNDcgMTcxLjUwNUg1MTYuNTk2QzUxNS41NzEgMTc0Ljc4NCA1MTIuNzAyIDE3Ni44MzMgNTA3Ljg1MiAxNzYuODMzQzUwMC43NDggMTc2LjgzMyA0OTcuMDYgMTcxLjkxNSA0OTYuODU1IDE2My43MThINTIzLjA4NVYxNjEuNzM3Wk01MDcuNTc5IDE1MC43NEM1MTMuMzg1IDE1MC43NCA1MTYuNzMyIDE1NC40OTcgNTE3LjA3NCAxNTguODY5SDQ5Ny4xOTZDNDk3Ljk0OCAxNTQuNDk3IDUwMS4zNjMgMTUwLjc0IDUwNy41NzkgMTUwLjc0Wk01NjguMjU5IDE0NS42ODVDNTYzLjk1NSAxNDUuNjg1IDU2MC42NzcgMTQ3LjE4OCA1NTguNTU5IDE1MC4yNjJINTU3LjA1NkM1NTUuMjEyIDE0Ny4xODggNTUyLjEzOCAxNDUuNjg1IDU0Ny45NzEgMTQ1LjY4NUM1NDMuNiAxNDUuNjg1IDU0MC45MzYgMTQ3LjI1NiA1MzkuMjI4IDE0OS45Mkg1MzcuNzI1VjE0Ni41NzNINTMyLjEyNFYxODFINTM3LjkzVjE2MS45NDJDNTM3LjkzIDE1NS43MjYgNTQwLjY2MyAxNTAuODc3IDU0Ni40IDE1MC44NzdDNTUwLjcwNCAxNTAuODc3IDU1Mi45NTggMTUzLjgxNCA1NTIuOTU4IDE1OS40ODNWMTgxSDU1OC43NjRWMTYwLjg0OUM1NTguNzY0IDE1NS4wNDMgNTYxLjc2OSAxNTAuODc3IDU2Ny4xNjYgMTUwLjg3N0M1NzEuNjA2IDE1MC44NzcgNTczLjc5MSAxNTMuNjc3IDU3My43OTEgMTU5LjM0N1YxODFINTc5LjU5OFYxNTguNzMyQzU3OS41OTggMTUwLjgwOCA1NzYuMTgyIDE0NS42ODUgNTY4LjI1OSAxNDUuNjg1Wk02MTMuMjY3IDE0Ni4zNjhDNjEzLjg4MSAxNDAuMzU3IDYxNy42MzggMTM3LjU1NyA2MjMuMDM0IDEzNy41NTdDNjI4Ljg0MSAxMzcuNTU3IDYzMi42NjYgMTQwLjc2NyA2MzIuNjY2IDE0Ni43NzhDNjMyLjY2NiAxNTIuNDQ4IDYyOC40OTkgMTU2LjM0MSA2MjUuMjIgMTU5LjI3OEM2MjIuNjkzIDE2MS42MDEgNjE4LjE4NSAxNjUuNDI2IDYxNC4zNTkgMTY4LjVMNjA3LjMyNCAxNzQuMjM4VjE4MUg2NDAuMTc5VjE3NS42NzJINjE2LjA2N1YxNzQuMTY5TDYyOC4wODkgMTY0LjA2QzYzMy43NTkgMTU5LjM0NyA2MzguNjc3IDE1My4yNjcgNjM4LjY3NyAxNDYuNzc4QzYzOC42NzcgMTM3LjIxNSA2MzIuMTE5IDEzMi4yMjkgNjIzLjE3MSAxMzIuMjI5QzYxNC43MDEgMTMyLjIyOSA2MDcuODAyIDEzNi44MDUgNjA3LjI1NSAxNDYuMzY4SDYxMy4yNjdaIiBmaWxsPSIjMDA3QkZGIi8+CjxwYXRoIGQ9Ik03OTIuNzkgMTM3LjYyNVYxMzEuMzQxSDc4Ni42NDNWMTM3LjYyNUg3OTIuNzlaTTc5Mi41ODUgMTQ2LjU3M0g3ODYuNzc5VjE4MUg3OTIuNTg1VjE0Ni41NzNaTTgxMS45NzggMTQ2LjU3M1YxMzYuMTkxSDgwNi4xNzJWMTQ2LjU3M0g4MDAuMjI5VjE1MS42MjhIODA2LjE3MlYxNzEuMzY5QzgwNi4xNzIgMTc4LjY3OCA4MTAuNTQ0IDE4MSA4MTcuOTg5IDE4MUg4MjAuNjUzVjE3NS44MDlIODE4LjEyNkM4MTMuNDgxIDE3NS44MDkgODExLjk3OCAxNzQuMDMzIDgxMS45NzggMTcwLjU0OVYxNTEuNjI4SDgyMC42NTNWMTQ2LjU3M0g4MTEuOTc4Wk04NTkuNTE4IDE2MS43MzdDODU5LjMxMyAxNTMuMjY3IDg1NC4zOTUgMTQ1LjY4NSA4NDQuMTQ5IDE0NS42ODVDODMzLjY5OCAxNDUuNjg1IDgyNy41NTEgMTUyLjg1OCA4MjcuNTUxIDE2My40NDVDODI3LjU1MSAxNzQuMDMzIDgzMy41NjIgMTgxLjg4OCA4NDQuMjg2IDE4MS44ODhDODUyLjgyNCAxODEuODg4IDg1Ny44MTEgMTc3LjM4IDg1OC45MDQgMTcxLjUwNUg4NTMuMDI5Qzg1Mi4wMDUgMTc0Ljc4NCA4NDkuMTM2IDE3Ni44MzMgODQ0LjI4NiAxNzYuODMzQzgzNy4xODIgMTc2LjgzMyA4MzMuNDkzIDE3MS45MTUgODMzLjI4OCAxNjMuNzE4SDg1OS41MThWMTYxLjczN1pNODQ0LjAxMyAxNTAuNzRDODQ5LjgxOSAxNTAuNzQgODUzLjE2NiAxNTQuNDk3IDg1My41MDcgMTU4Ljg2OUg4MzMuNjNDODM0LjM4MSAxNTQuNDk3IDgzNy43OTcgMTUwLjc0IDg0NC4wMTMgMTUwLjc0Wk05MDQuNjkyIDE0NS42ODVDOTAwLjM4OSAxNDUuNjg1IDg5Ny4xMSAxNDcuMTg4IDg5NC45OTMgMTUwLjI2Mkg4OTMuNDlDODkxLjY0NiAxNDcuMTg4IDg4OC41NzIgMTQ1LjY4NSA4ODQuNDA1IDE0NS42ODVDODgwLjAzMyAxNDUuNjg1IDg3Ny4zNjkgMTQ3LjI1NiA4NzUuNjYyIDE0OS45Mkg4NzQuMTU5VjE0Ni41NzNIODY4LjU1OFYxODFIODc0LjM2NFYxNjEuOTQyQzg3NC4zNjQgMTU1LjcyNiA4NzcuMDk2IDE1MC44NzcgODgyLjgzNCAxNTAuODc3Qzg4Ny4xMzcgMTUwLjg3NyA4ODkuMzkxIDE1My44MTQgODg5LjM5MSAxNTkuNDgzVjE4MUg4OTUuMTk4VjE2MC44NDlDODk1LjE5OCAxNTUuMDQzIDg5OC4yMDMgMTUwLjg3NyA5MDMuNTk5IDE1MC44NzdDOTA4LjAzOSAxNTAuODc3IDkxMC4yMjUgMTUzLjY3NyA5MTAuMjI1IDE1OS4zNDdWMTgxSDkxNi4wMzFWMTU4LjczMkM5MTYuMDMxIDE1MC44MDggOTEyLjYxNiAxNDUuNjg1IDkwNC42OTIgMTQ1LjY4NVpNOTQ1LjQ2NSAxMzMuMTg1VjEzOC4zNzZIOTY2LjM2N1YxMzkuODc5TDk1NC42ODcgMTQ5Ljk4OVYxNTYuMzQxQzk1NS43NzkgMTU2LjA2OCA5NTcuMTQ2IDE1NS45MzEgOTU4Ljg1MyAxNTUuOTMxQzk2NS44ODkgMTU1LjkzMSA5NjkuNjQ2IDE1OS44MjUgOTY5LjY0NiAxNjYuMTA5Qzk2OS42NDYgMTcyLjY2NyA5NjUuMzQyIDE3Ni41NiA5NTguNzg1IDE3Ni41NkM5NTMuMDQ3IDE3Ni41NiA5NDguNjA3IDE3My4wNzYgOTQ4LjA2MSAxNjcuNjEySDk0Mi4wNUM5NDIuNTk2IDE3NS43NCA5NDkuMDg1IDE4MS44ODggOTU4Ljc4NSAxODEuODg4Qzk2OC41NTMgMTgxLjg4OCA5NzUuNjU3IDE3Ni4wMTQgOTc1LjY1NyAxNjYuMTA5Qzk3NS42NTcgMTU2Ljg4OCA5NjkuNjQ2IDE1MS43NjUgOTYxLjQ0OSAxNTEuNTZWMTUwLjEyNUw5NzMuNDAzIDEzOS44NzlWMTMzLjE4NUg5NDUuNDY1WiIgZmlsbD0iIzAwN0JGRiIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwIj4KPHJlY3Qgd2lkdGg9IjE0NzQiIGhlaWdodD0iMzIzIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="},5403:(M,N,j)=>{j.d(N,{Z:()=>D});const D=j.p+"assets/images/flexbox-terms-78f6ada6d46b42fcaf8ea01b7503f305.png"}}]);