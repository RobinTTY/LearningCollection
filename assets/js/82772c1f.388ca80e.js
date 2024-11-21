"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[9055],{86714:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=s(74848),t=s(28453);const a={id:"tools-ansible-writing-playbooks",title:"Writing Playbooks",sidebar_position:5},i=void 0,l={id:"tools/ansible/tools-ansible-writing-playbooks",title:"Writing Playbooks",description:"Playbooks are Ansible's configuration, deployment, and orchestration language. They can describe a policy you want your remote system to enforce, or a set of steps in a general IT process. They are expressed in YAML format and have a minimum of syntax, which intentionally tries to not be a programming language or script, but rather a model of a configuration or a process.",source:"@site/docs/tools/ansible/Writing Playbooks.md",sourceDirName:"tools/ansible",slug:"/tools/ansible/tools-ansible-writing-playbooks",permalink:"/LearningCollection/tools/ansible/tools-ansible-writing-playbooks",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/tools/ansible/Writing Playbooks.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"tools-ansible-writing-playbooks",title:"Writing Playbooks",sidebar_position:5},sidebar:"docs",previous:{title:"Important CLI commands",permalink:"/LearningCollection/tools/ansible/tools-ansible-cli-commands"},next:{title:"ANTLR",permalink:"/LearningCollection/tools/antlr"}},r={},c=[{value:"Preconditions",id:"preconditions",level:2},{value:"Playbook example with one group of hosts",id:"playbook-example-with-one-group-of-hosts",level:2},{value:"Playbook example with multiple groups of hosts",id:"playbook-example-with-multiple-groups-of-hosts",level:2},{value:"Privilege escalation",id:"privilege-escalation",level:2},{value:"Become Directives",id:"become-directives",level:3},{value:"Using Ansible Vault",id:"using-ansible-vault",level:2}];function d(e){const n={admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Playbooks are Ansible's configuration, deployment, and orchestration language. They can describe a policy you want your remote system to enforce, or a set of steps in a general IT process. They are expressed in YAML format and have a minimum of syntax, which intentionally tries to not be a programming language or script, but rather a model of a configuration or a process."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Playbooks can be used to:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"manage configurations of and deployments to remote machines"}),"\n",(0,o.jsx)(n.li,{children:"sequence multi-tier rollouts involving rolling updates, and can delegate actions to other hosts, interacting with monitoring servers and load balancers along the way"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"A playbook consists of one or more 'plays' in a list. The goal of a play is to map a group aof hosts to some well defined roles, represented by tasks. A task is nothing more than a call to an ansible module in this case."}),"\n",(0,o.jsx)(n.p,{children:"By composing a playbook of multiple \u2018plays\u2019, it is possible to orchestrate multi-machine deployments, running certain steps on all machines in the webservers group, then certain steps on the database server group, then more commands back on the webservers group, etc."}),"\n",(0,o.jsx)(n.h2,{id:"preconditions",children:"Preconditions"}),"\n",(0,o.jsx)(n.p,{children:"To create a playbook and execute it on a (group of) host(s) you need to check some preconditions:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Edit ",(0,o.jsx)(n.code,{children:"/etc/ansible/hosts"})," and add the host(s) you want to manage"]}),"\n",(0,o.jsx)(n.li,{children:"Ensure you can access all hosts via ssh keys for the most comfortable workflow"}),"\n",(0,o.jsxs)(n.li,{children:["Check reachability of hosts via ",(0,o.jsx)(n.code,{children:"ansible all -m ping"})]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsx)(n.p,{children:"When using Windows Subsystem for Linux, SSH keys need to be stored in the Linux filesystem to avoid permission issues."})}),"\n",(0,o.jsx)(n.h2,{id:"playbook-example-with-one-group-of-hosts",children:"Playbook example with one group of hosts"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"---\n- hosts: webservers\n  vars:\n    http_port: 80\n    max_clients: 200\n  remote_user: root\n  tasks:\n    - name: ensure apache is at the latest version\n      yum:\n        name: httpd\n        state: latest\n    - name: write the apache config file\n      template:\n        src: /srv/httpd.j2\n        dest: /etc/httpd.conf\n      notify:\n        - restart apache\n    - name: ensure apache is running\n      service:\n        name: httpd\n        state: started\n  handlers:\n    - name: restart apache\n      service:\n        name: httpd\n        state: restarted\n"})}),"\n",(0,o.jsx)(n.h2,{id:"playbook-example-with-multiple-groups-of-hosts",children:"Playbook example with multiple groups of hosts"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"---\n- hosts: webservers # first group\n  remote_user: root\n\n  tasks:\n    - name: ensure apache is at the latest version\n      yum:\n        name: httpd\n        state: latest\n    - name: write the apache config file\n      template:\n        src: /srv/httpd.j2\n        dest: /etc/httpd.conf\n\n- hosts: databases # second group\n  remote_user: root\n\n  tasks:\n    - name: ensure postgresql is at the latest version\n      yum:\n        name: postgresql\n        state: latest\n    - name: ensure that postgresql is started\n      service:\n        name: postgresql\n        state: started\n"})}),"\n",(0,o.jsx)(n.h2,{id:"privilege-escalation",children:"Privilege escalation"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["privilege escalation is handled by the ",(0,o.jsx)(n.strong,{children:"become"})," keyword"]}),"\n",(0,o.jsxs)(n.li,{children:["setting the ",(0,o.jsx)(n.strong,{children:"become"})," keyword to ",(0,o.jsx)(n.em,{children:"yes"})," activates privilege escalation"]}),"\n",(0,o.jsxs)(n.li,{children:["the ",(0,o.jsx)(n.em,{children:"become"})," keyword can be used at the ",(0,o.jsx)(n.strong,{children:"play or task"})," level"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"become-directives",children:"Become Directives"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"become"})," - privilege escalation"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"become_user"})," - defines the user which is being used for privilege escalation"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"become_method"})," (at play or task level) - overrides the default method set in ansible.cfg"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"become_flags"})," (at play or task level) - permit the use of specific flags for the tasks or role (e.g. to change the user to nobody when the shell is set to no login)"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["For example, to manage a system service (which requires root privileges) when ",(0,o.jsx)(n.strong,{children:"connected as a non-root user, you can use the default value of become_user (root)"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"- name: Ensure the httpd service is running\n  service:\n    name: httpd\n    state: started\n  become: yes\n"})}),"\n",(0,o.jsxs)(n.p,{children:["To run a command ",(0,o.jsx)(n.strong,{children:"as the apache user"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"- name: Run a command as the apache user\n  command: somecommand\n  become: yes\n  become_user: apache\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Note: become must be set to yes!"})}),"\n",(0,o.jsxs)(n.p,{children:["To do something ",(0,o.jsx)(n.strong,{children:"as the nobody user when the shell is nologin"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'- name: Run a command as nobody\n  command: somecommand\n  become: yes\n  become_method: su\n  become_user: nobody\n  become_flags: "-s /bin/sh"\n'})}),"\n",(0,o.jsx)(n.h2,{id:"using-ansible-vault",children:"Using Ansible Vault"}),"\n",(0,o.jsx)(n.p,{children:"To encrypt a single variable just use the following command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-CLI",children:"ansible-vault encrypt_string\n> New Vault password:\n> Confirm New Vault password:\n> Reading plaintext input from stdin. (ctrl-d to end input)\n> this is a plaintext string\n> !vault |\n>           $ANSIBLE_VAULT;1.1;AES256\n>           39393766663761653337386436636466396531353261383237613531356531343930663133623839\n>           3436613834303264613038623432303837393261663233640a363633343337623065613166306363\n>           37336132363462386138343535346264333061656134636631326164643035313433393831616131\n>           3635613565373939310a316132313764356432333366396533663965333162336538663432323334\n>           33656365303733303664353961363563313236396262313739343461383036333561\n> Encryption successful\n"})}),"\n",(0,o.jsx)(n.p,{children:"The output can be directly inserted into a playbook like this:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yml",children:"vars:\n  ansible_become_password: !vault |\n    $ANSIBLE_VAULT;1.1;AES256\n    30323830373430623135386266613062376532313763393431666161303463616538323963663331\n    3035626232633239636637316233343734396434353561350a303561353535356163303630336633\n    30343631373034303736633435633836336539356435313932613139313963646238613134633738\n    3165306536376266650a326431616630666332396634323137393733303036626133646430656262\n    6566\n"})}),"\n",(0,o.jsx)(n.p,{children:"The playbook can then be executed with the command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-CLI",children:"ansible-playbook playbook.yml --ask-vault-pass\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The user will be prompted for the password set during the ",(0,o.jsx)(n.code,{children:"ansible-vault encrypt_string"})," command."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>l});var o=s(96540);const t={},a=o.createContext(t);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);