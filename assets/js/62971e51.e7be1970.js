"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[5611],{4905:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var t=s(4848),r=s(8453);const i={id:"jupyterhub",title:"Jupyter Hub",sidebar_position:4},l=void 0,o={id:"tools/jupyterhub",title:"Jupyter Hub",description:"What JupyterHub does (from the Jupyter Website)",source:"@site/docs/tools/JupyterHub.md",sourceDirName:"tools",slug:"/tools/jupyterhub",permalink:"/LearningCollection/tools/jupyterhub",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/tools/JupyterHub.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"jupyterhub",title:"Jupyter Hub",sidebar_position:4},sidebar:"docs",previous:{title:"ANTLR",permalink:"/LearningCollection/tools/antlr"},next:{title:"Commonly Used Commands",permalink:"/LearningCollection/linux/commonlyUsedCommands"}},a={},h=[{value:"What JupyterHub does (from the Jupyter Website)",id:"what-jupyterhub-does-from-the-jupyter-website",level:2},{value:"Running JupyterHub on a Server",id:"running-jupyterhub-on-a-server",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Steps to Install TLJH",id:"steps-to-install-tljh",level:2},{value:"Adding Users",id:"adding-users",level:3},{value:"User Permissions",id:"user-permissions",level:3},{value:"Which user owns which process",id:"which-user-owns-which-process",level:3},{value:"Enable HTTPS",id:"enable-https",level:2},{value:"Creating and managing different kernel/virtual environments",id:"creating-and-managing-different-kernelvirtual-environments",level:2},{value:"Show Server Logs",id:"show-server-logs",level:2},{value:"Stop JupyterHub",id:"stop-jupyterhub",level:2},{value:"Miscellaneous CLI Commands",id:"miscellaneous-cli-commands",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h2,{id:"what-jupyterhub-does-from-the-jupyter-website",children:["What JupyterHub does (from ",(0,t.jsx)(n.a,{href:"https://jupyter.org/hub",children:"the Jupyter Website"}),")"]}),"\n",(0,t.jsx)(n.p,{children:"JupyterHub brings the power of notebooks to groups of users. It gives users access to computational environments and resources without burdening the users with installation and maintenance tasks."}),"\n",(0,t.jsx)(n.h2,{id:"running-jupyterhub-on-a-server",children:"Running JupyterHub on a Server"}),"\n",(0,t.jsx)(n.p,{children:'JupyterHub can be deployed in different ways for different kind of needs. "The Littlest JupyterHub" or "TLJH" is a deployment option for 1-100 users.'}),"\n",(0,t.jsxs)(n.p,{children:["Deploying this environment trough docker is not possible as stated on the Jupyter ",(0,t.jsx)(n.a,{href:"https://tljh.jupyter.org/en/latest/install/custom-server.html",children:"website"}),"."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Running TLJH inside a docker container is not supported, since we depend on systemd."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"requirements",children:"Requirements"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["A server running Ubuntu 18.04 where you have ",(0,t.jsx)(n.strong,{children:"root access"})," (Ubuntu 19.10 works too/other versions not tested)"]}),"\n",(0,t.jsx)(n.li,{children:"768MB RAM"}),"\n",(0,t.jsx)(n.li,{children:"ssh & shell access"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"steps-to-install-tljh",children:"Steps to Install TLJH"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Using a terminal program, SSH into your server. This should give you a prompt where you can type commands."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Make sure you have python3, python3-dev, curl and git installed."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt install python3 python3-dev git curl\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Get the TLJH code and determine the admin user who will be able to set up JupyterHub"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl https://raw.githubusercontent.com/jupyterhub/the-littlest-jupyterhub/master/bootstrap/bootstrap.py | sudo -E python3 - --admin <admin-user-name>\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Login with your Admin user (this step sets your password)"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"adding-users",children:"Adding Users"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Goto Control Panel -> Admin -> Add User"}),"\n",(0,t.jsx)(n.li,{children:"You can add several users, one per line"}),"\n",(0,t.jsx)(n.li,{children:"They will set their password the first time they log in"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"user-permissions",children:"User Permissions"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A user can spawn a terminal"}),"\n",(0,t.jsx)(n.li,{children:"A user has no sudo rights"}),"\n",(0,t.jsx)(n.li,{children:"A user can install pip packages with the --user option"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"which-user-owns-which-process",children:"Which user owns which process"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"linux-ps",src:s(2182).A+"",width:"1846",height:"470"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'User "jupyter+ runs the spawned kernels (ipykernel_launcher) and a process for each user. The kernels are spawned after a user creates a notebook.'}),"\n",(0,t.jsx)(n.li,{children:"Users are registered as standard (non-root) users in Linux"}),"\n",(0,t.jsx)(n.li,{children:"Notebooks use the kernel"}),"\n",(0,t.jsx)(n.li,{children:"Server which is used for each user is hosted in jupyterhub-singleuser"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"enable-https",children:"Enable HTTPS"}),"\n",(0,t.jsxs)(n.p,{children:["Enabling HTTPS is relatively easy and can be done after the installation is finished.",(0,t.jsx)(n.br,{}),"\n","The necessary shell commands are the following for the manual method:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-CLI",children:"sudo tljh-config set https.enabled true\nsudo tljh-config set https.tls.key /etc/mycerts/mydomain.key\nsudo tljh-config set https.tls.cert /etc/mycerts/mydomain.cert\nsudo tljh-config reload proxy\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The certificate path is an example and must be supplied with a valid path to the certificate/key which is to be used.",(0,t.jsx)(n.br,{}),"\n","After completing this setup the Hub should be accessible by https.\nThe setup should look something like this:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"HttpsSetup",src:s(453).A+"",width:"1247",height:"476"})}),"\n",(0,t.jsx)(n.p,{children:"Accessing the site should then look like this (notice the padlock and https connection):"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"HttpsAccess",src:s(2574).A+"",width:"1274",height:"677"})}),"\n",(0,t.jsx)(n.h2,{id:"creating-and-managing-different-kernelvirtual-environments",children:"Creating and managing different kernel/virtual environments"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-CLI",children:"python -m ipykernel install --user --name=my-env-name\n"})}),"\n",(0,t.jsx)(n.p,{children:"List available kernels:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-CLI",children:"jupyter kernelspec list\n"})}),"\n",(0,t.jsx)(n.h2,{id:"show-server-logs",children:"Show Server Logs"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo journalctl -u jupyterhub\n"})}),"\n",(0,t.jsx)(n.h2,{id:"stop-jupyterhub",children:"Stop JupyterHub"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo service jupyterhub stop\n"})}),"\n",(0,t.jsx)(n.h2,{id:"miscellaneous-cli-commands",children:"Miscellaneous CLI Commands"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"sudo service jupyterhub start"}),"\n",(0,t.jsx)(n.li,{children:"sudo service jupyterhub stop"}),"\n",(0,t.jsx)(n.li,{children:"sudo update-rc.d jupyterhub defaults (start on boot)"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},453:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/httpsConfiguration-aa03ec54e81113096fd0562ed3189202.PNG"},2574:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/hubWithHttps-29a3f2405280add9e7a2513390a36795.PNG"},2182:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/linux-ps-2e15b5fc029fc76e5991acbb937ca4e2.png"},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>o});var t=s(6540);const r={},i=t.createContext(r);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);