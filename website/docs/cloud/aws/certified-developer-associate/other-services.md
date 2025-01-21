---
title: Other Services
sidebar_position: 27
---

## Amazon Simple Email Service (Amazon SES)

- Fully managed service to send emails securely, globally and at scale
- Allows inbound/outbound emails
- Reputation dashboard, performance insights, anti-spam feedback
- Provides statistics such as email deliveries, bounces, feedback loop results, email open
- Supports DomainKeys Identified Mail (DKIM) and Sender Policy Framework (SPF)
- Flexible IP deployment: shared, dedicated, and customer-owned IPs
- Send emails using your application using AWS Console, APIs, or SMTP
- Use cases: transactional, marketing and bulk email communications

## Amazon OpenSearch Service

- Amazon OpenSearch is successor to Amazon ElasticSearch
- In DynamoDB, queries only exist by primary key or indexes…
- With OpenSearch, you can search any field, even partially matches
- It’s common to use OpenSearch as a complement to another database
- Two modes: managed cluster or serverless cluster
- Does not natively support SQL (can be enabled via a plugin)
- Ingestion from Kinesis Data Firehose, AWS IoT, and CloudWatch Logs
- Security through Cognito & IAM, KMS encryption, TLS
- Comes with OpenSearch Dashboards (visualization)

### DynamoDB

![opensearch-patterns](/img/docs/cloud/aws/opensearch-patterns.png)

### Cloudwatch Logs

![opensearch-cloudwatch](/img/docs/cloud/aws/opensearch-cloudwatch.png)

### Kinesis Data Streams & Kinesis Data Firehose

![opensearch-kinesis](/img/docs/cloud/aws/opensearch-kinesis.png)

## Amazon Athena

- Serverless query service to analyze data stored in Amazon S3
- Uses standard SQL language to query the files (built on Presto)
- Supports CSV, JSON, ORC, Avro, and Parquet
- Pricing: $5.00 per TB of data scanned
- Commonly used with Amazon Quicksight for reporting/dashboards
- Use cases: Business intelligence / analytics / reporting, analyze & query VPC Flow Logs, ELB Logs, CloudTrail trails, etc...
- Exam Tip: analyze data in S3 using serverless SQL, use Athena

![amazon-athena](/img/docs/cloud/aws/amazon-athena.png)

### Performance Improvement

![amazon-athena-performance](/img/docs/cloud/aws/amazon-athena-performance.png)

### Federated Query

- Allows you to run SQL queries across data stored in relational, non-relational, object, and custom data sources (AWS or on-premises)
- Uses Data Source Connectors that run on AWS Lambda to run Federated Queries (e.g., CloudWatch Logs, DynamoDB, RDS, …)
- Store the results back in Amazon S3

![athena-federated-query](/img/docs/cloud/aws/athena-federated-query.png)

## Amazon Managed Streaming for Apache Kafka (Amazon MSK)

- Alternative to Amazon Kinesis
- Fully managed Apache Kafka on AWS
  - Allow you to create, update, delete clusters
  - MSK creates & manages Kafka brokers nodes & Zookeeper nodes for you
  - Deploy the MSK cluster in your VPC, multi-AZ (up to 3 for HA)
  - Automatic recovery from common Apache Kafka failures
  - Data is stored on EBS volumes for as long as you want
- MSK Serverless
  - Run Apache Kafka on MSK without managing the capacity
  - MSK automatically provisions resources and scales compute & storage

### Apache Kafka at a high level

![kafka-high-level](/img/docs/cloud/aws/kafka-high-level.png)

### Kinesis Data Streams vs. Amazon MSK

![kinesis-vs-msk](/img/docs/cloud/aws/kinesis-vs-msk.png)

### Amazon MSK Consumers

![msk-consumers](/img/docs/cloud/aws/msk-consumers.png)

## AWS Certificate Manager (ACM)

- Let’s you easily provision, manage, and deploy SSL/TLS Certificates
- Used to provide in-flight encryption for websites (HTTPS)
- Supports both public and private TLS certificates
- Free of charge for public TLS certificates
- Automatic TLS certificate renewal
- Integrations with (load TLS certificates on)
  - Elastic Load Balancers
  - CloudFront Distributions
  - APIs on API Gateway

## AWS Private Certificate Authority (CA)

- Managed service allows you to create private Certificate Authorities (CA), including root and subordinaries CAs
- Can issue and deploy end-entity X.509 certificates
- Certificates are trusted only by your Organization (not the public Internet)
- Works for AWS services that are integrated with ACM
- Use cases:
  - Encrypted TLS communication, Cryptographically signing code
  - Authenticate users, computers, API endpoints, and IoT devices
  - Enterprise customers building a Public Key Infrastructure (PKI)

## AWS Macie

- Amazon Macie is a fully managed data security and data privacy service that uses machine learning and pattern matching to discover and protect your sensitive data in AWS.
- Macie helps identify and alert you to sensitive data, such as personally identifiable information (PII)

## AWS AppConfig

- Configure, validate, and deploy dynamic configurations
- Deploy dynamic configuration changes to your applications independently of any code deployments
  - You don’t need to restart the application
- Feature flags, application tuning, allow/block listing…
- Use with apps on EC2 instances, Lambda, ECS, EKS…
- Gradually deploy the configuration changes and rollback if issues occur
- Validate configuration changes before deployment using:
  - JSON Schema (syntactic check) or
  - Lambda Function – run code to perform validation (semantic check)

## CloudWatch Evidently

- Safely validate new features by serving them to a specified % of your users
  - Reduce risk and identify unintended consequences
  - Collect experiment data, analyze using stats, monitor performance
- **Launches** (= feature flags): enable and disable
  features for a subset of users
- **Experiments** (= A/B testing): compare multiple versions of the same feature
- **Overrides**: pre-define a variation for a specific user
- Store evaluation events in CloudWatch Logs or S3
