"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[6970],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,g=u["".concat(i,".").concat(d)]||u[d]||m[d]||s;return n?a.createElement(g,r(r({ref:t},c),{},{components:n})):a.createElement(g,r({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,r=new Array(s);r[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<s;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},697:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const s={id:"tools-ansible-writing-playbooks",title:"Writing Playbooks",sidebar_position:5},r=void 0,l={unversionedId:"Tools/Ansible/tools-ansible-writing-playbooks",id:"Tools/Ansible/tools-ansible-writing-playbooks",title:"Writing Playbooks",description:"Playbooks are Ansible's configuration, deployment, and orchestration language. They can describe a policy you want your remote system to enforce, or a set of steps in a general IT process. They are expressed in YAML format and have a minimum of syntax, which intentionally tries to not be a programming language or script, but rather a model of a configuration or a process.",source:"@site/docs/Tools/Ansible/Writing Playbooks.md",sourceDirName:"Tools/Ansible",slug:"/Tools/Ansible/tools-ansible-writing-playbooks",permalink:"/LearningCollection/Tools/Ansible/tools-ansible-writing-playbooks",draft:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/Tools/Ansible/Writing Playbooks.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"tools-ansible-writing-playbooks",title:"Writing Playbooks",sidebar_position:5},sidebar:"mySidebar",previous:{title:"Important CLI commands",permalink:"/LearningCollection/Tools/Ansible/tools-ansible-cli-commands"},next:{title:"Jupyter Hub",permalink:"/LearningCollection/Tools/jupyterhub"}},i={},p=[{value:"Preconditions",id:"preconditions",level:2},{value:"Playbook example with one group of hosts",id:"playbook-example-with-one-group-of-hosts",level:2},{value:"Playbook example with multiple groups of hosts",id:"playbook-example-with-multiple-groups-of-hosts",level:2},{value:"Privilege escalation",id:"privilege-escalation",level:2},{value:"Become Directives",id:"become-directives",level:3},{value:"Using Ansible Vault",id:"using-ansible-vault",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Playbooks are Ansible's configuration, deployment, and orchestration language. They can describe a policy you want your remote system to enforce, or a set of steps in a general IT process. They are expressed in YAML format and have a minimum of syntax, which intentionally tries to not be a programming language or script, but rather a model of a configuration or a process."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Playbooks can be used to:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"manage configurations of and deployments to remote machines"),(0,o.kt)("li",{parentName:"ul"},"sequence multi-tier rollouts involving rolling updates, and can delegate actions to other hosts, interacting with monitoring servers and load balancers along the way")),(0,o.kt)("p",null,"A playbook consists of one or more 'plays' in a list. The goal of a play is to map a group aof hosts to some well defined roles, represented by tasks. A task is nothing more than a call to an ansible module in this case."),(0,o.kt)("p",null,"By composing a playbook of multiple \u2018plays\u2019, it is possible to orchestrate multi-machine deployments, running certain steps on all machines in the webservers group, then certain steps on the database server group, then more commands back on the webservers group, etc."),(0,o.kt)("h2",{id:"preconditions"},"Preconditions"),(0,o.kt)("p",null,"To create a playbook and execute it on a (group of) host(s) you need to check some preconditions:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Edit ",(0,o.kt)("inlineCode",{parentName:"li"},"/etc/ansible/hosts")," and add the host(s) you want to manage"),(0,o.kt)("li",{parentName:"ol"},"Ensure you can access all hosts via ssh keys for the most comfortable workflow"),(0,o.kt)("li",{parentName:"ol"},"Check reachability of hosts via ",(0,o.kt)("inlineCode",{parentName:"li"},"ansible all -m ping"))),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"When using Windows Subsystem for Linux, SSH keys need to be stored in the Linux filesystem to avoid permission issues.")),(0,o.kt)("h2",{id:"playbook-example-with-one-group-of-hosts"},"Playbook example with one group of hosts"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"---\n- hosts: webservers\n  vars:\n    http_port: 80\n    max_clients: 200\n  remote_user: root\n  tasks:\n    - name: ensure apache is at the latest version\n      yum:\n        name: httpd\n        state: latest\n    - name: write the apache config file\n      template:\n        src: /srv/httpd.j2\n        dest: /etc/httpd.conf\n      notify:\n        - restart apache\n    - name: ensure apache is running\n      service:\n        name: httpd\n        state: started\n  handlers:\n    - name: restart apache\n      service:\n        name: httpd\n        state: restarted\n")),(0,o.kt)("h2",{id:"playbook-example-with-multiple-groups-of-hosts"},"Playbook example with multiple groups of hosts"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"---\n- hosts: webservers # first group\n  remote_user: root\n\n  tasks:\n    - name: ensure apache is at the latest version\n      yum:\n        name: httpd\n        state: latest\n    - name: write the apache config file\n      template:\n        src: /srv/httpd.j2\n        dest: /etc/httpd.conf\n\n- hosts: databases # second group\n  remote_user: root\n\n  tasks:\n    - name: ensure postgresql is at the latest version\n      yum:\n        name: postgresql\n        state: latest\n    - name: ensure that postgresql is started\n      service:\n        name: postgresql\n        state: started\n")),(0,o.kt)("h2",{id:"privilege-escalation"},"Privilege escalation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"privilege escalation is handled by the ",(0,o.kt)("strong",{parentName:"li"},"become")," keyword"),(0,o.kt)("li",{parentName:"ul"},"setting the ",(0,o.kt)("strong",{parentName:"li"},"become")," keyword to ",(0,o.kt)("em",{parentName:"li"},"yes")," activates privilege escalation"),(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("em",{parentName:"li"},"become")," keyword can be used at the ",(0,o.kt)("strong",{parentName:"li"},"play or task")," level")),(0,o.kt)("h3",{id:"become-directives"},"Become Directives"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"become")," - privilege escalation"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"become_user")," - defines the user which is being used for privilege escalation"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"become_method")," (at play or task level) - overrides the default method set in ansible.cfg"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"become_flags")," (at play or task level) - permit the use of specific flags for the tasks or role (e.g. to change the user to nobody when the shell is set to no login)")),(0,o.kt)("p",null,"For example, to manage a system service (which requires root privileges) when ",(0,o.kt)("strong",{parentName:"p"},"connected as a non-root user, you can use the default value of become_user (root)"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: Ensure the httpd service is running\n  service:\n    name: httpd\n    state: started\n  become: yes\n")),(0,o.kt)("p",null,"To run a command ",(0,o.kt)("strong",{parentName:"p"},"as the apache user"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: Run a command as the apache user\n  command: somecommand\n  become: yes\n  become_user: apache\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note: become must be set to yes!")),(0,o.kt)("p",null,"To do something ",(0,o.kt)("strong",{parentName:"p"},"as the nobody user when the shell is nologin"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'- name: Run a command as nobody\n  command: somecommand\n  become: yes\n  become_method: su\n  become_user: nobody\n  become_flags: "-s /bin/sh"\n')),(0,o.kt)("h2",{id:"using-ansible-vault"},"Using Ansible Vault"),(0,o.kt)("p",null,"To encrypt a single variable just use the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-CLI"},"ansible-vault encrypt_string\n> New Vault password:\n> Confirm New Vault password:\n> Reading plaintext input from stdin. (ctrl-d to end input)\n> this is a plaintext string\n> !vault |\n>           $ANSIBLE_VAULT;1.1;AES256\n>           39393766663761653337386436636466396531353261383237613531356531343930663133623839\n>           3436613834303264613038623432303837393261663233640a363633343337623065613166306363\n>           37336132363462386138343535346264333061656134636631326164643035313433393831616131\n>           3635613565373939310a316132313764356432333366396533663965333162336538663432323334\n>           33656365303733303664353961363563313236396262313739343461383036333561\n> Encryption successful\n")),(0,o.kt)("p",null,"The output can be directly inserted into a playbook like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"vars:\n  ansible_become_password: !vault |\n    $ANSIBLE_VAULT;1.1;AES256\n    30323830373430623135386266613062376532313763393431666161303463616538323963663331\n    3035626232633239636637316233343734396434353561350a303561353535356163303630336633\n    30343631373034303736633435633836336539356435313932613139313963646238613134633738\n    3165306536376266650a326431616630666332396634323137393733303036626133646430656262\n    6566\n")),(0,o.kt)("p",null,"The playbook can then be executed with the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-CLI"},"ansible-playbook playbook.yml --ask-vault-pass\n")),(0,o.kt)("p",null,"The user will be prompted for the password set during the ",(0,o.kt)("inlineCode",{parentName:"p"},"ansible-vault encrypt_string")," command."))}m.isMDXComponent=!0}}]);