"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[2368],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(g,l(l({ref:t},c),{},{components:a})):n.createElement(g,l({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1520:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),l=["components"],i={id:"advancedCrudOperations",title:"Advanced CRUD operations",sidebar_position:5},s=void 0,p={unversionedId:"Databases/MongoDB/M001 MongoDB Basics/advancedCrudOperations",id:"Databases/MongoDB/M001 MongoDB Basics/advancedCrudOperations",isDocsHomePage:!1,title:"Advanced CRUD operations",description:"MQL Operators",source:"@site/docs/Databases/MongoDB/M001 MongoDB Basics/Advanced CRUD operations.md",sourceDirName:"Databases/MongoDB/M001 MongoDB Basics",slug:"/Databases/MongoDB/M001 MongoDB Basics/advancedCrudOperations",permalink:"/LearningCollection/Databases/MongoDB/M001 MongoDB Basics/advancedCrudOperations",editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/Databases/MongoDB/M001 MongoDB Basics/Advanced CRUD operations.md",version:"current",sidebarPosition:5,frontMatter:{id:"advancedCrudOperations",title:"Advanced CRUD operations",sidebar_position:5},sidebar:"mySidebar",previous:{title:"Querying, Creating, Updating and Deleting documents with Mongo shell",permalink:"/LearningCollection/Databases/MongoDB/M001 MongoDB Basics/queryingCreatingUpdatingDeleting"},next:{title:"Indexing and Aggregation Pipeline",permalink:"/LearningCollection/Databases/MongoDB/M001 MongoDB Basics/IndexingAggregationsPipeline"}},c=[{value:"MQL Operators",id:"mql-operators",children:[{value:"Update Operators",id:"update-operators",children:[]},{value:"$ Operator",id:"-operator",children:[]},{value:"Query Operators",id:"query-operators",children:[]},{value:"Logic Operators",id:"logic-operators",children:[]},{value:"Expressive query operator",id:"expressive-query-operator",children:[]},{value:"Array Operators",id:"array-operators",children:[]},{value:"Projection",id:"projection",children:[]},{value:"$elemMatch",id:"elemmatch",children:[]},{value:"Array Operators and Sub-Documents",id:"array-operators-and-sub-documents",children:[]}]}],u={toc:c};function d(e){var t=e.components,i=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"mql-operators"},"MQL Operators"),(0,o.kt)("h3",{id:"update-operators"},"Update Operators"),(0,o.kt)("p",null,"Example: \\$inc, \\$set, \\$unset",(0,o.kt)("br",{parentName:"p"}),"\n","Enable us to modify data in the database."),(0,o.kt)("h3",{id:"-operator"},"$ Operator"),(0,o.kt)("p",null,"The $ operator has multiple uses:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"precedes MQL operators"),(0,o.kt)("li",{parentName:"ul"},"precedes aggregation pipeline stages"),(0,o.kt)("li",{parentName:"ul"},"allows access to field values")),(0,o.kt)("h3",{id:"query-operators"},"Query Operators"),(0,o.kt)("p",null,"Provide additional ways to locate data within the database."),(0,o.kt)("h4",{id:"comparison-operators"},"Comparison Operators"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"$eq (==): ",(0,o.kt)("strong",{parentName:"li"},"Eq"),"ual to"),(0,o.kt)("li",{parentName:"ul"},"$ne (!=): ",(0,o.kt)("strong",{parentName:"li"},"N"),"ot ",(0,o.kt)("strong",{parentName:"li"},"e"),"qual to"),(0,o.kt)("li",{parentName:"ul"},"$gt (>): ",(0,o.kt)("strong",{parentName:"li"},"G"),"reater ",(0,o.kt)("strong",{parentName:"li"},"t"),"han"),(0,o.kt)("li",{parentName:"ul"},"$lt (<): ",(0,o.kt)("strong",{parentName:"li"},"L"),"ess ",(0,o.kt)("strong",{parentName:"li"},"t"),"han"),(0,o.kt)("li",{parentName:"ul"},"$gte (>=): ",(0,o.kt)("strong",{parentName:"li"},"G"),"reater ",(0,o.kt)("strong",{parentName:"li"},"t"),"han or ",(0,o.kt)("strong",{parentName:"li"},"e"),"qual to"),(0,o.kt)("li",{parentName:"ul"},"$lte (<=): ",(0,o.kt)("strong",{parentName:"li"},"L"),"ess ",(0,o.kt)("strong",{parentName:"li"},"t"),"han or ",(0,o.kt)("strong",{parentName:"li"},"e"),"qual to")),(0,o.kt)("p",null,"Syntax to use them:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'{ <field>: { <operator>: <value> } }\n\n// Example:\n\n{ "tripduration": { "$lte" : 60 } }\n\n// 2 Conditions:\n\n{ "tripduration": { "$lte" : 60 }, "usertype": { "$ne": "Subscriber" } }\n')),(0,o.kt)("p",null,"With mongodb shell we can query like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'db.trips.find({ "tripduration": { "$lte" : 70 },\n                "usertype": { "$eq": "Customer" }}).pretty()\n\n// This is equivalent to (implicit equality operator):\n\ndb.trips.find({ "tripduration": { "$lte" : 70 },\n                "usertype": "Customer" }).pretty()\n')),(0,o.kt)("h3",{id:"logic-operators"},"Logic Operators"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"$and:")," Match all of the specified query clauses"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"$or:")," At least one of the query clauses is matched"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"$nor:")," Fail to match both given clauses")),(0,o.kt)("p",null,"Syntax:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"{ <operator> : [ { statement1 }, { statement2 }, ... ] }\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"$not:")," Negates the query requirement")),(0,o.kt)("p",null,"Syntax:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"{ $not: { statement } }\n")),(0,o.kt)("h4",{id:"and-is-the-default-operator"},"$and is the default operator"),(0,o.kt)("p",null,"A query like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'{ "tripduration": 60, "usertype": "Subscriber" }\n')),(0,o.kt)("p",null,"already contains an implicit $and. The explicit typing looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'{ "$and": [{ "tripduration": 60 }, { "usertype": "Subscriber" }] }\n')),(0,o.kt)("p",null,"Another example:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"implicitAnd",src:a(8767).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Explicitly use \\$and when you need to include the same operator more than once in a query"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"and",src:a(5308).Z})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'db.routes.find({ "$and": [ { "$or" :[ { "dst_airport": "KZN" },\n                                    { "src_airport": "KZN" } ]\n                           },\n                          { "$or" :[ { "airplane": "CR2" },\n                                     { "airplane": "A81" } ]\n                          }\n                         ]}).pretty()\n')),(0,o.kt)("h4",{id:"quizzes"},"Quizzes"),(0,o.kt)("h5",{id:"quiz-1"},"Quiz 1"),(0,o.kt)("p",null,"How many zips in the sample_training.zips dataset are neither over-populated nor under-populated?"),(0,o.kt)("p",null,"In this case, we consider population of more than 1,000,000 to be over- populated and less than 5,000 to be under-populated."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{ "pop": { "$lt": 1000000 }, "pop": { "$gt": 5000 } }\n')),(0,o.kt)("h5",{id:"quiz-2"},"Quiz 2"),(0,o.kt)("p",null,"How many companies in the sample_training.companies dataset were"),(0,o.kt)("p",null,"either founded in 2004"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"[and]"," either have the social category_code ","[or]"," web category_code,")),(0,o.kt)("p",null,"[or]"," were founded in the month of October"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"[and]"," also either have the social category_code ","[or]"," web category_code?")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$or": [\n    {\n      "$and": [\n        { "founded_year": 2004 },\n        { "$or": [{ "category_code": "social" }, { "category_code": "web" }] }\n      ]\n    },\n    {\n      "$and": [\n        { "founded_month": 10 },\n        { "$or": [{ "category_code": "social" }, { "category_code": "web" }] }\n      ]\n    }\n  ]\n}\n')),(0,o.kt)("h3",{id:"expressive-query-operator"},"Expressive query operator"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"$expr allows the use of aggregation expressions withing the query language"),(0,o.kt)("li",{parentName:"ul"},"$expr allows us to use variables and conditional statements"),(0,o.kt)("li",{parentName:"ul"},"Reminder: $ denotes the use of an operator or addresses the field value")),(0,o.kt)("p",null,"Syntax:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"{ $expr: { <expression> } }\n")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("p",null,"Find all documents where the trip started and ended at the same station:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'{ "$expr": { "$eq": [ "$end station id", "$start station id"] } }\n')),(0,o.kt)("p",null,"This allows us to compare values that vary from document to document instead of one specific value."),(0,o.kt)("h4",{id:"mql-syntax-vs-aggregation-syntax"},"MQL syntax vs aggregation syntax"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"aggregation",src:a(1712).Z})),(0,o.kt)("p",null,"From ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Automattic/mongoose/issues/6453"},"Github"),":"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If all you need to do is grab a set of documents, or specific paths from documents, find is the way to go. Aggregation provides a set of operations ( stages ) which allow you to transform the data before it's returned from the server. The decision of which to use ultimately boils down to whether or not you need/want to reshape the data before returning it from the db or just returning what exists in the db as is.")),(0,o.kt)("h4",{id:"quiz"},"Quiz"),(0,o.kt)("p",null,"How many companies in the sample_training.companies collection have the same permalink as their twitter_username?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{ "$expr": { "$eq": ["$permalink", "$twitter_username"] } }\n')),(0,o.kt)("h3",{id:"array-operators"},"Array Operators"),(0,o.kt)("p",null,"To work with array fields we can use the $all operator:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'db.listingsAndReviews.find({ "amenities": {\n                                  "$size": 20,\n                                  "$all": [ "Internet", "Wifi",  "Kitchen",\n                                           "Heating", "Family/kid friendly",\n                                           "Washer", "Dryer", "Essentials",\n                                           "Shampoo", "Hangers",\n                                           "Hair dryer", "Iron",\n                                           "Laptop friendly workspace" ]\n                                         }\n                            }).pretty()\n')),(0,o.kt)("p",null,"This will find all documents with exactly 20 amenities which include all the amenities listed in the query array."),(0,o.kt)("h4",{id:"lab-1"},"Lab 1"),(0,o.kt)("p",null,"What is the name of the listing in the sample_airbnb.listingsAndReviews dataset that accommodates more than 6 people and has exactly 50 reviews?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{ "$and": [{ "accommodates": { "$gt": 6 } }, { "reviews": { "$size": 50 } }] }\n')),(0,o.kt)("h4",{id:"lab-2"},"Lab 2"),(0,o.kt)("p",null,'Using the sample_airbnb.listingsAndReviews collection find out how many documents have the "property_type" "House", and include "Changing table" as one of the "amenities"?'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$and": [\n    { "property_type": "House" },\n    { "amenities": { "$all": ["Changing table"] } }\n  ]\n}\n')),(0,o.kt)("h3",{id:"projection"},"Projection"),(0,o.kt)("p",null,"By default, queries in MongoDB return all fields in matching documents. To limit the amount of data that MongoDB sends to applications, you can include a projection document to specify or restrict fields to return."),(0,o.kt)("p",null,"Syntax:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"db.<collection>.find({ <query> }, { <projection> })\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"1: include the field"),(0,o.kt)("li",{parentName:"ul"},"0: exclude the field"),(0,o.kt)("li",{parentName:"ul"},"Use only 1s or only 0s (other than excluding the ","_","id while specifying included fields)")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("p",null,"Find all documents with exactly 20 amenities which include all the amenities listed in the query array, and ",(0,o.kt)("strong",{parentName:"p"},"display their price and address"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'db.listingsAndReviews.find({ "amenities":\n        { "$size": 20, "$all": [ "Internet", "Wifi",  "Kitchen", "Heating",\n                                 "Family/kid friendly", "Washer", "Dryer",\n                                 "Essentials", "Shampoo", "Hangers",\n                                 "Hair dryer", "Iron",\n                                 "Laptop friendly workspace" ] } },\n                            {"price": 1, "address": 1}).pretty()\n')),(0,o.kt)("h3",{id:"elemmatch"},"$elemMatch"),(0,o.kt)("p",null,"Matches documents that contain an array field with at least one element that matches the specified query criteria ",(0,o.kt)("strong",{parentName:"p"},"or")," projects only the array elements with at least one element that matches the specified criteria."),(0,o.kt)("p",null,"Syntax:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'{ <field>: { "$elemMatch": { <field>: <value> } } }\n')),(0,o.kt)("p",null,"Example:"),(0,o.kt)("p",null,"Find all documents where the student in ",(0,o.kt)("strong",{parentName:"p"},"class 431")," received a ",(0,o.kt)("strong",{parentName:"p"},"grade higher than 85")," for any type of assignment:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'db.grades.find({ "class_id": 431 },\n               { "scores": { "$elemMatch": { "score": { "$gt": 85 } } }\n             }).pretty()\n')),(0,o.kt)("p",null,"Example 2:"),(0,o.kt)("p",null,"Given the following documents in the scores collection:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"{ _id: 1, results: [ 82, 85, 88 ] }\n{ _id: 2, results: [ 75, 88, 89 ] }\n")),(0,o.kt)("p",null,"The following query matches only those documents where the results array contains at least one element that is both greater than or equal to 80 and is less than 85:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"db.scores.find(\n   { results: { $elemMatch: { $gte: 80, $lt: 85 } } }\n)\n")),(0,o.kt)("p",null,"The query returns the following document since the element 82 is both greater than or equal to 80 and is less than 85:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'{ "_id" : 1, "results" : [ 82, 85, 88 ] }\n')),(0,o.kt)("h4",{id:"lab"},"Lab"),(0,o.kt)("p",null,"How many companies in the sample_training.companies collection have offices in the city of Seattle?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'{ "offices.city": "Seattle"  }\n')),(0,o.kt)("p",null,"or $elemMatch operator allows us to specify multiple criteria on an array of embedded documents such that at least one embedded document satisfies all the specified criteria:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'{ "offices": { $elemMatch: { city: "Seattle" } } }\n')),(0,o.kt)("h4",{id:"important"},"IMPORTANT"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\\$elemMatch is not the same logic as dot notation.")," $elemMatch requires the same nested elements to have the values. Using dot notation allows for any nested elements to have these values."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"{ _id : 1 , array : [ { a : 1 , b : 2 } , { a : 3 , b : 3 } ] }\n{ _id : 2 , array : [ { a : 1 , b : 3 } , { a : 3 , b : 4 } ] }\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"find( { array.a : 1 , array.b : 3 } ) // will find both documents.\nfind( { array : { $elemMatch : { a : 1 , b : 3 } } } ) // will only find _id:2.\n")),(0,o.kt)("p",null,"More info here: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/tutorial/query-array-of-documents/"},"Documentation")),(0,o.kt)("h3",{id:"array-operators-and-sub-documents"},"Array Operators and Sub-Documents"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Dot-notation is used to access sub documents"),(0,o.kt)("li",{parentName:"ul"},"With this notation we can access arbitrarily deep nested fields")),(0,o.kt)("p",null,"Examples:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'// 1 level deep\ndb.trips.findOne({ "start station location.type": "Point" })\n\n// 4 levels deep (0 indicates first array element in this case)\ndb.companies.find({ "relationships.0.person.last_name": "Zuckerberg" },\n                  { "name": 1 }).pretty()\n')),(0,o.kt)("h4",{id:"lab-1-1"},"Lab 1"),(0,o.kt)("p",null,"How many trips in the sample_training.trips collection started at stations that are to the west of the -74 longitude coordinate?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'{ "start station location.coordinates.0": {"$lt": -74} }\n')),(0,o.kt)("h4",{id:"lab-2-1"},"Lab 2"),(0,o.kt)("p",null,"How many inspections from the sample_training.inspections collection were conducted in the city of NEW YORK?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'{ "address.city": "NEW YORK" }\n')))}d.isMDXComponent=!0},1712:function(e,t,a){t.Z=a.p+"assets/images/aggregation-7fef12b6bea9c6817881115d6a317aee.PNG"},5308:function(e,t,a){t.Z=a.p+"assets/images/and-39c4205db394466de4ac6d6331012b4d.png"},8767:function(e,t,a){t.Z=a.p+"assets/images/implicitAnd-0e815688b1a402ade96f5930d1cb8459.png"}}]);