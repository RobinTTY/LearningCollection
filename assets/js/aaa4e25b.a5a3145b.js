"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[2370],{75475:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var i=s(74848),l=s(28453);const t={title:"AWS CLI, SDK, IAM Roles & Policies",sidebar_position:10},r=void 0,a={id:"cloud/aws/certified-developer-associate/cli-sdk-iam-roles-policies",title:"AWS CLI, SDK, IAM Roles & Policies",description:"EC2 Instance Metadata (IMDS)",source:"@site/docs/cloud/aws/certified-developer-associate/cli-sdk-iam-roles-policies.md",sourceDirName:"cloud/aws/certified-developer-associate",slug:"/cloud/aws/certified-developer-associate/cli-sdk-iam-roles-policies",permalink:"/LearningCollection/cloud/aws/certified-developer-associate/cli-sdk-iam-roles-policies",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/cloud/aws/certified-developer-associate/cli-sdk-iam-roles-policies.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"AWS CLI, SDK, IAM Roles & Policies",sidebar_position:10},sidebar:"docs",previous:{title:"S3",permalink:"/LearningCollection/cloud/aws/certified-developer-associate/s3"},next:{title:"Cloudfront",permalink:"/LearningCollection/cloud/aws/certified-developer-associate/cloudfront"}},o={},c=[{value:"EC2 Instance Metadata (IMDS)",id:"ec2-instance-metadata-imds",level:2},{value:"IMDSv2 vs. IMDSv1",id:"imdsv2-vs-imdsv1",level:3},{value:"MFA with CLI",id:"mfa-with-cli",level:2},{value:"AWS SDK",id:"aws-sdk",level:2},{value:"SDK Overview",id:"sdk-overview",level:3},{value:"AWS Limits (Quotas)",id:"aws-limits-quotas",level:2},{value:"AWS CLI Credentials Provider Chain",id:"aws-cli-credentials-provider-chain",level:2},{value:"Default Credentials Provider Chain",id:"default-credentials-provider-chain",level:3},{value:"AWS Credentials Scenario",id:"aws-credentials-scenario",level:3},{value:"AWS Credentials Best Practices",id:"aws-credentials-best-practices",level:3},{value:"Signing AWS API requests",id:"signing-aws-api-requests",level:2},{value:"SigV4 Request examples",id:"sigv4-request-examples",level:3}];function d(e){const n={a:"a",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"ec2-instance-metadata-imds",children:"EC2 Instance Metadata (IMDS)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"AWS EC2 Instance Metadata (IMDS) is powerful but one of the least known features to developers"}),"\n",(0,i.jsx)(n.li,{children:"It allows AWS EC2 instances to \u201dlearn about themselves\u201d without using an IAM Role for that purpose"}),"\n",(0,i.jsxs)(n.li,{children:["The URL is ",(0,i.jsx)(n.a,{href:"http://169.254.169.254/latest/meta-data",children:"http://169.254.169.254/latest/meta-data"})]}),"\n",(0,i.jsx)(n.li,{children:"You can retrieve the IAM Role name from the metadata, but you CANNOT retrieve the IAM Policy"}),"\n",(0,i.jsx)(n.li,{children:"Metadata = Info about the EC2 instance"}),"\n",(0,i.jsx)(n.li,{children:"Userdata = launch script of the EC2 instance"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"imdsv2-vs-imdsv1",children:"IMDSv2 vs. IMDSv1"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["IMDSv1 is accessing ",(0,i.jsx)(n.a,{href:"http://169.254.169.254/latest/meta-data",children:"http://169.254.169.254/latest/meta-data"})," directly"]}),"\n",(0,i.jsxs)(n.li,{children:["IMDSv2 is more secure and is done in two steps","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Get Session Token (limited validity) \u2013 using headers & PUT"}),"\n",(0,i.jsx)(n.li,{children:"Use Session Token in IMDSv2 calls \u2013 using headers"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"mfa-with-cli",children:"MFA with CLI"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"To use MFA with the CLI, you must create a temporary session"}),"\n",(0,i.jsx)(n.li,{children:"To do so, you must run the STS GetSessionToken API call"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"aws sts get-session-token"})," --serial-number arn-of-the-mfa-device --token-code code-from-token --duration-seconds 3600"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"aws-sdk",children:"AWS SDK"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Used to perform actions on AWS directly from your applications code"}),"\n",(0,i.jsx)(n.li,{children:"Official SDKs are .NET, Java, PHP, Go, Python, etc."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"sdk-overview",children:"SDK Overview"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"We have to use the AWS SDK when coding against AWS Services such as DynamoDB"}),"\n",(0,i.jsx)(n.li,{children:"The AWS CLI uses the Python SDK (boto3)"}),"\n",(0,i.jsx)(n.li,{children:"The exam expects you to know when you should use an SDK"}),"\n",(0,i.jsx)(n.li,{children:"Good to know: if you don\u2019t specify or configure a default region, then us-east-1 will be chosen by default"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"aws-limits-quotas",children:"AWS Limits (Quotas)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["API Rate Limits","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"DescribeInstances API for EC2 has a limit of 100 calls per seconds"}),"\n",(0,i.jsx)(n.li,{children:"GetObject on S3 has a limit of 5500 GET per second per prefix"}),"\n",(0,i.jsx)(n.li,{children:"For Intermittent Errors: implement Exponential Backoff"}),"\n",(0,i.jsx)(n.li,{children:"For Consistent Errors: request an API throttling limit increase"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Service Quotas (Service Limits)","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Running On-Demand Standard Instances: 1152 vCPU"}),"\n",(0,i.jsx)(n.li,{children:"You can request a ser vice limit increase by opening a ticket"}),"\n",(0,i.jsx)(n.li,{children:"You can request a ser vice quota increase by using the Service Quotas API"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Retry mechanism already included in AWS SDK API calls","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Must implement yourself if using the AWS API as-is or in specific cases"}),"\n",(0,i.jsx)(n.li,{children:"Must only implement the retries on 5xx server errors and throttling"}),"\n",(0,i.jsx)(n.li,{children:"Do not implement on the 4xx client errors"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"aws-cli-credentials-provider-chain",children:"AWS CLI Credentials Provider Chain"}),"\n",(0,i.jsx)(n.p,{children:"The CLI will look for credentials in this order:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Command line options:"})," --region,--output, and--profile"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Environment variables:"})," AWS_ACCESS_KEY_ID,AWS_SECRET_ACCESS_KEY, and AWS_SESSION_TOKEN"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"CLI credentials file:"})," aws configure ~/.aws/credentials on Linux / Mac & C:\\Users\\user.aws\\credentials on Windows"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"CLI configuration file:"}),"\u2013 aws configure ~/.aws/config on Linux / macOS & C:\\Users\\USERNAME.aws\\config on Windows"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Container credentials:"})," for ECS tasks"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Instance profile credentials:"})," for EC2 Instance Profiles"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"default-credentials-provider-chain",children:"Default Credentials Provider Chain"}),"\n",(0,i.jsx)(n.p,{children:"The Java SDK (example) will look for credentials in this order:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Java system properties:"})," aws.accessKeyId and aws.secretKey"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Environment variables:"})," AWS_ACCESS_KEY_ID andAWS_SECRET_ACCESS_KEY"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"The default credential profiles file"})," \u2013 ex at: ~/.aws/credentials, shared by many SDK"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Amazon ECS container credentials"})," \u2013 for ECS containers"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Instance profile credentials:"})," used on EC2 instances"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"aws-credentials-scenario",children:"AWS Credentials Scenario"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"An application deployed on an EC2 instance is using environment variables with credentials from an IAM user to call the Amazon S3 API"}),"\n",(0,i.jsx)(n.li,{children:"The IAM user has S3FullAccess permissions"}),"\n",(0,i.jsxs)(n.li,{children:["The application only uses one S3 bucket, so according to best practices","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"An IAM Role & EC2 Instance Profile was created for the EC2 instance"}),"\n",(0,i.jsx)(n.li,{children:"The Role was assigned the minimum permissions to access that one S3 bucket"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The IAM Instance Profile was assigned to the EC2 instance, but it still had access to all S3 buckets. Why?"}),"\n",(0,i.jsx)(n.p,{children:"Answer: The credentials chain is still giving priorities to the environment variables"}),"\n",(0,i.jsx)(n.h3,{id:"aws-credentials-best-practices",children:"AWS Credentials Best Practices"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Best practice is for credentials to be inherited from the credentials chain"}),"\n",(0,i.jsxs)(n.li,{children:["If using working within AWS, use IAM Roles","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"EC2 Instances Roles for EC2 Instances"}),"\n",(0,i.jsx)(n.li,{children:"ECS Roles for ECS tasks"}),"\n",(0,i.jsx)(n.li,{children:"Lambda Roles for Lambda functions"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"If working outside of AWS, use environment variables / named profiles"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"signing-aws-api-requests",children:"Signing AWS API requests"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"When you call the AWS HTTP API, you sign the request so that AWS can identify you, using your AWS credentials (access key & secret key)"}),"\n",(0,i.jsx)(n.li,{children:"Note: some requests to Amazon S3 don\u2019t need to be signed"}),"\n",(0,i.jsx)(n.li,{children:"If you use the SDK or CLI, the HTTP requests are signed for you"}),"\n",(0,i.jsx)(n.li,{children:"You should sign an AWS HTTP request using Signature v4 (SigV4)"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"sigv4-request-examples",children:"SigV4 Request examples"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"sigv4",src:s(85656).A+"",width:"1111",height:"492"})})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},85656:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/sigv4-410148248ddd46419bf278eae445bf6f.png"},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var i=s(96540);const l={},t=i.createContext(l);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);