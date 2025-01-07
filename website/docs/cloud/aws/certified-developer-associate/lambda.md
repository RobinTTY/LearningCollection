---
title: Lambda
sidebar_position: 17
---

- Virtual functions – no servers to manage!
- Limited by time - short executions
- Run on-demand
- Scaling is automated

Example: Serverless Thumbnail creation:

![lambda-simple-example](/img/docs/cloud/aws/lambda-simple-example.png)

## Benefits of AWS Lambda

- Easy Pricing:
  - Pay per request and compute time ($0.20 per 1 million requests, $1.00 for 600,000 GB-seconds)
  - Free tier of 1,000,000 AWS Lambda requests and 400,000 GBs of compute time (1GB RAM)
- Integrated with the whole AWS suite of services
- Integrated with many programming languages
- Easy monitoring through AWS CloudWatch
- Easy to get more resources per functions (up to 10GB of RAM!)
- Increasing RAM will also improve CPU and network!
- Language Support: Node.js (JavaScript), Python, Java, C# (.NET Core) / Powershell,Ruby, Custom Runtime API (community supported, example Rust or Golang), Lambda Container Image (must implement the Lambda Runtime API)
- Integrates with many other AWS Services (API Gateway, Kinesis, DynamoDB, S3, CloudFront, Cloudwatch Events EventBridge, CloudWatch Logs, SNS, SQS, Cognito, etc.)

## Synchronous Invocations

![lambda-synchronous-invocations](/img/docs/cloud/aws/lambda-synchronous-invocations.png)

- User Invoked:
  - Elastic Load Balancing (Application Load Balancer)
  - Amazon API Gateway
  - Amazon CloudFront (Lambda@Edge)
  - Amazon S3 Batch
- Service Invoked:
  - Amazon Cognito
  - AWS Step Functions
- Other Services:
  - Amazon Lex
  - Amazon Alexa
  - Amazon Kinesis Data Firehose

### Lambda Integration with ALB

- To expose a Lambda function as an HTTP(S) endpoint…
- You can use the Application Load Balancer (or an API Gateway)
- The Lambda function must be registered in a target group

![alb-to-lambda](/img/docs/cloud/aws/alb-to-lambda.png)

#### ALB Multi-Header Values

- ALB can support multi header values (ALB setting)
- When you enable multi-value headers, HTTP headers and query string parameters that are sent with multiple values are shown as arrays within the AWS Lambda event and response objects

#### ALB + Lambda – Permissios

![alb-lambda-permissions](/img/docs/cloud/aws/alb-lambda-permissions.png)

## Asynchronous Invocations
