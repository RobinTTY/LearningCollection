---
title: SAM
sidebar_position: 21
---

- SAM = Serverless Application Model
- Framework for developing and deploying serverless applications
- All the configuration is YAML code
- Generate complex CloudFormation from simple SAM YAML file
- Supports anything from CloudFormation: Outputs, Mappings, Parameters, Resources…
- SAM can use CodeDeploy to deploy Lambda functions
- SAM can help you to run Lambda, API Gateway, DynamoDB locally

### Recipe

- Transform Header indicates it’s SAM template:
- Transform: `'AWS::Serverless-2016-10-31'`
- Write Code
  - `AWS::Serverless::Function`
  - `AWS::Serverless::Api`
  - `AWS::Serverless::SimpleTable`
- Package & Deploy: `sam deploy` (optionally preceded by “sam package”)
- Quickly sync local changes to AWS Lambda (SAM Accelerate): `sam sync --watch`

### SAM Deployment

![sam-deployment](/img/docs/cloud/aws/sam-deployment.png)

### Accelerate (sam sync)

- SAM Accelerate is a set of features to reduce latency while deploying resources to AWS
- sam sync
  - Synchronizes your project declared in SAM templates to AWS
  - Synchronizes code changes to AWS without updating infrastructure (uses service APIs & bypass CloudFormation)

![sam-sync](/img/docs/cloud/aws/sam-sync.png)

#### Examples

- **sam sync (no options)**
  - Synchronize code and infrastructure
- **sam sync --code**
  - Synchronize code changes without updating infrastructure (bypass CloudFormation, update in seconds)
- **sam sync --code --resource AWS::Serverless::Function**
  - Synchronize only all Lambda functions and their dependencies
- **sam sync --code --resource-id HelloWorldLambdaFunction**
  - Synchronize only a specific resource by its ID
- **sam sync --watch**
  - Monitor for file changes and automatically synchronize when changes are detected
  - If changes include configuration, it uses sam sync
  - If changes are code only, it uses sam sync --code

### CLI Debugging

- Locally build, test, and debug your serverless applications that are defined using AWS SAM templates
- Provides a lambda-like execution environment locally
- SAM CLI + AWS Toolkits => step-through and debug your code
- Supported IDEs: AWS Cloud9, Visual Studio Code, JetBrains, PyCharm, IntelliJ, …
- AWS Toolkits: IDE plugins which allows you to build, test, debug, deploy, and invoke Lambda functions built using AWS SAM

### SAM Policy Templates

- List of templates to apply permissions to your Lambda Functions
- Important examples:
  - **S3ReadPolicy:** Gives read only permissions to objects in S3
  - **SQSPollerPolicy:** Allows to poll an SQS queue
  - **DynamoDBCrudPolicy:** CRUD = create read update delete

### SAM and CodeDeploy

- SAM framework natively uses CodeDeploy to update Lambda functions
- Traffic Shifting feature
- Pre and Post traffic hooks features to validate deployment (before the traffic shift starts and after it ends)
- Easy & automated rollback using CloudWatch Alarms

![sam-and-code-deploy](/img/docs/cloud/aws/sam-and-code-deploy.png)

- AutoPublishAlias
  - Detects when new code is being deployed
  - Creates and publishes an updated version of that function with the latest code
  - Points the alias to the updated version of the Lambda function
- DeploymentPreference
  - Canary, Linear, AllAtOnce
- Alarms
  - Alarms that can trigger a rollback
- Hooks
  - Pre and post traffic shifting Lambda functions to test your deployment

![sam-and-code-deploy-2](/img/docs/cloud/aws/sam-and-code-deploy-2.png)

### Local Capabilities

- **Locally start AWS Lambda**
  - **sam local start-lambda**
  - Starts a local endpoint that emulates AWS Lambda
  - Can run automated tests against this local endpoint
- **Locally Invoke Lambda Function**
  - **sam local invoke**
  - Invoke Lambda function with payload once and quit after invocation completes
  - Helpful for generating test cases
  - If the function make API calls to AWS, make sure you are using the correct --profile option
- **Locally Start an API Gateway Endpoint**
  - **sam local start-api**
  - Starts a local HTTP server that hosts all your functions
  - Changes to functions are automatically reloaded
- **Generate AWS Events for Lambda Functions**
  - **sam local generate-event**
  - Generate sample payloads for event sources
  - S3, API Gateway, SNS, Kinesis, DynamoDB…

![sam-local-capabilities](/img/docs/cloud/aws/sam-local-capabilities.png)

### Multiple Environments

![sam-multiple-environments](/img/docs/cloud/aws/sam-multiple-environments.png)
