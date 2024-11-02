"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[4344],{2962:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>a});var o=t(4848),n=t(8453);const s={id:"compiler-configuration",title:"Compiler Configuration",sidebar_position:5},l=void 0,r={id:"web/typescript/compiler-configuration",title:"Compiler Configuration",description:"Some useful configuration options for the Typescript compiler are listed here.",source:"@site/docs/web/typescript/compiler-configuration.md",sourceDirName:"web/typescript",slug:"/web/typescript/compiler-configuration",permalink:"/LearningCollection/web/typescript/compiler-configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/web/typescript/compiler-configuration.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"compiler-configuration",title:"Compiler Configuration",sidebar_position:5},sidebar:"docs",previous:{title:"Parameter Decorators",permalink:"/LearningCollection/web/typescript/decorators/parameter-decorators"},next:{title:"Introduction",permalink:"/LearningCollection/web/react/introduction"}},c={},a=[{value:"Watch Mode",id:"watch-mode",level:2},{value:"Working with multiple files",id:"working-with-multiple-files",level:2},{value:"tsconfig options",id:"tsconfig-options",level:3}];function d(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.p,{children:"Some useful configuration options for the Typescript compiler are listed here."}),"\n",(0,o.jsx)(i.h2,{id:"watch-mode",children:"Watch Mode"}),"\n",(0,o.jsxs)(i.p,{children:["The ",(0,o.jsx)(i.code,{children:"--watch"})," flag tells the compiler to watch for changes in the source files and recompile when it detects a change:"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-bash",children:"tsc app.ts --watch\n"})}),"\n",(0,o.jsx)(i.h2,{id:"working-with-multiple-files",children:"Working with multiple files"}),"\n",(0,o.jsxs)(i.p,{children:["To compile a whole project, first run the ",(0,o.jsx)(i.code,{children:"tsc --init"})," command to create a ",(0,o.jsx)(i.code,{children:"tsconfig.json"})," file. This file contains all the compiler options that the compiler will use to compile the project. The ",(0,o.jsx)(i.code,{children:"tsconfig.json"})," file can be edited to add or remove files from the compilation, change the compiler options, etc."]}),"\n",(0,o.jsx)(i.p,{children:"The tsconfig looks something like this:"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-json",metastring:"title=tsconfig.json",children:'{\n  "compilerOptions": {\n    "target": "es5",\n    "module": "commonjs",\n    "lib": ["es2015", "dom"],\n    "allowJs": true,\n    "sourceMap": true,\n    "outDir": "./dist",\n    "rootDir": "./src",\n    "removeComments": true,\n    "noEmit": true,\n    "noEmitOnError": false,\n    "strict": true,\n    "esModuleInterop": true,\n    "skipLibCheck": true,\n    "forceConsistentCasingInFileNames": true\n  },\n  "include": ["src/**/*"],\n  "exclude": ["node_modules", "**/*.spec.ts"]\n}\n'})}),"\n",(0,o.jsxs)(i.p,{children:["When this file exists, we can simply run ",(0,o.jsx)(i.code,{children:"tsc"})," to compile the project. The compiler will look for the ",(0,o.jsx)(i.code,{children:"tsconfig.json"})," file in the current directory and use the options specified in it."]}),"\n",(0,o.jsx)(i.h3,{id:"tsconfig-options",children:"tsconfig options"}),"\n",(0,o.jsxs)(i.p,{children:["The ",(0,o.jsx)(i.code,{children:"tsconfig.json"})," file has a few options that can be used to configure the compiler. Some of the most useful ones are listed below:"]}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"compilerOptions"})," - This is where we specify the compiler options. The options are explained in detail in the ",(0,o.jsx)(i.a,{href:"https://www.typescriptlang.org/tsconfig",children:"Compiler Options"})," section.","\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"target"})," - This is the target version of JavaScript that the compiler should compile to. The default value is ",(0,o.jsx)(i.code,{children:"es3"}),"."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"module"})," - This is the module system that the compiler should use. The default value is ",(0,o.jsx)(i.code,{children:"commonjs"}),"."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"lib"})," - This is an array of library files that should be included in the compilation. If for example the ",(0,o.jsx)(i.code,{children:"dom"})," lib is included, the compiler will know for instance about the ",(0,o.jsx)(i.code,{children:"document"})," object and will not throw an error when it sees it in the code."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"allowJs"})," - Allow JavaScript files to be imported inside your project, instead of just ",(0,o.jsx)(i.code,{children:".ts"})," and ",(0,o.jsx)(i.code,{children:".tsx"})," files."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"sourceMap"})," - This is a boolean flag that tells the compiler to generate source maps. These files allow debuggers and other tools to display the original TypeScript source code when actually working with the emitted JavaScript files. The default value is ",(0,o.jsx)(i.code,{children:"false"}),"."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"outDir"})," - This is the directory where the compiled files should be placed. The default value is ",(0,o.jsx)(i.code,{children:"./"}),"."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"rootDir"})," - This is the root directory of the project. The default value is ",(0,o.jsx)(i.code,{children:"./"}),"."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"removeComments"})," - This is a boolean flag that tells the compiler to remove comments from the compiled files. The default value is ",(0,o.jsx)(i.code,{children:"false"}),"."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"noEmit"})," - This is a boolean flag that tells the compiler to not emit any files. The default value is ",(0,o.jsx)(i.code,{children:"false"}),"."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"noEmitOnError"})," - This is a boolean flag that tells the compiler to not emit any files if there are any errors. The default value is ",(0,o.jsx)(i.code,{children:"false"}),"."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"strict"})," - The strict flag enables a wide range of type checking behavior that results in stronger guarantees of program correctness. Turning this on is equivalent to enabling all of the strict mode family options (e.g. strictNullChecks, strictFunctionTypes, etc.). The default value is ",(0,o.jsx)(i.code,{children:"false"}),"."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"esModuleInterop"})," - This is a boolean flag that enables interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. The default value is ",(0,o.jsx)(i.code,{children:"false"}),"."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"skipLibCheck"})," - This is a boolean flag that tells the compiler to skip type checking of declaration files. The default value is ",(0,o.jsx)(i.code,{children:"false"}),"."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"forceConsistentCasingInFileNames"})," - This is a boolean flag that tells the compiler to ensure that casing is correct in imports. The default value is ",(0,o.jsx)(i.code,{children:"false"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"include"})," - This is where we specify the files that should be included in the compilation. The value of this option is an array of file patterns. The compiler will look for files that match any of the patterns in the ",(0,o.jsx)(i.code,{children:"include"})," array and compile them."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"exclude"})," - This is where we specify the files that should be excluded from the compilation. Default:\nnode_modules, bower_components"]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,i,t)=>{t.d(i,{R:()=>l,x:()=>r});var o=t(6540);const n={},s=o.createContext(n);function l(e){const i=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),o.createElement(s.Provider,{value:i},e.children)}}}]);