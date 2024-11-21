"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[6987],{54598:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var a=n(74848),o=n(28453);const i={id:"dataTypeLimitations",title:"Data Type Limitations",sidebar_position:3},s=void 0,r={id:"databases/mongodb/c-sharp-driver/dataTypeLimitations",title:"Data Type Limitations",description:"MongoDB stores data in BSON format. The BSON format has 21 data types.",source:"@site/docs/databases/mongodb/c-sharp-driver/DataTypeLimitations.md",sourceDirName:"databases/mongodb/c-sharp-driver",slug:"/databases/mongodb/c-sharp-driver/dataTypeLimitations",permalink:"/LearningCollection/databases/mongodb/c-sharp-driver/dataTypeLimitations",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/databases/mongodb/c-sharp-driver/DataTypeLimitations.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"dataTypeLimitations",title:"Data Type Limitations",sidebar_position:3},sidebar:"docs",previous:{title:"Distinct",permalink:"/LearningCollection/databases/mongodb/c-sharp-driver/distinct"},next:{title:"Introduction",permalink:"/LearningCollection/databases/mongodb/m001-mongodb-basics/mongoDbBasics"}},d={},l=[];function c(e){const t={a:"a",admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["MongoDB stores data in BSON format. The BSON format has 21 data types.\nThese data types are documented in the ",(0,a.jsx)(t.a,{href:"https://docs.mongodb.com/manual/reference/bson-types/",children:"MongoDB docs"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["The MongoDB C# driver has some limitations when writing C# data models to the database.\nThe driver can't handle all cases of writing unsigned data types like ",(0,a.jsx)(t.code,{children:"uint"})," to the database.\nThere are two options to handle these unsigned types:"]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Choose a signed data that can fit the unsigned value (e.g. instead of ",(0,a.jsx)(t.code,{children:"uint"})," use ",(0,a.jsx)(t.code,{children:"long"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["Annotate the property with ",(0,a.jsx)(t.code,{children:"BsonRepresentation"})," which defines the type the property is stored as in the database"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Example for option two:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cs",children:"public class MyDataModel\n{\n    [BsonRepresentation(BsonType.Int64)]\n    public uint Value { get; set; }\n}\n"})}),"\n",(0,a.jsxs)(t.admonition,{type:"danger",children:[(0,a.jsxs)(t.p,{children:["Trying to store unsinged values in the database will cause a ",(0,a.jsx)(t.strong,{children:"runtime exception"}),".\nThe exception will look like this:"]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-none",children:"Unhandled Exception: System.OverflowException: Value was either too large or too small for an Int32.\n   at System.Convert.ThrowInt32OverflowException()\n   at System.UInt32.System.IConvertible.ToInt32(IFormatProvider provider)\n   at MongoDB.Bson.Serialization.Serializers.EnumSerializer`1.Serialize(BsonSerializationContext context, BsonSerializationArgs args, TEnum value)\n"})})]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var a=n(96540);const o={},i=a.createContext(o);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);