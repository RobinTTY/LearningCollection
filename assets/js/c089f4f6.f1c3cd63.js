"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[4634],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=i,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6440:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),o=["components"],l={id:"dataObfuscation",title:"Data Obfuscation",sidebar_position:1},s=void 0,u={unversionedId:"Security/dataObfuscation",id:"Security/dataObfuscation",title:"Data Obfuscation",description:"- Category: Command and Control (C2)",source:"@site/docs/Security/Data Obfuscation.md",sourceDirName:"Security",slug:"/Security/dataObfuscation",permalink:"/LearningCollection/Security/dataObfuscation",editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/Security/Data Obfuscation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"dataObfuscation",title:"Data Obfuscation",sidebar_position:1},sidebar:"mySidebar",previous:{title:"Commonly Used Commands",permalink:"/LearningCollection/Linux/commonlyUsedCommands"},next:{title:"Trusted Developer Utilities Proxy Execution",permalink:"/LearningCollection/Security/trustedDeveloperUtilities"}},c={},p=[{value:"Examples of Data Obfuscation",id:"examples-of-data-obfuscation",level:2},{value:"Data Obfuscation via Images",id:"data-obfuscation-via-images",level:3},{value:"APT29 approach (Operation Ghost)",id:"apt29-approach-operation-ghost",level:4},{value:"Data Obfuscation via Junk Data",id:"data-obfuscation-via-junk-data",level:3},{value:"Sunburst approach",id:"sunburst-approach",level:4},{value:"Detection",id:"detection",level:2},{value:"Mitigation",id:"mitigation",level:2}],d={toc:p};function m(e){var t=e.components,l=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Category: Command and Control (C2)"),(0,r.kt)("li",{parentName:"ul"},"Goal: Make C&C traffic harder to detect")),(0,r.kt)("p",null,"With data obfuscation an attacker wants to make the necessary C&C traffic harder to detect. This can happen by various means and doesn't have to involve encryption. This encompasses many methods, such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"adding junk data to protocol traffic"),(0,r.kt)("li",{parentName:"ul"},"using steganography"),(0,r.kt)("li",{parentName:"ul"},"impersonating legitimate protocols.")),(0,r.kt)("h2",{id:"examples-of-data-obfuscation"},"Examples of Data Obfuscation"),(0,r.kt)("h3",{id:"data-obfuscation-via-images"},"Data Obfuscation via Images"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://attack.mitre.org/groups/G0001/"},"Axiom"),", a cyber espionage group suspected to be associated with the Chinese government ",(0,r.kt)("a",{parentName:"li",href:"http://www.novetta.com/wp-content/uploads/2014/11/Executive_Summary-Final_1.pdf"},"used the PNG file format")," as the carrier format for data to and from the C2"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://attack.mitre.org/groups/G0016/"},"APT29"),", a threat group that has been attributed to Russia's Foreign Intelligence Service also ",(0,r.kt)("a",{parentName:"li",href:"https://www.welivesecurity.com/wp-content/uploads/2019/10/ESET_Operation_Ghost_Dukes.pdf"},"used images to hide C2")," communications")),(0,r.kt)("h4",{id:"apt29-approach-operation-ghost"},"APT29 approach (Operation Ghost)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A data blob containing encrypted data is appended to the end the downloaded file"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"allows data to be easily included in a JPEG or PNG image download in a way that means the image remains valid"),(0,r.kt)("li",{parentName:"ul"},"this also makes them look like legitimate traffic (the user just wants to download an image)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To extract the payload from the file downloaded from the C&C server, the malware will first decrypt the last eight bytes:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"apt29",src:a(2164).Z,width:"2014",height:"409"})),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"These bytes contain offset to the embedded blob relative to the end of the file and"),(0,r.kt)("li",{parentName:"ul"},"a value used as integrity check"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Now that the payload location is known, the malware can decrypt it and execute further commands"))),(0,r.kt)("p",null,"This method of hiding C2 traffic falls under steganography. There are ",(0,r.kt)("a",{parentName:"p",href:"https://attack.mitre.org/techniques/T1001/002/"},"many more examples")," of it."),(0,r.kt)("h3",{id:"data-obfuscation-via-junk-data"},"Data Obfuscation via Junk Data"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://attack.mitre.org/software/S0559/"},"Sunburst"),", a trojanized DLL designed to fit within the SolarWinds Orion software update framework, added junk bytes to its C2 over HTTP (this is another malware from the APT29 group)")),(0,r.kt)("h4",{id:"sunburst-approach"},"Sunburst approach"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sunburst uses encrypted traffic to communicate with the C2 server",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"if the message exceeds 10 000 bytes in size, the data is sent in a false JSON blob:"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("img",{parentName:"li",src:"https://symantec-enterprise-blogs.security.com/sites/default/files/styles/blogs_inline_medium/public/2021-01/Figure%202.png?itok=0S0H9tkT",alt:"json"}),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This is not a real example of the C2 traffic.")))))),(0,r.kt)("li",{parentName:"ul"},"The encrypted data to send is broken into multiple variable sized chunks"),(0,r.kt)("li",{parentName:"ul"},"The size of each chunk is randomly determined, but generally will go from smaller to larger"),(0,r.kt)("li",{parentName:"ul"},"Each chunk is then encoded and added to the JSON blob and sent as the HTTP(S) POST data with a Content-Type header set to application/json"),(0,r.kt)("li",{parentName:"ul"},"On receipt, the attacker will need to decode and concatenate all the Message chunks, ",(0,r.kt)("strong",{parentName:"li"},"skipping junk chunks where the Timestamp second bit is not set"),".")),(0,r.kt)("h2",{id:"detection"},"Detection"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Analyze network data for uncommon data flows (e.g., a client sending significantly more data than it receives from a server)"),(0,r.kt)("li",{parentName:"ul"},"Processes utilizing the network that do not normally have network communication or have never been seen before are suspicious"),(0,r.kt)("li",{parentName:"ul"},"Analyze packet contents to detect communications that do not follow the expected protocol behavior for the port that is being used")),(0,r.kt)("h2",{id:"mitigation"},"Mitigation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Network Intrusion Prevention (intrusion detection signatures to block traffic at network boundaries)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Analysis can be based on:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Address matching"),(0,r.kt)("li",{parentName:"ul"},"Generic pattern matching"),(0,r.kt)("li",{parentName:"ul"},"TCP connection analysis"),(0,r.kt)("li",{parentName:"ul"},"Packet anomaly detection"),(0,r.kt)("li",{parentName:"ul"},"Traffic anomaly detection"),(0,r.kt)("li",{parentName:"ul"},"etc.")))))))}m.isMDXComponent=!0},2164:function(e,t,a){t.Z=a.p+"assets/images/apt29-12b4f5ef0f65c3a1f84e0fd398065e32.PNG"}}]);