"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[4320],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(i,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9851:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],s={},i="Metasploit",u={unversionedId:"Security/Kali Linux/Metasploit",id:"Security/Kali Linux/Metasploit",title:"Metasploit",description:"The Metasploit Project is a computer security project that provides information about security vulnerabilities and aids in penetration testing and IDS signature development. It is owned by Boston, Massachusetts-based security company Rapid7.",source:"@site/docs/Security/Kali Linux/Metasploit.md",sourceDirName:"Security/Kali Linux",slug:"/Security/Kali Linux/Metasploit",permalink:"/LearningCollection/Security/Kali Linux/Metasploit",editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/Security/Kali Linux/Metasploit.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"DLL Side-Loading",permalink:"/LearningCollection/Security/dllSideLoading"},next:{title:"Interesting Topics",permalink:"/LearningCollection/Interesting Topics/interestingTopics"}},c={},p=[{value:"Start Metasploit",id:"start-metasploit",level:2},{value:"Set a global parameter",id:"set-a-global-parameter",level:2},{value:"Search for a module",id:"search-for-a-module",level:2},{value:"Examples",id:"examples",level:3},{value:"Load a module",id:"load-a-module",level:2},{value:"Examples",id:"examples-1",level:3},{value:"Show module info",id:"show-module-info",level:2},{value:"Set an option of a module",id:"set-an-option-of-a-module",level:2},{value:"Example",id:"example",level:3},{value:"Start exploit",id:"start-exploit",level:2},{value:"Sessions",id:"sessions",level:2},{value:"Switch current session to the background",id:"switch-current-session-to-the-background",level:3},{value:"Switch session to the foreground",id:"switch-session-to-the-foreground",level:3},{value:"Load a module in a session",id:"load-a-module-in-a-session",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"metasploit"},"Metasploit"),(0,l.kt)("p",null,"The Metasploit Project is a computer security project that provides information about security vulnerabilities and aids in penetration testing and IDS signature development. It is owned by Boston, Massachusetts-based security company Rapid7."),(0,l.kt)("h2",{id:"start-metasploit"},"Start Metasploit"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"msfconsole\n")),(0,l.kt)("h2",{id:"set-a-global-parameter"},"Set a global parameter"),(0,l.kt)("p",null,"To set a global parameter we use:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"setg <parameterName> <parameterValue>\n")),(0,l.kt)("h2",{id:"search-for-a-module"},"Search for a module"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"search [<options>] [<keywords>:<value>]\n")),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"search cve:2009 type:exploit\nsearch cve:2009 type:exploit platform:-linux\nsearch cve:2009 -s name\nsearch type:exploit -s type -r\n")),(0,l.kt)("h2",{id:"load-a-module"},"Load a module"),(0,l.kt)("p",null,"Interact with a module by name or search term/index.\nIf a module name is not found, it will be treated as a search term.\nAn index from the previous search results can be selected if desired."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"use <name|term|index>\n")),(0,l.kt)("h3",{id:"examples-1"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"use exploit/multi/http/apache_mod_cgi_bash_env_exec\n")),(0,l.kt)("h2",{id:"show-module-info"},"Show module info"),(0,l.kt)("p",null,"When a module is currently loaded:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"show info       # basic info\nshow advanced   # advanced info\n")),(0,l.kt)("h2",{id:"set-an-option-of-a-module"},"Set an option of a module"),(0,l.kt)("p",null,"When a module is currently loaded:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"set <optionName> <optionValue>\n")),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"set RHOSTS 192.168.178.10\n")),(0,l.kt)("h2",{id:"start-exploit"},"Start exploit"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"run\n")),(0,l.kt)("h2",{id:"sessions"},"Sessions"),(0,l.kt)("h3",{id:"switch-current-session-to-the-background"},"Switch current session to the background"),(0,l.kt)("p",null,"It can be helpful to switch a session to the background when interacting with a shell on a target. We can use ",(0,l.kt)("em",{parentName:"p"},'"bg"')," to switch the current session to the background:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"bg\n")),(0,l.kt)("h3",{id:"switch-session-to-the-foreground"},"Switch session to the foreground"),(0,l.kt)("p",null,"To get a session back to the fremground, we use ",(0,l.kt)("em",{parentName:"p"},'"sessions"')," to list all active sessions."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sessions\n")),(0,l.kt)("p",null,"Switch to an active session:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sessions <index>\n")),(0,l.kt)("h2",{id:"load-a-module-in-a-session"},"Load a module in a session"),(0,l.kt)("p",null,"We can load module in a session (e.g. on a target host) by using:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"use <moduleName>\nset SESSION <sessionIndex>\nrun\n")),(0,l.kt)("p",null,"This will launch the module in the target session."))}m.isMDXComponent=!0}}]);