"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[3257],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(a),c=n,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||o;return a?r.createElement(h,i(i({ref:t},u),{},{components:a})):r.createElement(h,i({ref:t},u))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7223:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const o={id:"antlr",title:"ANTLR"},i=void 0,l={unversionedId:"Tools/antlr",id:"Tools/antlr",title:"ANTLR",description:"What is ANTLR",source:"@site/docs/Tools/ANTLR.md",sourceDirName:"Tools",slug:"/Tools/antlr",permalink:"/LearningCollection/Tools/antlr",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/Tools/ANTLR.md",tags:[],version:"current",frontMatter:{id:"antlr",title:"ANTLR"},sidebar:"finance",previous:{title:"Important Mongo Shell Commands",permalink:"/LearningCollection/Databases/MongoDB/mongoShellCommands"},next:{title:"Installation",permalink:"/LearningCollection/Tools/Ansible/tools-ansible-installation"}},s={},p=[{value:"What is ANTLR",id:"what-is-antlr",level:2},{value:"What is a Parser",id:"what-is-a-parser",level:2},{value:"What is a Lexer",id:"what-is-a-lexer",level:2},{value:"Improvements by ANTLR v4",id:"improvements-by-antlr-v4",level:2},{value:"Listeners and Parsers",id:"listeners-and-parsers",level:3},{value:"Step by Step Getting Started",id:"step-by-step-getting-started",level:2},{value:"Step 1: Install Java",id:"step-1-install-java",level:3},{value:"Step 2: Download the tool",id:"step-2-download-the-tool",level:3},{value:"Step 3: Add or create a grammar file (*.g4) in your project",id:"step-3-add-or-create-a-grammar-file-g4-in-your-project",level:3},{value:"Step 4: Generate the C# code",id:"step-4-generate-the-c-code",level:3},{value:"Step 5: Add a reference to the ANTLR runtime in your project",id:"step-5-add-a-reference-to-the-antlr-runtime-in-your-project",level:3},{value:"Step 6: You&#39;re done!",id:"step-6-youre-done",level:3},{value:"Visual Studio integration",id:"visual-studio-integration",level:3},{value:"Grammar Examples",id:"grammar-examples",level:2}],u={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"what-is-antlr"},"What is ANTLR"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ANTLR stands for Another Tool for Language Recognition"),(0,n.kt)("li",{parentName:"ul"},"parser generator that uses LL(","*",") for parsing",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"an LL parser (Left-to-right, Leftmost derivation) is a top-down parser for a subset of context-free languages. It parses the input from Left to right, performing Leftmost derivation of the sentence"),(0,n.kt)("li",{parentName:"ul"},"An LL parser is called an LL(k) parser if it uses k tokens of lookahead when parsing a sentence"))),(0,n.kt)("li",{parentName:"ul"},"successor of the Purdue Compiler Construction Tool Set (PCCTS)"),(0,n.kt)("li",{parentName:"ul"},"takes as input a grammar that specifies a language and generates as output source code for a recognizer of that language"),(0,n.kt)("li",{parentName:"ul"},"Output languages that are supported are: Java, ",(0,n.kt)("strong",{parentName:"li"},"C#"),", C++, JavaScript, Python2, Python3, Swift, and Go"),(0,n.kt)("li",{parentName:"ul"},"ANTLR can generate lexers, parsers, tree parsers, and combined lexer-parsers."),(0,n.kt)("li",{parentName:"ul"},"ANTLR provides a single consistent notation for specifying lexers, parsers, and tree parsers"),(0,n.kt)("li",{parentName:"ul"},"By default, ANTLR reads a grammar and generates a recognizer for the language defined by the grammar (i.e., a program that reads an input stream and generates an error if the input stream does not conform to the syntax specified by the grammar)"),(0,n.kt)("li",{parentName:"ul"},"In order to do something useful with the language, actions can be attached to grammar elements in the grammar. These actions are written in the programming language in which the recognizer is being generated"),(0,n.kt)("li",{parentName:"ul"},"When the recognizer is being generated, the actions are embedded in the source code of the recognizer at the appropriate points. Actions can be used to build and check symbol tables and to emit instructions in a target language, in the case of a compiler")),(0,n.kt)("h2",{id:"what-is-a-parser"},"What is a Parser"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"software component that takes input data (frequently text) and builds a data structure"),(0,n.kt)("li",{parentName:"ul"},"can automatically build parse trees, which are data structures representing how a grammar matches the input"),(0,n.kt)("li",{parentName:"ul"},"in this case C# code is generated"),(0,n.kt)("li",{parentName:"ul"},"The parser is often preceded by a separate lexical analyser, which creates tokens from the sequence of input characters")),(0,n.kt)("h2",{id:"what-is-a-lexer"},"What is a Lexer"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"converts a sequence of characters (such as in a computer program or web page) into a sequence of tokens (strings with an assigned and thus identified meaning)"),(0,n.kt)("li",{parentName:"ul"},"A program that performs lexical analysis may be termed a lexer, tokenizer, or scanner, though scanner is also a term for the first stage of a lexer"),(0,n.kt)("li",{parentName:"ul"},"A lexer is generally combined with a parser, which together analyze the syntax of programming languages, web pages, and so forth")),(0,n.kt)("h2",{id:"improvements-by-antlr-v4"},"Improvements by ANTLR v4"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"accepts every grammar you give it (with one exception described in the next bullet). There are no grammar conflict or ambiguity warnings as ANTLR translates your grammar to executable, Human\u2013readable parsing code"),(0,n.kt)("li",{parentName:"ul"},"If you give your ANTLR-generated parser valid input, it will always recognize it properly, no matter how complicated the grammar"),(0,n.kt)("li",{parentName:"ul"},"ANTLR v4 dramatically simplifies the grammar rules used to match syntactic structures like programming language expressions"),(0,n.kt)("li",{parentName:"ul"},"Language applications need to execute code snippets when they see specific input sentences, phrases, or tokens. To make this easier, ANTLRgenerated parsers automatically build convenient representations of the input called parse trees that an application can walk to trigger code snippets as it encounters constructs of interest")),(0,n.kt)("h3",{id:"listeners-and-parsers"},"Listeners and Parsers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ANTLR automatically generates parse tree walkers for us in the form of listener and visitor pattern implementations"),(0,n.kt)("li",{parentName:"ul"},"Listeners are analogous to XML document handler objects that respond to SAX events triggered by XML parsers"),(0,n.kt)("li",{parentName:"ul"},"The biggest change is that v4 deemphasizes embedding actions (code) in the grammar, favoring listeners and visitors instead"),(0,n.kt)("li",{parentName:"ul"},"Those mechanisms decouple grammars from application code, nicely encapsulating an application instead of fracturing it and dispersing the pieces across a grammar"),(0,n.kt)("li",{parentName:"ul"},"Without embedded actions, you can also reuse the same grammar in different applications without even recompiling the generated parser")),(0,n.kt)("h2",{id:"step-by-step-getting-started"},"Step by Step Getting Started"),(0,n.kt)("h3",{id:"step-1-install-java"},"Step 1: Install Java"),(0,n.kt)("p",null,"The C# target for ANTLR 4 requires Java for ",(0,n.kt)("em",{parentName:"p"},"generating")," C# code (but the applications compiled from this C# code will not require Java to be installed).\nYou can install ",(0,n.kt)("em",{parentName:"p"},"any")," of the following versions of Java to use this target."),(0,n.kt)("p",null,"If you already have one of the following installed, you should check to make sure the installation is up-to-date."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Java 8 runtime environment (x86 or x64)"),(0,n.kt)("li",{parentName:"ul"},"Java 8 development kit (x86 or x64, provided that the JRE option is also installed during the development kit installation)"),(0,n.kt)("li",{parentName:"ul"},"Java 7 runtime environment (x86 or x64)"),(0,n.kt)("li",{parentName:"ul"},"Java 7 development kit (x86 or x64, provided that the JRE option is also installed during the development kit installation)")),(0,n.kt)("h3",{id:"step-2-download-the-tool"},"Step 2: Download the tool"),(0,n.kt)("p",null,"You need to download the ANTLR tool from the ANTLR web site.\nThis is a Java archive (","*",".jar) used to generate the C# code from an ANTLR grammar."),(0,n.kt)("h3",{id:"step-3-add-or-create-a-grammar-file-g4-in-your-project"},"Step 3: Add or create a grammar file (","*",".g4) in your project"),(0,n.kt)("p",null,"To avoid confusing your IDE, we suggest setting the build action to None for this file.\nSee the docs and the book to learn about writing lexer and parser grammars."),(0,n.kt)("h3",{id:"step-4-generate-the-c-code"},"Step 4: Generate the C# code"),(0,n.kt)("p",null,"This can be done either from the cmd line, or by adding a custom pre-build command in your project.\nAt minimal, the cmd line should look as follows: ",(0,n.kt)("inlineCode",{parentName:"p"},"java -jar antlr4-4.7.2.jar -Dlanguage=CSharp grammar.g4"),"\nThis will generate the files, which you can then integrate in your project.\nThis is just a quick start. The tool has many useful options to control generation, please refer to its documentation."),(0,n.kt)("h3",{id:"step-5-add-a-reference-to-the-antlr-runtime-in-your-project"},"Step 5: Add a reference to the ANTLR runtime in your project"),(0,n.kt)("p",null,"The Antlr 4 standard runtime for C# is now available from NuGet.\nWe trust that you know how to do add NuGet references to your project :-).\nThe package id is ",(0,n.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/Antlr4.Runtime.Standard/"},"Antlr4.Runtime.Standard"),". We do not support other packages."),(0,n.kt)("p",null,"Use the GUI or the following command in the Package Manager Console:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Install-Package Antlr4.Runtime.Standard\n")),(0,n.kt)("h3",{id:"step-6-youre-done"},"Step 6: You're done!"),(0,n.kt)("p",null,"Of course, the generated code is not going to meet your requirement by magic.\nThere are 3 ways to use the generated code:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"by generating a parse tree, and traversing it using a listener. This is the most common method."),(0,n.kt)("li",{parentName:"ul"},"by generating a parse tree, and traversing it using a visitor. This requires the -visitor option, and is a bit more work."),(0,n.kt)("li",{parentName:"ul"},"by providing code within your grammar, which gets executed when your input files are parsed. While the latter works, it is no longer the recommended approach, because it is not portable, and harder to maintain. More importantly, it breaks the parsing when your code breaks.")),(0,n.kt)("p",null,"See the web site for examples of using the generated code."),(0,n.kt)("p",null,"To learn more about ANTLR 4, read ",(0,n.kt)("a",{parentName:"p",href:"http://a.co/2n4rJlb"},"the book"),"."),(0,n.kt)("h3",{id:"visual-studio-integration"},"Visual Studio integration"),(0,n.kt)("p",null,"If you require tighter Visual Studio integration, you can use the tools from ",(0,n.kt)("a",{parentName:"p",href:"http://tunnelvisionlabs.com/"},"Tunnel Vision Labs"),".\n(please note however that they use a different tool and runtime)"),(0,n.kt)("h2",{id:"grammar-examples"},"Grammar Examples"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/antlr/grammars-v4"},"Examples Github Link")))}d.isMDXComponent=!0}}]);