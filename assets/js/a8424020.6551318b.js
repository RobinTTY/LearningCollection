"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[253],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>y});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),p=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return a.createElement(s.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=n,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(y,i(i({ref:r},c),{},{components:t})):a.createElement(y,i({ref:r},c))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},903:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(7462),n=(t(7294),t(3905));const o={id:"recordTypes",title:"Record Types",sidebar_position:1},i=void 0,l={unversionedId:"C-Sharp/Core Concepts/Types/recordTypes",id:"C-Sharp/Core Concepts/Types/recordTypes",title:"Record Types",description:"Introduced in C# 9, records are a new reference type that can be created instead of classses or structs. C# 10 additionally introduced the concept of record structs (record as a value type).",source:"@site/docs/C-Sharp/Core Concepts/Types/RecordTypes.md",sourceDirName:"C-Sharp/Core Concepts/Types",slug:"/C-Sharp/Core Concepts/Types/recordTypes",permalink:"/LearningCollection/C-Sharp/Core Concepts/Types/recordTypes",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/C-Sharp/Core Concepts/Types/RecordTypes.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"recordTypes",title:"Record Types",sidebar_position:1},sidebar:"finance",previous:{title:"Data Fetching",permalink:"/LearningCollection/apis/graphql/hot-chocolate/data-fetching"},next:{title:"Null-conditional operator (?)",permalink:"/LearningCollection/C-Sharp/Core Concepts/Operators/nullConditionalOperator"}},s={},p=[{value:"Example Record",id:"example-record",level:2},{value:"Advanced concepts",id:"advanced-concepts",level:3},{value:"Reference",id:"reference",level:2}],c={toc:p},d="wrapper";function u(e){let{components:r,...t}=e;return(0,n.kt)(d,(0,a.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Introduced in C# 9, ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/record"},"records")," are a new reference type that can be created instead of classses or structs. C# 10 additionally introduced the concept of record structs (record as a value type)."),(0,n.kt)("p",null,"The important things first:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Records are distinct from classes in that record types use ",(0,n.kt)("strong",{parentName:"li"},"value-based equality"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"That means: Two variables of a record type are equal if the record type definitions are identical, and if for every field, the values in both records are equal"))),(0,n.kt)("li",{parentName:"ul"},"When do we use records/classes/stucts:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"You use ",(0,n.kt)("inlineCode",{parentName:"li"},"class")," definitions to create object-oriented hierarchies that focus on the responsibilities and behavior of objects"),(0,n.kt)("li",{parentName:"ul"},"You create ",(0,n.kt)("inlineCode",{parentName:"li"},"struct")," types for data structures that store data and are small enough to copy efficiently"),(0,n.kt)("li",{parentName:"ul"},"You create ",(0,n.kt)("inlineCode",{parentName:"li"},"record")," types when you want value-based equality and comparison, don't want to copy values, and want to use reference variables"),(0,n.kt)("li",{parentName:"ul"},"You create ",(0,n.kt)("inlineCode",{parentName:"li"},"record struct")," types when you want the features of records for a type that is small enough to copy efficiently")))),(0,n.kt)("p",null,"Some more details:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"To enforce value semantics, the compiler generates several methods for a record type:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"An override of ",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.object.equals#system-object-equals(system-object)"},(0,n.kt)("inlineCode",{parentName:"a"},"Object.Equals(Object)"))),(0,n.kt)("li",{parentName:"ul"},"A virtual Equals method whose parameter is the record type"),(0,n.kt)("li",{parentName:"ul"},"An override of ",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.object.gethashcode#system-object-gethashcode"},(0,n.kt)("inlineCode",{parentName:"a"},"Object.GetHashCode()"))),(0,n.kt)("li",{parentName:"ul"},"Methods for operator ",(0,n.kt)("inlineCode",{parentName:"li"},"==")," and operator ",(0,n.kt)("inlineCode",{parentName:"li"},"!=")),(0,n.kt)("li",{parentName:"ul"},"Record types implement ",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.iequatable-1"},(0,n.kt)("inlineCode",{parentName:"a"},"System.IEquatable<T>"))),(0,n.kt)("li",{parentName:"ul"},"An override of ",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.object.tostring#system-object-tostring"},(0,n.kt)("inlineCode",{parentName:"a"},"Object.ToString()")))))),(0,n.kt)("h2",{id:"example-record"},"Example Record"),(0,n.kt)("p",null,"Data and statistics are among the scenarios where you'll want to use records. Let's take the example of daily temperature data and create a struct to represent it:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public readonly record struct DailyTemperature(double HighTemp, double LowTemp);\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The preceding code defines a positional record",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("strong",{parentName:"li"},"primary constructor")," is created by the compiler in this case, which takes the ",(0,n.kt)("inlineCode",{parentName:"li"},"HighTemp")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"LowTemp")," parameters"))),(0,n.kt)("li",{parentName:"ul"},"The record is a ",(0,n.kt)("inlineCode",{parentName:"li"},"readonly")," record struct, because you don't intend to inherit from it, and it should be immutable"),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"HighTemp")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"LowTemp")," properties are init only properties, meaning they can be set in the constructor or using a property initializer (effect of the ",(0,n.kt)("inlineCode",{parentName:"li"},"readonly")," keyword)")),(0,n.kt)("p",null,"The following code creates and initializes several DailyTemperature records:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"private static DailyTemperature[] data = new DailyTemperature[]\n{\n    // named parameters\n    new DailyTemperature(HighTemp: 57, LowTemp: 30),\n    // positional parameters\n    new DailyTemperature(60, 35),\n    new DailyTemperature(63, 33),\n    new DailyTemperature(68, 29),\n    new DailyTemperature(72, 47),\n    new DailyTemperature(75, 55),\n    new DailyTemperature(77, 55),\n    new DailyTemperature(72, 58),\n    new DailyTemperature(70, 47),\n    new DailyTemperature(77, 59),\n    new DailyTemperature(85, 65),\n    new DailyTemperature(87, 65),\n    new DailyTemperature(85, 72),\n    new DailyTemperature(83, 68),\n    new DailyTemperature(77, 65),\n    new DailyTemperature(72, 58),\n    new DailyTemperature(77, 55),\n    new DailyTemperature(76, 53),\n    new DailyTemperature(80, 60),\n    new DailyTemperature(85, 66)\n};\n")),(0,n.kt)("p",null,"You can add your own properties or methods to records, including positional records:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"public readonly record struct DailyTemperature(double HighTemp, double LowTemp)\n{\n  /// <summary>\n  /// Returns the average of the high and low temperatures\n  /// </summary>\n    public double Mean => (HighTemp + LowTemp) / 2.0;\n}\n")),(0,n.kt)("p",null,"If we print the records to console with the following instruction:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"foreach (var item in data)\n    Console.WriteLine(item);\n")),(0,n.kt)("p",null,"we get the output:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cli"},"DailyTemperature { HighTemp = 57, LowTemp = 30, Mean = 43.5 }\nDailyTemperature { HighTemp = 60, LowTemp = 35, Mean = 47.5 }\n\n\nDailyTemperature { HighTemp = 80, LowTemp = 60, Mean = 70 }\nDailyTemperature { HighTemp = 85, LowTemp = 66, Mean = 75.5 }\n")),(0,n.kt)("p",null,"This comes as a result from the automatic compiler override of the ",(0,n.kt)("inlineCode",{parentName:"p"},"ToString")," method."),(0,n.kt)("h3",{id:"advanced-concepts"},"Advanced concepts"),(0,n.kt)("p",null,"You can express these formulas as a small hierarchy of record types:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"an abstract degree day type and two concrete types for heating degree days and cooling degree days",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"These types can also be positional records"),(0,n.kt)("li",{parentName:"ul"},"They take a baseline temperature and a sequence of daily temperature records as arguments to the primary constructor")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"/// <summary>\n/// Shared base class for both the HeatingDegreeDays and CoolingDegreeDays records\n/// </summary>\npublic abstract record DegreeDays(double BaseTemperature, IEnumerable<DailyTemperature> TempRecords);\n\npublic sealed record HeatingDegreeDays(double BaseTemperature, IEnumerable<DailyTemperature> TempRecords)\n    : DegreeDays(BaseTemperature, TempRecords)\n{\n    // base record initialization\n    public double DegreeDays => TempRecords.Where(s => s.Mean < BaseTemperature).Sum(s => BaseTemperature - s.Mean);\n}\n\npublic sealed record CoolingDegreeDays(double BaseTemperature, IEnumerable<DailyTemperature> TempRecords)\n    : DegreeDays(BaseTemperature, TempRecords)\n{\n    // base record initialization\n    public double DegreeDays => TempRecords.Where(s => s.Mean > BaseTemperature).Sum(s => s.Mean - BaseTemperature);\n}\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Your derived record declares parameters for all the parameters in the base record primary constructor",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The base record declares and initializes those properties"),(0,n.kt)("li",{parentName:"ul"},"The derived record doesn't hide them, but only creates and initializes properties for parameters that aren't declared in its base record"),(0,n.kt)("li",{parentName:"ul"},"In this example, the derived records don't add new primary constructor parameters.")))),(0,n.kt)("p",null,"If we now declare the following variables and print them:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"var heatingDegreeDays = new HeatingDegreeDays(65, data);\nConsole.WriteLine(heatingDegreeDays);\n\nvar coolingDegreeDays = new CoolingDegreeDays(65, data);\nConsole.WriteLine(coolingDegreeDays);\n")),(0,n.kt)("p",null,"we get:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-txt"},"HeatingDegreeDays { BaseTemperature = 65, TempRecords = record_types.DailyTemperature[], DegreeDays = 85 }\nCoolingDegreeDays { BaseTemperature = 65, TempRecords = record_types.DailyTemperature[], DegreeDays = 71.5 }\n")),(0,n.kt)("p",null,'In this case it makes sense to "override" the compiler synthesized ',(0,n.kt)("inlineCode",{parentName:"p"},"ToString")," method to display the data more appropriately. But we don't actually use the ",(0,n.kt)("inlineCode",{parentName:"p"},"override")," keyword, instead we use something called ",(0,n.kt)("inlineCode",{parentName:"p"},"PrintMembers"),", which provide are a better option for inheritance scenarios."),(0,n.kt)("p",null,"The signature of ",(0,n.kt)("inlineCode",{parentName:"p"},"PrintMembers")," we need to use, depends on the record type:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cs"},"// If a record type is sealed, or a record struct\nprivate bool PrintMembers(StringBuilder builder);\n// If a record type isn't sealed and derives from object (that is, it doesn't declare a base record)\nprotected virtual bool PrintMembers(StringBuilder builder);\n// If a record type isn't sealed and derives from another record\nprotected override bool PrintMembers(StringBuilder builder);\n")),(0,n.kt)("p",null,"The language enforces the correct signature, so the compiler will issue a warning or errors."),(0,n.kt)("h2",{id:"reference"},"Reference"),(0,n.kt)("p",null,"This is a summary of the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/csharp/whats-new/tutorials/records"},"Microsoft docs tutorial for record types"),", more details can be found there."))}u.isMDXComponent=!0}}]);