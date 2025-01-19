"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[7302],{84912:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>d});var l=s(74848),i=s(28453);const a={title:"SAM",sidebar_position:21},c=void 0,t={id:"cloud/aws/certified-developer-associate/sam",title:"SAM",description:"- SAM = Serverless Application Model",source:"@site/docs/cloud/aws/certified-developer-associate/sam.md",sourceDirName:"cloud/aws/certified-developer-associate",slug:"/cloud/aws/certified-developer-associate/sam",permalink:"/LearningCollection/cloud/aws/certified-developer-associate/sam",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/cloud/aws/certified-developer-associate/sam.md",tags:[],version:"current",sidebarPosition:21,frontMatter:{title:"SAM",sidebar_position:21},sidebar:"docs",previous:{title:"CI/CD",permalink:"/LearningCollection/cloud/aws/certified-developer-associate/ci-cd"},next:{title:"Cloud Development Kit",permalink:"/LearningCollection/cloud/aws/certified-developer-associate/cloud-development-kit"}},r={},d=[{value:"Recipe",id:"recipe",level:3},{value:"SAM Deployment",id:"sam-deployment",level:3},{value:"Accelerate (sam sync)",id:"accelerate-sam-sync",level:3},{value:"Examples",id:"examples",level:4},{value:"CLI Debugging",id:"cli-debugging",level:3},{value:"SAM Policy Templates",id:"sam-policy-templates",level:3},{value:"SAM and CodeDeploy",id:"sam-and-codedeploy",level:3},{value:"Local Capabilities",id:"local-capabilities",level:3},{value:"Multiple Environments",id:"multiple-environments",level:3}];function o(e){const n={code:"code",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"SAM = Serverless Application Model"}),"\n",(0,l.jsx)(n.li,{children:"Framework for developing and deploying serverless applications"}),"\n",(0,l.jsx)(n.li,{children:"All the configuration is YAML code"}),"\n",(0,l.jsx)(n.li,{children:"Generate complex CloudFormation from simple SAM YAML file"}),"\n",(0,l.jsx)(n.li,{children:"Supports anything from CloudFormation: Outputs, Mappings, Parameters, Resources\u2026"}),"\n",(0,l.jsx)(n.li,{children:"SAM can use CodeDeploy to deploy Lambda functions"}),"\n",(0,l.jsx)(n.li,{children:"SAM can help you to run Lambda, API Gateway, DynamoDB locally"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"recipe",children:"Recipe"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Transform Header indicates it\u2019s SAM template:"}),"\n",(0,l.jsxs)(n.li,{children:["Transform: ",(0,l.jsx)(n.code,{children:"'AWS::Serverless-2016-10-31'"})]}),"\n",(0,l.jsxs)(n.li,{children:["Write Code","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"AWS::Serverless::Function"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"AWS::Serverless::Api"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"AWS::Serverless::SimpleTable"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Package & Deploy: ",(0,l.jsx)(n.code,{children:"sam deploy"})," (optionally preceded by \u201csam package\u201d)"]}),"\n",(0,l.jsxs)(n.li,{children:["Quickly sync local changes to AWS Lambda (SAM Accelerate): ",(0,l.jsx)(n.code,{children:"sam sync --watch"})]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"sam-deployment",children:"SAM Deployment"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"sam-deployment",src:s(44498).A+"",width:"1809",height:"778"})}),"\n",(0,l.jsx)(n.h3,{id:"accelerate-sam-sync",children:"Accelerate (sam sync)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"SAM Accelerate is a set of features to reduce latency while deploying resources to AWS"}),"\n",(0,l.jsxs)(n.li,{children:["sam sync","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Synchronizes your project declared in SAM templates to AWS"}),"\n",(0,l.jsx)(n.li,{children:"Synchronizes code changes to AWS without updating infrastructure (uses service APIs & bypass CloudFormation)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"sam-sync",src:s(84742).A+"",width:"1197",height:"361"})}),"\n",(0,l.jsx)(n.h4,{id:"examples",children:"Examples"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"sam sync (no options)"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Synchronize code and infrastructure"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"sam sync --code"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Synchronize code changes without updating infrastructure (bypass CloudFormation, update in seconds)"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"sam sync --code --resource AWS::Serverless::Function"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Synchronize only all Lambda functions and their dependencies"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"sam sync --code --resource-id HelloWorldLambdaFunction"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Synchronize only a specific resource by its ID"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"sam sync --watch"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Monitor for file changes and automatically synchronize when changes are detected"}),"\n",(0,l.jsx)(n.li,{children:"If changes include configuration, it uses sam sync"}),"\n",(0,l.jsx)(n.li,{children:"If changes are code only, it uses sam sync --code"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"cli-debugging",children:"CLI Debugging"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Locally build, test, and debug your serverless applications that are defined using AWS SAM templates"}),"\n",(0,l.jsx)(n.li,{children:"Provides a lambda-like execution environment locally"}),"\n",(0,l.jsx)(n.li,{children:"SAM CLI + AWS Toolkits => step-through and debug your code"}),"\n",(0,l.jsx)(n.li,{children:"Supported IDEs: AWS Cloud9, Visual Studio Code, JetBrains, PyCharm, IntelliJ, \u2026"}),"\n",(0,l.jsx)(n.li,{children:"AWS Toolkits: IDE plugins which allows you to build, test, debug, deploy, and invoke Lambda functions built using AWS SAM"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"sam-policy-templates",children:"SAM Policy Templates"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"List of templates to apply permissions to your Lambda Functions"}),"\n",(0,l.jsxs)(n.li,{children:["Important examples:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"S3ReadPolicy:"})," Gives read only permissions to objects in S3"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"SQSPollerPolicy:"})," Allows to poll an SQS queue"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"DynamoDBCrudPolicy:"})," CRUD = create read update delete"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"sam-and-codedeploy",children:"SAM and CodeDeploy"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"SAM framework natively uses CodeDeploy to update Lambda functions"}),"\n",(0,l.jsx)(n.li,{children:"Traffic Shifting feature"}),"\n",(0,l.jsx)(n.li,{children:"Pre and Post traffic hooks features to validate deployment (before the traffic shift starts and after it ends)"}),"\n",(0,l.jsx)(n.li,{children:"Easy & automated rollback using CloudWatch Alarms"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"sam-and-code-deploy",src:s(98970).A+"",width:"874",height:"823"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["AutoPublishAlias","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Detects when new code is being deployed"}),"\n",(0,l.jsx)(n.li,{children:"Creates and publishes an updated version of that function with the latest code"}),"\n",(0,l.jsx)(n.li,{children:"Points the alias to the updated version of the Lambda function"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["DeploymentPreference","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Canary, Linear, AllAtOnce"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Alarms","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Alarms that can trigger a rollback"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Hooks","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Pre and post traffic shifting Lambda functions to test your deployment"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"sam-and-code-deploy-2",src:s(18995).A+"",width:"1015",height:"612"})}),"\n",(0,l.jsx)(n.h3,{id:"local-capabilities",children:"Local Capabilities"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Locally start AWS Lambda"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"sam local start-lambda"})}),"\n",(0,l.jsx)(n.li,{children:"Starts a local endpoint that emulates AWS Lambda"}),"\n",(0,l.jsx)(n.li,{children:"Can run automated tests against this local endpoint"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Locally Invoke Lambda Function"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"sam local invoke"})}),"\n",(0,l.jsx)(n.li,{children:"Invoke Lambda function with payload once and quit after invocation completes"}),"\n",(0,l.jsx)(n.li,{children:"Helpful for generating test cases"}),"\n",(0,l.jsx)(n.li,{children:"If the function make API calls to AWS, make sure you are using the correct --profile option"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Locally Start an API Gateway Endpoint"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"sam local start-api"})}),"\n",(0,l.jsx)(n.li,{children:"Starts a local HTTP server that hosts all your functions"}),"\n",(0,l.jsx)(n.li,{children:"Changes to functions are automatically reloaded"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Generate AWS Events for Lambda Functions"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"sam local generate-event"})}),"\n",(0,l.jsx)(n.li,{children:"Generate sample payloads for event sources"}),"\n",(0,l.jsx)(n.li,{children:"S3, API Gateway, SNS, Kinesis, DynamoDB\u2026"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"sam-local-capabilities",src:s(51251).A+"",width:"544",height:"862"})}),"\n",(0,l.jsx)(n.h3,{id:"multiple-environments",children:"Multiple Environments"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"sam-multiple-environments",src:s(58744).A+"",width:"1597",height:"793"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},18995:(e,n,s)=>{s.d(n,{A:()=>l});const l=s.p+"assets/images/sam-and-code-deploy-2-a8c75d8fed65a85ab809f2c413629a51.png"},98970:(e,n,s)=>{s.d(n,{A:()=>l});const l=s.p+"assets/images/sam-and-code-deploy-1bf42e482ef4787b6d1c5447177589e2.png"},44498:(e,n,s)=>{s.d(n,{A:()=>l});const l=s.p+"assets/images/sam-deployment-553f552d90caf582cb428def792366d4.png"},51251:(e,n,s)=>{s.d(n,{A:()=>l});const l=s.p+"assets/images/sam-local-capabilities-c954b0aed53f1a6ad4c4e38da1ff13d7.png"},58744:(e,n,s)=>{s.d(n,{A:()=>l});const l=s.p+"assets/images/sam-multiple-environments-670a92e6564f13b9960bbbdc964acbd6.png"},84742:(e,n,s)=>{s.d(n,{A:()=>l});const l=s.p+"assets/images/sam-sync-2dc0ebee469b7ce5cfb42b7f4369cb56.png"},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>t});var l=s(96540);const i={},a=l.createContext(i);function c(e){const n=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);