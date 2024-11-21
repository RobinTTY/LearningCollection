"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[7777],{79293:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var s=r(74848),t=r(28453);const c={title:"Inheritance"},i=void 0,a={id:"csharp/core-concepts/inheritance",title:"Inheritance",description:"In C#, a class hierarchy can be defined using inheritance, which allows a derived class (e.g. Car) to inherit the behavior and data of its parent class (e.g. Vehicle). If no parent is specified, the class inherits from the object class.",source:"@site/docs/csharp/core-concepts/inheritance.md",sourceDirName:"csharp/core-concepts",slug:"/csharp/core-concepts/inheritance",permalink:"/LearningCollection/csharp/core-concepts/inheritance",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/csharp/core-concepts/inheritance.md",tags:[],version:"current",frontMatter:{title:"Inheritance"},sidebar:"docs",previous:{title:"IEnumerable",permalink:"/LearningCollection/csharp/core-concepts/interfaces/ienumerable"},next:{title:"Nullability",permalink:"/LearningCollection/csharp/core-concepts/nullability"}},o={},l=[];function d(e){const n={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["In C#, a class hierarchy can be defined using inheritance, which allows a derived class (e.g. ",(0,s.jsx)(n.code,{children:"Car"}),") to inherit the behavior and data of its parent class (e.g. ",(0,s.jsx)(n.code,{children:"Vehicle"}),"). If no parent is specified, the class inherits from the object class."]}),"\n",(0,s.jsx)(n.p,{children:"Parent classes can provide functionality to derived classes in three ways:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Define a regular method"}),"\n",(0,s.jsxs)(n.li,{children:["Define a ",(0,s.jsx)(n.code,{children:"virtual"})," method, which is like a regular method but one that derived classes can change"]}),"\n",(0,s.jsxs)(n.li,{children:["Define an ",(0,s.jsx)(n.code,{children:"abstract"})," method, which is a method without an implementation that derived classes must implement. A class with ",(0,s.jsx)(n.code,{children:"abstract"})," methods must be marked as ",(0,s.jsx)(n.code,{children:"abstract"})," too. Abstract classes cannot be instantiated."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"protected"})," access modifier allows a parent class member to be accessed in a derived class, but blocks access from other classes."]}),"\n",(0,s.jsxs)(n.p,{children:["Derived classes can access parent class members through the ",(0,s.jsx)(n.code,{children:"base"})," keyword:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"// Inherits from the 'object' class\r\nabstract class Vehicle\r\n{\r\n    // Can be overridden\r\n    public virtual void Drive()\r\n    {\r\n    }\r\n\r\n    // Must be overridden\r\n    protected abstract int Speed();\r\n}\r\n\r\nclass Car : Vehicle\r\n{\r\n    public override void Drive()\r\n    {\r\n        // Override virtual method\r\n\r\n        // Call parent implementation\r\n        base.Drive();\r\n    }\r\n\r\n    protected override int Speed()\r\n    {\r\n        // Implement abstract method\r\n    }\r\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The constructor of a derived class will automatically call its parent's constructor before executing its own constructor's logic. Arguments can be passed to a parent class' constructor using the ",(0,s.jsx)(n.code,{children:"base"})," keyword:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'abstract class Vehicle\r\n{\r\n    protected Vehicle(int wheels)\r\n    {\r\n        Console.WriteLine("Called first");\r\n    }\r\n}\r\n\r\nclass Car : Vehicle\r\n{\r\n    public Car() : base(4)\r\n    {\r\n        Console.WriteLine("Called second");\r\n    }\r\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Where more than one class is derived from a base class the two (or more) classes will often implement different versions of a base class method. This is a very important principle called polymorphism. For instance in a variation on the above example we show how code using ",(0,s.jsx)(n.code,{children:"Vehicle"})," can change its behavior depending on what type of vehicle has been instantiated:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'abstract class Vehicle\r\n{\r\n   public abstract string GetDescription();\r\n}\r\n\r\nclass Car : Vehicle\r\n{\r\n   public Car()\r\n   {\r\n   }\r\n\r\n   public override string GetDescription()\r\n   {\r\n      return "Runabout";\r\n   }\r\n}\r\n\r\nclass Rig : Vehicle\r\n{\r\n   public Rig()\r\n   {\r\n   }\r\n\r\n   public override string GetDescription()\r\n   {\r\n      return "Big Rig";\r\n   }\r\n}\r\n\r\nVehicle v1 = new Car();\r\nVehicle v2 = new Rig();\r\n\r\nv1.GetDescription();\r\n// => Runabout\r\nv2.GetDescription();\r\n// => Big Rig\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>a});var s=r(96540);const t={},c=s.createContext(t);function i(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);