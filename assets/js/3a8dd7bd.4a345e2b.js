"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[1945],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return d}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=a.createContext({}),p=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=o,h=u["".concat(i,".").concat(d)]||u[d]||c[d]||l;return t?a.createElement(h,r(r({ref:n},m),{},{components:t})):a.createElement(h,r({ref:n},m))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,r=new Array(l);r[0]=u;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<l;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4387:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return m},default:function(){return u}});var a=t(7462),o=t(3366),l=(t(7294),t(3905)),r=["components"],s={id:"ansible",title:"Ansible"},i=void 0,p={unversionedId:"Tools/ansible",id:"Tools/ansible",title:"Ansible",description:"Installation",source:"@site/docs/Tools/Ansible.md",sourceDirName:"Tools",slug:"/Tools/ansible",permalink:"/LearningCollection/Tools/ansible",editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/Tools/Ansible.md",tags:[],version:"current",frontMatter:{id:"ansible",title:"Ansible"},sidebar:"mySidebar",previous:{title:"Indexing and Aggregation Pipeline",permalink:"/LearningCollection/Databases/MongoDB/M001 MongoDB Basics/IndexingAggregationsPipeline"},next:{title:"ANTLR",permalink:"/LearningCollection/Tools/antlr"}},m=[{value:"Installation",id:"installation",children:[],level:2},{value:"Terminology",id:"terminology",children:[],level:2},{value:"Managed Node Requirements",id:"managed-node-requirements",children:[],level:2},{value:"Writing Playbooks",id:"writing-playbooks",children:[{value:"Playbook example with one group of hosts",id:"playbook-example-with-one-group-of-hosts",children:[],level:3},{value:"Playbook example with multiple groups of hosts",id:"playbook-example-with-multiple-groups-of-hosts",children:[],level:3}],level:2},{value:"Control Node Environment",id:"control-node-environment",children:[],level:2},{value:"Important CLI Commands",id:"important-cli-commands",children:[],level:2},{value:"Privilege escalation",id:"privilege-escalation",children:[{value:"Become Directives",id:"become-directives",children:[],level:3}],level:2},{value:"Using Ansible Vault",id:"using-ansible-vault",children:[],level:2}],c={toc:m};function u(e){var n=e.components,t=(0,o.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html"},"Ansbile Docs"),"."),(0,l.kt)("h2",{id:"terminology"},"Terminology"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Control Node:")," Any machine with Ansible installed, can run commands and playbooks (can't be a Windows computer)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Managed Nodes:")," The network devices you manage trough Ansible. Sometimes called hosts. Ansible is not installed on managed nodes"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Inventory:")," A list of managed nodes. Can specify information like IP address for each managed node and can organize them by creating and nesting groups"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Modules:")," The units of code Ansible executes. Each module has a particular use (e.g. administering users, managing VLAN interfaces, etc.). A single module can be invoked by a task, or several can be invoked by a playbook"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Tasks:")," The units of action in Ansible. You can execute a single task once with an ad-hoc command."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Playbooks:")," Ordered lists of tasks, saved so they can run those tasks repeatedly. Can include variables as well as tasks. Written in YAML.")),(0,l.kt)("h2",{id:"managed-node-requirements"},"Managed Node Requirements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"SSH for communication (sftp by default)"),(0,l.kt)("li",{parentName:"ul"},"Python 2.6 or higher OR Python 3.5 or higher")),(0,l.kt)("h2",{id:"writing-playbooks"},"Writing Playbooks"),(0,l.kt)("p",null,"Playbooks are Ansible's configuration, deployment, and orchestration language. They can describe a policy you want your remote system to enforce, or a set of steps in a general IT process. They are expressed in YAML format and have a minimum of syntax, which intentionally tries to not be a programming language or script, but rather a model of a configuration or a process."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Playbooks can be used to:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"manage configurations of and deployments to remote machines"),(0,l.kt)("li",{parentName:"ul"},"sequence multi-tier rollouts involving rolling updates, and can delegate actions to other hosts, interacting with monitoring servers and load balancers along the way")),(0,l.kt)("p",null,"A playbook consists of one or more 'plays' in a list. The goal of a play is to map a group aof hosts to some well defined roles, represented by tasks. A task is nothing more than a call to an ansible module in this case."),(0,l.kt)("p",null,"By composing a playbook of multiple \u2018plays\u2019, it is possible to orchestrate multi-machine deployments, running certain steps on all machines in the webservers group, then certain steps on the database server group, then more commands back on the webservers group, etc."),(0,l.kt)("h3",{id:"playbook-example-with-one-group-of-hosts"},"Playbook example with one group of hosts"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"---\n- hosts: webservers\n  vars:\n    http_port: 80\n    max_clients: 200\n  remote_user: root\n  tasks:\n    - name: ensure apache is at the latest version\n      yum:\n        name: httpd\n        state: latest\n    - name: write the apache config file\n      template:\n        src: /srv/httpd.j2\n        dest: /etc/httpd.conf\n      notify:\n        - restart apache\n    - name: ensure apache is running\n      service:\n        name: httpd\n        state: started\n  handlers:\n    - name: restart apache\n      service:\n        name: httpd\n        state: restarted\n")),(0,l.kt)("h3",{id:"playbook-example-with-multiple-groups-of-hosts"},"Playbook example with multiple groups of hosts"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"---\n- hosts: webservers # first group\n  remote_user: root\n\n  tasks:\n    - name: ensure apache is at the latest version\n      yum:\n        name: httpd\n        state: latest\n    - name: write the apache config file\n      template:\n        src: /srv/httpd.j2\n        dest: /etc/httpd.conf\n\n- hosts: databases # second group\n  remote_user: root\n\n  tasks:\n    - name: ensure postgresql is at the latest version\n      yum:\n        name: postgresql\n        state: latest\n    - name: ensure that postgresql is started\n      service:\n        name: postgresql\n        state: started\n")),(0,l.kt)("h2",{id:"control-node-environment"},"Control Node Environment"),(0,l.kt)("p",null,"A control node has the following files per default under /etc/ansible:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ansible.cfg - options for ansible"),(0,l.kt)("li",{parentName:"ul"},"hosts - list of computers where ansible should execute the playbook"),(0,l.kt)("li",{parentName:"ul"},"roles - ways of automatically loading certain vars_files, tasks, and handlers based on a known file structure")),(0,l.kt)("h2",{id:"important-cli-commands"},"Important CLI Commands"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ssh-keygen - generate new ssh-key"),(0,l.kt)("li",{parentName:"ul"},"ssh-copy-id ",(0,l.kt)("inlineCode",{parentName:"li"},"[ip-address]")," - copy ssh-key to target host"),(0,l.kt)("li",{parentName:"ul"},"ansible -m ping all - ping all hosts defined in the ansible hosts file"),(0,l.kt)("li",{parentName:"ul"},"ansible -m shell -a 'hostname' all - execute a command in bash on all hosts"),(0,l.kt)("li",{parentName:"ul"},"ansible playbook ",(0,l.kt)("inlineCode",{parentName:"li"},"[playbook-name]"))),(0,l.kt)("p",null,"Keys are added to ~/.ssh/known_hosts"),(0,l.kt)("h2",{id:"privilege-escalation"},"Privilege escalation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"privilege escalation is handled by the ",(0,l.kt)("strong",{parentName:"li"},"become")," keyword"),(0,l.kt)("li",{parentName:"ul"},"setting the ",(0,l.kt)("strong",{parentName:"li"},"become")," keyword to ",(0,l.kt)("em",{parentName:"li"},"yes")," activates privilege escalation"),(0,l.kt)("li",{parentName:"ul"},"the ",(0,l.kt)("em",{parentName:"li"},"become")," keyword can be used at the ",(0,l.kt)("strong",{parentName:"li"},"play or task")," level")),(0,l.kt)("h3",{id:"become-directives"},"Become Directives"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"become")," - privilege escalation"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"become_user")," - defines the user which is being used for privilege escalation"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"become_method")," (at play or task level) - overrides the default method set in ansible.cfg"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"become_flags")," (at play or task level) - permit the use of specific flags for the tasks or role (e.g. to change the user to nobody when the shell is set to no login)")),(0,l.kt)("p",null,"For example, to manage a system service (which requires root privileges) when ",(0,l.kt)("strong",{parentName:"p"},"connected as a non-root user, you can use the default value of become_user (root)"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: Ensure the httpd service is running\n  service:\n    name: httpd\n    state: started\n  become: yes\n")),(0,l.kt)("p",null,"To run a command ",(0,l.kt)("strong",{parentName:"p"},"as the apache user"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: Run a command as the apache user\n  command: somecommand\n  become: yes\n  become_user: apache\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note: become must be set to yes!")),(0,l.kt)("p",null,"To do something ",(0,l.kt)("strong",{parentName:"p"},"as the nobody user when the shell is nologin"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'- name: Run a command as nobody\n  command: somecommand\n  become: yes\n  become_method: su\n  become_user: nobody\n  become_flags: "-s /bin/sh"\n')),(0,l.kt)("h2",{id:"using-ansible-vault"},"Using Ansible Vault"),(0,l.kt)("p",null,"To encrypt a single variable just use the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-CLI"},"ansible-vault encrypt_string\n> New Vault password:\n> Confirm New Vault password:\n> Reading plaintext input from stdin. (ctrl-d to end input)\n> this is a plaintext string\n> !vault |\n>           $ANSIBLE_VAULT;1.1;AES256\n>           39393766663761653337386436636466396531353261383237613531356531343930663133623839\n>           3436613834303264613038623432303837393261663233640a363633343337623065613166306363\n>           37336132363462386138343535346264333061656134636631326164643035313433393831616131\n>           3635613565373939310a316132313764356432333366396533663965333162336538663432323334\n>           33656365303733303664353961363563313236396262313739343461383036333561\n> Encryption successful\n")),(0,l.kt)("p",null,"The output can be directly inserted into a playbook like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"vars:\n  ansible_become_password: !vault |\n    $ANSIBLE_VAULT;1.1;AES256\n    30323830373430623135386266613062376532313763393431666161303463616538323963663331\n    3035626232633239636637316233343734396434353561350a303561353535356163303630336633\n    30343631373034303736633435633836336539356435313932613139313963646238613134633738\n    3165306536376266650a326431616630666332396634323137393733303036626133646430656262\n    6566\n")),(0,l.kt)("p",null,"The playbook can then be executed with the command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-CLI"},"ansible-playbook playbook.yml --ask-vault-pass\n")),(0,l.kt)("p",null,"The user will be prompted for the password set during the ",(0,l.kt)("inlineCode",{parentName:"p"},"ansible-vault encrypt_string")," command."))}u.isMDXComponent=!0}}]);