"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[8707],{85676:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var i=t(74848),s=t(28453);const r={title:"Virtual Private Cloud (VPC)",sidebar_position:8},l=void 0,c={id:"cloud/aws/certified-developer-associate/vpc",title:"Virtual Private Cloud (VPC)",description:"- VPC: private network to deploy your resources (regional resource)",source:"@site/docs/cloud/aws/certified-developer-associate/vpc.md",sourceDirName:"cloud/aws/certified-developer-associate",slug:"/cloud/aws/certified-developer-associate/vpc",permalink:"/LearningCollection/cloud/aws/certified-developer-associate/vpc",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/cloud/aws/certified-developer-associate/vpc.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Virtual Private Cloud (VPC)",sidebar_position:8},sidebar:"docs",previous:{title:"Route 53",permalink:"/LearningCollection/cloud/aws/certified-developer-associate/route53"},next:{title:"S3",permalink:"/LearningCollection/cloud/aws/certified-developer-associate/s3"}},o={},a=[{value:"Internet Gateway &amp; NAT Gateways",id:"internet-gateway--nat-gateways",level:2},{value:"Network ACL &amp; Security Groups",id:"network-acl--security-groups",level:2},{value:"Network ACLs vs Security Groups",id:"network-acls-vs-security-groups",level:3},{value:"VPC Flow Logs",id:"vpc-flow-logs",level:2},{value:"VPC Peering",id:"vpc-peering",level:2},{value:"VPC Endpoints",id:"vpc-endpoints",level:2},{value:"Site to Site VPN &amp; Direct Connect",id:"site-to-site-vpn--direct-connect",level:2},{value:"Summary",id:"summary",level:2}];function d(e){const n={h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"VPC:"})," private network to deploy your resources (regional resource)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Subnets:"})," allow you to partition your network inside your VPC (Availability Zone resource)"]}),"\n",(0,i.jsxs)(n.li,{children:["A ",(0,i.jsx)(n.strong,{children:"public subnet"})," is a subnet that is accessible from the internet"]}),"\n",(0,i.jsxs)(n.li,{children:["A ",(0,i.jsx)(n.strong,{children:"private subnet"})," is a subnet that is not accessible from the internet"]}),"\n",(0,i.jsxs)(n.li,{children:["To define access to the internet and between subnets, we use ",(0,i.jsx)(n.strong,{children:"Route Tables"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"vpc-subnet",src:t(54940).A+"",width:"1702",height:"730"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"vpc-diagram",src:t(70428).A+"",width:"1165",height:"769"})}),"\n",(0,i.jsx)(n.h2,{id:"internet-gateway--nat-gateways",children:"Internet Gateway & NAT Gateways"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Internet Gateways helps our VPC instances connect with the internet"}),"\n",(0,i.jsx)(n.li,{children:"Public Subnets have a route to the internet gateway"}),"\n",(0,i.jsx)(n.li,{children:"NAT Gateways (AWS-managed) & NAT Instances (self-managed) allow your instances in your Private Subnets to access the internet while remaining private"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"internet-gateway",src:t(43999).A+"",width:"686",height:"830"})}),"\n",(0,i.jsx)(n.h2,{id:"network-acl--security-groups",children:"Network ACL & Security Groups"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["NACL (Network ACL)","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A firewall which controls traffic from and to subnet"}),"\n",(0,i.jsx)(n.li,{children:"Can have ALLOW and DENY rules"}),"\n",(0,i.jsx)(n.li,{children:"Are attached at the Subnet level"}),"\n",(0,i.jsx)(n.li,{children:"Rules only include IP addresses"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Security Groups","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A firewall that controls traffic to and from an ENI / an EC2 Instance"}),"\n",(0,i.jsx)(n.li,{children:"Can have only ALLOW rules"}),"\n",(0,i.jsx)(n.li,{children:"Rules include IP addresses and other security groups"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"network-acl",src:t(56508).A+"",width:"589",height:"820"})}),"\n",(0,i.jsx)(n.h3,{id:"network-acls-vs-security-groups",children:"Network ACLs vs Security Groups"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"acl-vs-sec",src:t(69837).A+"",width:"589",height:"820"})}),"\n",(0,i.jsx)(n.h2,{id:"vpc-flow-logs",children:"VPC Flow Logs"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Capture information about IP traffic going into your interfaces:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"VPC Flow Logs"}),"\n",(0,i.jsx)(n.li,{children:"Subnet Flow Logs"}),"\n",(0,i.jsx)(n.li,{children:"Elastic Network Interface Flow Logs"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Helps to monitor & troubleshoot connectivity issues. Example:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Subnets to internet"}),"\n",(0,i.jsx)(n.li,{children:"Subnets to subnets"}),"\n",(0,i.jsx)(n.li,{children:"Internet to subnets"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Captures network information from AWS managed interfaces too: Elastic Load Balancers, ElastiCache, RDS, Aurora, etc\u2026"}),"\n",(0,i.jsx)(n.li,{children:"VPC Flow logs data can go to S3, CloudWatch Logs, and Kinesis Data Firehose"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"vpc-peering",children:"VPC Peering"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Connect two VPC, privately using AWS\u2019 network"}),"\n",(0,i.jsx)(n.li,{children:"Make them behave as if they were in the same network"}),"\n",(0,i.jsx)(n.li,{children:"Must not have overlapping CIDR (IP address range)"}),"\n",(0,i.jsx)(n.li,{children:"VPC Peering connection is not transitive (must be established for each VPC that need to communicate with one another)"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"vpc-peering",src:t(27863).A+"",width:"589",height:"820"})}),"\n",(0,i.jsx)(n.h2,{id:"vpc-endpoints",children:"VPC Endpoints"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Endpoints allow you to connect to AWS Services using a private network instead of the public www network"}),"\n",(0,i.jsx)(n.li,{children:"This gives you enhanced security and lower latency to access AWS services"}),"\n",(0,i.jsx)(n.li,{children:"VPC Endpoint Gateway: S3 & DynamoDB"}),"\n",(0,i.jsx)(n.li,{children:"VPC Endpoint Interface: the rest"}),"\n",(0,i.jsx)(n.li,{children:"Only used within your VPC"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"vpc-endpoints",src:t(7121).A+"",width:"661",height:"751"})}),"\n",(0,i.jsx)(n.h2,{id:"site-to-site-vpn--direct-connect",children:"Site to Site VPN & Direct Connect"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Site to Site VPN","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Connect an on-premises VPN to AWS"}),"\n",(0,i.jsx)(n.li,{children:"The connection is automatically encrypted"}),"\n",(0,i.jsx)(n.li,{children:"Goes over the public internet"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Direct Connect (DX)","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Establish a physical connection between on premises and AWS"}),"\n",(0,i.jsx)(n.li,{children:"The connection is private, secure and fast"}),"\n",(0,i.jsx)(n.li,{children:"Goes over a private network"}),"\n",(0,i.jsx)(n.li,{children:"Takes at least a month to establish"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"site-to-site-vpn",src:t(55377).A+"",width:"718",height:"555"})}),"\n",(0,i.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"VPC: Virtual Private Cloud"}),"\n",(0,i.jsx)(n.li,{children:"Subnets: Tied to an AZ, network partition of the VPC"}),"\n",(0,i.jsx)(n.li,{children:"Internet Gateway: at the VPC level, provide Internet Access"}),"\n",(0,i.jsx)(n.li,{children:"NAT Gateway / Instances: give internet access to private subnets"}),"\n",(0,i.jsx)(n.li,{children:"NACL: Stateless, subnet rules for inbound and outbound"}),"\n",(0,i.jsx)(n.li,{children:"Security Groups: Stateful, operate at the EC2 instance level or ENI"}),"\n",(0,i.jsx)(n.li,{children:"VPC Peering: Connect two VPC with non overlapping IP ranges, non transitive"}),"\n",(0,i.jsx)(n.li,{children:"VPC Endpoints: Provide private access to AWS Services within VPC"}),"\n",(0,i.jsx)(n.li,{children:"VPC Flow Logs: network traffic logs"}),"\n",(0,i.jsx)(n.li,{children:"Site to Site VPN: VPN over public internet between on-premises DC and AWS"}),"\n",(0,i.jsx)(n.li,{children:"Direct Connect: direct private connection to a AWS"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},69837:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/acl-vs-sec-b89adbe4e14ec6e8c8a4be1cf168298d.png"},43999:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/internet-gateway-00e3cb1d215a9994850dad2de1997023.png"},56508:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/network-acl-b89adbe4e14ec6e8c8a4be1cf168298d.png"},55377:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/site-to-site-vpn-3b879a3cdcc973948d896f640ada4cb3.png"},70428:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/vpc-diagram-c709e1ea6088104370dde5ffd8207801.png"},7121:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/vpc-endpoints-73a7bf7c9b46d2055addcb6e007a0535.png"},27863:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/vpc-peering-b89adbe4e14ec6e8c8a4be1cf168298d.png"},54940:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/vpc-subnet-8343eb07889ece7aa4bd1ea098dbe457.png"},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>c});var i=t(96540);const s={},r=i.createContext(s);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);