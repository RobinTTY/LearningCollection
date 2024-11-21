"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[9803],{29388:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>u,frontMatter:()=>d,metadata:()=>o,toc:()=>c});var i=t(74848),s=t(28453);const d={id:"queryingCreatingUpdatingDeleting",title:"Querying, Creating, Updating and Deleting documents with Mongo shell",sidebar_position:4},a=void 0,o={id:"databases/mongodb/m001-mongodb-basics/queryingCreatingUpdatingDeleting",title:"Querying, Creating, Updating and Deleting documents with Mongo shell",description:"Querying data",source:"@site/docs/databases/mongodb/m001-mongodb-basics/Querying, Creating, Updating and Deleting document.md",sourceDirName:"databases/mongodb/m001-mongodb-basics",slug:"/databases/mongodb/m001-mongodb-basics/queryingCreatingUpdatingDeleting",permalink:"/LearningCollection/databases/mongodb/m001-mongodb-basics/queryingCreatingUpdatingDeleting",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/databases/mongodb/m001-mongodb-basics/Querying, Creating, Updating and Deleting document.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"queryingCreatingUpdatingDeleting",title:"Querying, Creating, Updating and Deleting documents with Mongo shell",sidebar_position:4},sidebar:"docs",previous:{title:"Importing and Exporting data",permalink:"/LearningCollection/databases/mongodb/m001-mongodb-basics/importingExportingData"},next:{title:"Advanced CRUD operations",permalink:"/LearningCollection/databases/mongodb/m001-mongodb-basics/advancedCrudOperations"}},r={},c=[{value:"Querying data",id:"querying-data",level:2},{value:"Queries",id:"queries",level:3},{value:"Creating and Manipulating documents",id:"creating-and-manipulating-documents",level:2},{value:"Updating documents",id:"updating-documents",level:2},{value:"Deleting documents",id:"deleting-documents",level:2}];function l(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"querying-data",children:"Querying data"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'// show all dbs in current cluster\nshow dbs\n\n// select a database\nuse <databaseName>\n\n// show all collections inside database\nshow collections\n\n// execute a query in the current db\ndb.zips.find({"state": "NY"})\n\n// iterate through a cursor\nit\n// count the number of results for a query\ndb.zips.find(<query>).count()\n\n// return documents that match the given query formatted for ease of reading\ndb.zips.find(<query>).pretty()\n\n// get a random document\ndb.zips.findOne()\n'})}),"\n",(0,i.jsx)(n.h3,{id:"queries",children:"Queries"}),"\n",(0,i.jsx)(n.p,{children:"A query looks like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-JSON",children:'{"state": "NY", "city": "ALBANY"}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Here we search for all data with ",(0,i.jsx)(n.code,{children:'state = "NY"'})," and ",(0,i.jsx)(n.code,{children:'city = "ALBANY"'})]}),"\n",(0,i.jsx)(n.h2,{id:"creating-and-manipulating-documents",children:"Creating and Manipulating documents"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'// insert a document\ndb.inspections.insert({\n    "_id" : ObjectId("56d61033a378eccde8a8354f"),\n    "id" : "10021-2015-ENFO",\n    ...\n})\n\n// Insert three documents\ndb.inspections.insert([ { "test": 1 }, { "test": 2 }, { "test": 3 } ])\n\n// Insert multiple documents specifying the _id values, and using the "ordered": false option.\ndb.inspections.insert([{ "_id": 1, "test": 1 },{ "_id": 1, "test": 2 },\n                       { "_id": 3, "test": 3 }],{ "ordered": false })\n\n// Insert multiple documents with _id: 1 with the default "ordered": true setting\n// nothing will be inserted if document with _id=1 already exists\ndb.inspection.insert([{ "_id": 1, "test": 1 },{ "_id": 3, "test": 3 }])\n\n'})}),"\n",(0,i.jsx)(n.h2,{id:"updating-documents",children:"Updating documents"}),"\n",(0,i.jsx)(n.p,{children:"Operators: $inc, $set, $unset"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'// Update a single document in the zips collection where the zip field is equal to "12534"\n// by setting the value of the "pop" field to 17630\ndb.zips.updateOne({ "zip": "12534" }, { "$set": { "pop": 17630 } })\n\n// Update all documents in the zips collection where the city field is equal to "HUDSON"\n// by adding 10 to the current value of the "pop" field\ndb.zips.updateMany({ "city": "HUDSON" }, { "$inc": { "pop": 10 } })\n\n// Update one document in the grades collection where the student_id is ``250``,\n// and the class_id field is 339 , by adding a document element to the "scores" array\ndb.grades.updateOne({ "student_id": 250, "class_id": 339 },\n                    { "$push": { "scores": { "type": "extra credit",\n                                             "score": 100 }\n                                }\n                     })\n'})}),"\n",(0,i.jsx)(n.h2,{id:"deleting-documents",children:"Deleting documents"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'// Delete one document that has test field equal to 3\ndb.inspections.deleteOne({ "test": 3 })\n\n// Delete all the documents that have test field equal to 1\ndb.inspections.deleteMany({ "test": 1 })\n\n// Drop the inspection collection\ndb.inspection.drop()\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(96540);const s={},d=i.createContext(s);function a(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);