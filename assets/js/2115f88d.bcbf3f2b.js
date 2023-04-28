"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[5441],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),h=s,m=c["".concat(i,".").concat(h)]||c[h]||d[h]||a;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,l=new Array(a);l[0]=h;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:s,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1586:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=n(7462),s=(n(7294),n(3905));const a={id:"jupyterhub",title:"Jupyter Hub",sidebar_position:4},l=void 0,o={unversionedId:"Tools/jupyterhub",id:"Tools/jupyterhub",title:"Jupyter Hub",description:"What JupyterHub does (from the Jupyter Website)",source:"@site/docs/Tools/JupyterHub.md",sourceDirName:"Tools",slug:"/Tools/jupyterhub",permalink:"/LearningCollection/Tools/jupyterhub",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/Tools/JupyterHub.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"jupyterhub",title:"Jupyter Hub",sidebar_position:4},sidebar:"finance",previous:{title:"ANTLR",permalink:"/LearningCollection/Tools/antlr"},next:{title:"Commonly Used Commands",permalink:"/LearningCollection/Linux/commonlyUsedCommands"}},i={},u=[{value:"What JupyterHub does (from the Jupyter Website)",id:"what-jupyterhub-does-from-the-jupyter-website",level:2},{value:"Running JupyterHub on a Server",id:"running-jupyterhub-on-a-server",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Steps to Install TLJH",id:"steps-to-install-tljh",level:2},{value:"Adding Users",id:"adding-users",level:3},{value:"User Permissions",id:"user-permissions",level:3},{value:"Which user owns which process",id:"which-user-owns-which-process",level:3},{value:"Enable HTTPS",id:"enable-https",level:2},{value:"Creating and managing different kernel/virtual environments",id:"creating-and-managing-different-kernelvirtual-environments",level:2},{value:"Show Server Logs",id:"show-server-logs",level:2},{value:"Stop JupyterHub",id:"stop-jupyterhub",level:2},{value:"Miscellaneous CLI Commands",id:"miscellaneous-cli-commands",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...a}=e;return(0,s.kt)(c,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"what-jupyterhub-does-from-the-jupyter-website"},"What JupyterHub does (from ",(0,s.kt)("a",{parentName:"h2",href:"https://jupyter.org/hub"},"the Jupyter Website"),")"),(0,s.kt)("p",null,"JupyterHub brings the power of notebooks to groups of users. It gives users access to computational environments and resources without burdening the users with installation and maintenance tasks."),(0,s.kt)("h2",{id:"running-jupyterhub-on-a-server"},"Running JupyterHub on a Server"),(0,s.kt)("p",null,'JupyterHub can be deployed in different ways for different kind of needs. "The Littlest JupyterHub" or "TLJH" is a deployment option for 1-100 users.'),(0,s.kt)("p",null,"Deploying this environment trough docker is not possible as stated on the Jupyter ",(0,s.kt)("a",{parentName:"p",href:"https://tljh.jupyter.org/en/latest/install/custom-server.html"},"website"),"."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Running TLJH inside a docker container is not supported, since we depend on systemd.")),(0,s.kt)("h3",{id:"requirements"},"Requirements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"A server running Ubuntu 18.04 where you have ",(0,s.kt)("strong",{parentName:"li"},"root access")," (Ubuntu 19.10 works too/other versions not tested)"),(0,s.kt)("li",{parentName:"ul"},"768MB RAM"),(0,s.kt)("li",{parentName:"ul"},"ssh & shell access")),(0,s.kt)("h2",{id:"steps-to-install-tljh"},"Steps to Install TLJH"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Using a terminal program, SSH into your server. This should give you a prompt where you can type commands.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Make sure you have python3, python3-dev, curl and git installed."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install python3 python3-dev git curl\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Get the TLJH code and determine the admin user who will be able to set up JupyterHub"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://raw.githubusercontent.com/jupyterhub/the-littlest-jupyterhub/master/bootstrap/bootstrap.py | sudo -E python3 - --admin <admin-user-name>\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Login with your Admin user (this step sets your password)"))),(0,s.kt)("h3",{id:"adding-users"},"Adding Users"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Goto Control Panel -> Admin -> Add User"),(0,s.kt)("li",{parentName:"ol"},"You can add several users, one per line"),(0,s.kt)("li",{parentName:"ol"},"They will set their password the first time they log in")),(0,s.kt)("h3",{id:"user-permissions"},"User Permissions"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"A user can spawn a terminal"),(0,s.kt)("li",{parentName:"ul"},"A user has no sudo rights"),(0,s.kt)("li",{parentName:"ul"},"A user can install pip packages with the --user option")),(0,s.kt)("h3",{id:"which-user-owns-which-process"},"Which user owns which process"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"linux-ps",src:n(7185).Z,width:"1846",height:"470"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},'User "jupyter+ runs the spawned kernels (ipykernel_launcher) and a process for each user. The kernels are spawned after a user creates a notebook.'),(0,s.kt)("li",{parentName:"ul"},"Users are registered as standard (non-root) users in Linux"),(0,s.kt)("li",{parentName:"ul"},"Notebooks use the kernel"),(0,s.kt)("li",{parentName:"ul"},"Server which is used for each user is hosted in jupyterhub-singleuser")),(0,s.kt)("h2",{id:"enable-https"},"Enable HTTPS"),(0,s.kt)("p",null,"Enabling HTTPS is relatively easy and can be done after the installation is finished.",(0,s.kt)("br",{parentName:"p"}),"\n","The necessary shell commands are the following for the manual method:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-CLI"},"sudo tljh-config set https.enabled true\nsudo tljh-config set https.tls.key /etc/mycerts/mydomain.key\nsudo tljh-config set https.tls.cert /etc/mycerts/mydomain.cert\nsudo tljh-config reload proxy\n")),(0,s.kt)("p",null,"The certificate path is an example and must be supplied with a valid path to the certificate/key which is to be used.",(0,s.kt)("br",{parentName:"p"}),"\n","After completing this setup the Hub should be accessible by https.\nThe setup should look something like this:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"HttpsSetup",src:n(9297).Z,width:"1247",height:"476"})),(0,s.kt)("p",null,"Accessing the site should then look like this (notice the padlock and https connection):"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"HttpsAccess",src:n(3076).Z,width:"1274",height:"677"})),(0,s.kt)("h2",{id:"creating-and-managing-different-kernelvirtual-environments"},"Creating and managing different kernel/virtual environments"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-CLI"},"python -m ipykernel install --user --name=my-env-name\n")),(0,s.kt)("p",null,"List available kernels:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-CLI"},"jupyter kernelspec list\n")),(0,s.kt)("h2",{id:"show-server-logs"},"Show Server Logs"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo journalctl -u jupyterhub\n")),(0,s.kt)("h2",{id:"stop-jupyterhub"},"Stop JupyterHub"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo service jupyterhub stop\n")),(0,s.kt)("h2",{id:"miscellaneous-cli-commands"},"Miscellaneous CLI Commands"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"sudo service jupyterhub start"),(0,s.kt)("li",{parentName:"ul"},"sudo service jupyterhub stop"),(0,s.kt)("li",{parentName:"ul"},"sudo update-rc.d jupyterhub defaults (start on boot)")))}d.isMDXComponent=!0},9297:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/httpsConfiguration-aa03ec54e81113096fd0562ed3189202.PNG"},3076:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/hubWithHttps-29a3f2405280add9e7a2513390a36795.PNG"},7185:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/linux-ps-2e15b5fc029fc76e5991acbb937ca4e2.png"}}]);