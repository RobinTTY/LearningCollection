"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[2945],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=c(t),d=r,b=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return t?o.createElement(b,l(l({ref:n},p),{},{components:t})):o.createElement(b,l({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var c=2;c<i;c++)l[c]=t[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4776:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return u}});var o=t(7462),r=t(3366),i=(t(7294),t(3905)),l=["components"],a={id:"tools-ansible-cli-commands",title:"Important CLI commands",sidebar_position:4},s=void 0,c={unversionedId:"Tools/Ansible/tools-ansible-cli-commands",id:"Tools/Ansible/tools-ansible-cli-commands",title:"Important CLI commands",description:"- ssh-keygen - generate new ssh-key",source:"@site/docs/Tools/Ansible/CLI.md",sourceDirName:"Tools/Ansible",slug:"/Tools/Ansible/tools-ansible-cli-commands",permalink:"/LearningCollection/Tools/Ansible/tools-ansible-cli-commands",editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/Tools/Ansible/CLI.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"tools-ansible-cli-commands",title:"Important CLI commands",sidebar_position:4},sidebar:"mySidebar",previous:{title:"Control Node Environment",permalink:"/LearningCollection/Tools/Ansible/tools-ansible-control-node-environment"},next:{title:"Writing Playbooks",permalink:"/LearningCollection/Tools/Ansible/tools-ansible-writing-playbooks"}},p={},u=[],m={toc:u};function d(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ssh-keygen")," - generate new ssh-key"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ssh-copy-id [ip-address]")," - copy ssh-key to target host"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ansible -m ping all")," - ping all hosts defined in the ansible hosts file"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ansible -m shell -a 'hostname' all")," - execute a command in bash on all hosts"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ansible-playbook [playbook-name]")," - execute the given playbook")),(0,i.kt)("p",null,"Keys are added to ~/.ssh/known_hosts"))}d.isMDXComponent=!0}}]);