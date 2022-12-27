"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[4414],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),u=s,h=m["".concat(o,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function u(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:s,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3904:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(7462),s=(n(7294),n(3905));const r={id:"classes",title:"Classes",sidebar_position:4},l=void 0,i={unversionedId:"Web/typescript/core-concepts/classes",id:"Web/typescript/core-concepts/classes",title:"Classes",description:"As with other JavaScript language features, TypeScript adds type annotations and other syntax to allow you to express relationships between classes and other types.",source:"@site/docs/Web/typescript/core-concepts/classes.md",sourceDirName:"Web/typescript/core-concepts",slug:"/Web/typescript/core-concepts/classes",permalink:"/LearningCollection/Web/typescript/core-concepts/classes",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/Web/typescript/core-concepts/classes.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"classes",title:"Classes",sidebar_position:4},sidebar:"finance",previous:{title:"Functions",permalink:"/LearningCollection/Web/typescript/core-concepts/functions"},next:{title:"Interfaces",permalink:"/LearningCollection/Web/typescript/core-concepts/interfaces"}},o={},c=[{value:"Class Members",id:"class-members",level:2},{value:"Fields",id:"fields",level:3},{value:"readonly",id:"readonly",level:4},{value:"Member Visibility",id:"member-visibility",level:4},{value:"Constructors",id:"constructors",level:3},{value:"Parameter Properties",id:"parameter-properties",level:4},{value:"Super Calls",id:"super-calls",level:4},{value:"Methods",id:"methods",level:3},{value:"Getters / Setters",id:"getters--setters",level:3},{value:"Static Members",id:"static-members",level:2},{value:"Class Heritage",id:"class-heritage",level:2},{value:"<code>implements</code> clauses",id:"implements-clauses",level:3},{value:"<code>extends</code> clauses",id:"extends-clauses",level:3},{value:"Overriding Methods",id:"overriding-methods",level:4},{value:"<code>abstract</code> Classes and Members",id:"abstract-classes-and-members",level:3}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"As with other JavaScript language features, TypeScript adds type annotations and other syntax to allow you to express relationships between classes and other types."),(0,s.kt)("h2",{id:"class-members"},"Class Members"),(0,s.kt)("p",null,"Here\u2019s the most basic class - an empty one:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"class Point {}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("p",null,"A field declaration creates a public writeable property on a class:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"class Point {\n  x: number;\n  y: number;\n}\n\nconst pt = new Point();\npt.x = 0;\npt.y = 0;\n")),(0,s.kt)("p",null,"Fields can also have initializers; these will run automatically when the class is instantiated:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"class Point {\n  x = 0;\n  y = 0;\n}\n\nconst pt = new Point();\n// Prints 0, 0\nconsole.log(`${pt.x}, ${pt.y}`);\n")),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"The ",(0,s.kt)("inlineCode",{parentName:"p"},"strictPropertyInitialization")," setting controls whether class fields need to be initialized in the constructor.")),(0,s.kt)("h4",{id:"readonly"},"readonly"),(0,s.kt)("p",null,"Fields may be prefixed with the ",(0,s.kt)("inlineCode",{parentName:"p"},"readonly")," modifier. This prevents assignments to the field outside of the constructor."),(0,s.kt)("h4",{id:"member-visibility"},"Member Visibility"),(0,s.kt)("p",null,"You can use TypeScript to control whether certain methods or properties are visible to code outside the class."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"public")," - the default, a public member can be accessed anywhere"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"protected")," - a protected member can be accessed within the class and its subclasses"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"private")," - a private member can only be accessed within the class")),(0,s.kt)("h3",{id:"constructors"},"Constructors"),(0,s.kt)("p",null,"Class constructors are very similar to functions. You can add parameters with type annotations, default values, and overloads:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"class Point {\n  x: number;\n  y: number;\n\n  // Normal signature with defaults\n  constructor(x = 0, y = 0) {\n    this.x = x;\n    this.y = y;\n  }\n}\n")),(0,s.kt)("p",null,"There are just a few differences between class constructor signatures and function signatures:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Constructors can\u2019t have type parameters - these belong on the outer class declaration"),(0,s.kt)("li",{parentName:"ul"},"Constructors can\u2019t have return type annotations - the class instance type is always what\u2019s returned")),(0,s.kt)("h4",{id:"parameter-properties"},"Parameter Properties"),(0,s.kt)("p",null,"TypeScript offers special syntax for turning a constructor parameter into a class property with the same name and value. These are called parameter properties and are created by prefixing a constructor argument with one of the visibility modifiers ",(0,s.kt)("inlineCode",{parentName:"p"},"public"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"private"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"protected"),", or ",(0,s.kt)("inlineCode",{parentName:"p"},"readonly"),". The resulting field gets those modifier(s):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"class Params {\n  constructor(\n    public readonly x: number,\n    protected y: number,\n    private z: number\n  ) {\n    // No body necessary\n  }\n}\n\nconst a = new Params(1, 2, 3);\n")),(0,s.kt)("h4",{id:"super-calls"},"Super Calls"),(0,s.kt)("p",null,"Just as in JavaScript, if you have a base class, you\u2019ll need to call ",(0,s.kt)("inlineCode",{parentName:"p"},"super();")," in your constructor body before using any ",(0,s.kt)("inlineCode",{parentName:"p"},"this")," members."),(0,s.kt)("h3",{id:"methods"},"Methods"),(0,s.kt)("p",null,"A function property on a class is called a method. Methods can use all the same type annotations as functions and constructors:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"class Point {\n  x = 10;\n  y = 10;\n\n  scale(n: number): void {\n    this.x *= n;\n    this.y *= n;\n  }\n}\n")),(0,s.kt)("p",null,"Other than the standard type annotations, TypeScript doesn\u2019t add anything else new to methods."),(0,s.kt)("h3",{id:"getters--setters"},"Getters / Setters"),(0,s.kt)("p",null,"Classes can also have accessors:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"class C {\n  _length = 0;\n  get length() {\n    return this._length;\n  }\n  set length(value) {\n    this._length = value;\n  }\n}\n")),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Note that a field-backed get/set pair with no extra logic is very rarely useful in JavaScript. It\u2019s fine to expose public fields if you don\u2019t need to add additional logic during the get/set operations.")),(0,s.kt)("p",null,"TypeScript has some special inference rules for accessors:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"If ",(0,s.kt)("inlineCode",{parentName:"li"},"get")," exists but no ",(0,s.kt)("inlineCode",{parentName:"li"},"set"),", the property is automatically ",(0,s.kt)("inlineCode",{parentName:"li"},"readonly")),(0,s.kt)("li",{parentName:"ul"},"If the type of the setter parameter is not specified, it is inferred from the return type of the getter"),(0,s.kt)("li",{parentName:"ul"},"Getters and setters must have the same ",(0,s.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/docs/handbook/2/classes.html#member-visibility"},"Member Visibility"))),(0,s.kt)("h2",{id:"static-members"},"Static Members"),(0,s.kt)("p",null,"Classes may have ",(0,s.kt)("inlineCode",{parentName:"p"},"static")," members. These members aren\u2019t associated with a particular instance of the class. They can be accessed through the class constructor object itself:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"class MyClass {\n  static x = 0;\n  static printX() {\n    console.log(MyClass.x);\n  }\n}\n\nconsole.log(MyClass.x);\nMyClass.printX();\n")),(0,s.kt)("p",null,"Static members can also use the same ",(0,s.kt)("inlineCode",{parentName:"p"},"public"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"protected"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"private")," visibility modifiers. Static members are also inherited."),(0,s.kt)("h2",{id:"class-heritage"},"Class Heritage"),(0,s.kt)("p",null,"Like other languages with object-oriented features, classes in JavaScript can inherit from base classes."),(0,s.kt)("h3",{id:"implements-clauses"},(0,s.kt)("inlineCode",{parentName:"h3"},"implements")," clauses"),(0,s.kt)("p",null,"You can use an ",(0,s.kt)("inlineCode",{parentName:"p"},"implements")," clause to check that a class satisfies a particular ",(0,s.kt)("inlineCode",{parentName:"p"},"interface"),". An error will be issued if a class fails to correctly implement it:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"interface Pingable {\n  ping(): void;\n}\n\nclass Sonar implements Pingable {\n  ping() {\n    console.log(\"ping!\");\n  }\n}\n\nclass Ball implements Pingable {\n  // Class 'Ball' incorrectly implements interface 'Pingable'.\n  // Property 'ping' is missing in type 'Ball' but required in type 'Pingable'.\n  pong() {\n    console.log(\"pong!\");\n  }\n}\n")),(0,s.kt)("p",null,"Classes may also implement multiple interfaces, e.g. ",(0,s.kt)("inlineCode",{parentName:"p"},"class C implements A, B"),"."),(0,s.kt)("h3",{id:"extends-clauses"},(0,s.kt)("inlineCode",{parentName:"h3"},"extends")," clauses"),(0,s.kt)("p",null,"Classes may ",(0,s.kt)("inlineCode",{parentName:"p"},"extend")," from a base class. A derived class has all the properties and methods of its base class, and also define additional members:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'class Animal {\n  move() {\n    console.log("Moving along!");\n  }\n}\n\nclass Dog extends Animal {\n  woof(times: number) {\n    for (let i = 0; i < times; i++) {\n      console.log("woof!");\n    }\n  }\n}\n\nconst d = new Dog();\n// Base class method\nd.move();\n// Derived class method\nd.woof(3);\n')),(0,s.kt)("h4",{id:"overriding-methods"},"Overriding Methods"),(0,s.kt)("p",null,"A derived class can also override a base class field or property. You can use the ",(0,s.kt)("inlineCode",{parentName:"p"},"super.")," syntax to access base class methods. TypeScript enforces that a derived class is always a subtype of its base class."),(0,s.kt)("p",null,"For example, here\u2019s a legal way to override a method:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'class Base {\n  greet() {\n    console.log("Hello, world!");\n  }\n}\n\nclass Derived extends Base {\n  greet(name?: string) {\n    if (name === undefined) {\n      super.greet();\n    } else {\n      console.log(`Hello, ${name.toUpperCase()}`);\n    }\n  }\n}\n\nconst d = new Derived();\nd.greet();\nd.greet("reader");\n')),(0,s.kt)("p",null,"It\u2019s important that a derived class follow its base class contract. Remember that it\u2019s very common (and always legal!) to refer to a derived class instance through a base class reference:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// Alias the derived instance through a base class reference\nconst b: Base = d;\n// No problem\nb.greet();\n")),(0,s.kt)("h3",{id:"abstract-classes-and-members"},(0,s.kt)("inlineCode",{parentName:"h3"},"abstract")," Classes and Members"),(0,s.kt)("p",null,"An abstract method or abstract field is one that ",(0,s.kt)("strong",{parentName:"p"},"hasn\u2019t had an implementation provided"),". These members ",(0,s.kt)("strong",{parentName:"p"},"must exist inside an abstract class"),", which ",(0,s.kt)("strong",{parentName:"p"},"cannot be directly instantiated"),"."),(0,s.kt)("p",null,"The role of abstract classes is to ",(0,s.kt)("strong",{parentName:"p"},"serve as a base class for subclasses")," which do implement all the abstract members. When a class doesn\u2019t have any abstract members, it is said to be concrete."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'abstract class Base {\n  abstract getName(): string;\n\n  printName() {\n    console.log("Hello, " + this.getName());\n  }\n}\n\n// Error: Cannot create an instance of an abstract class.\nconst b = new Base();\n')),(0,s.kt)("p",null,"We can\u2019t instantiate ",(0,s.kt)("inlineCode",{parentName:"p"},"Base")," with ",(0,s.kt)("inlineCode",{parentName:"p"},"new")," because it\u2019s abstract. Instead, we need to make a derived class and implement the abstract members:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'class Derived extends Base {\n  getName() {\n    return "world";\n  }\n}\n\nconst d = new Derived();\nd.printName();\n')))}d.isMDXComponent=!0}}]);