---
title: CloudFormation
sidebar_position: 14
---

- CloudFormation is a declarative way of outlining your AWS Infrastructure, for any resources (most of them are supported)
- For example, within a CloudFormation template, you say:
  - I want a security group
  - I want two EC2 instances using this security group
  - I want two Elastic IPs for these EC2 instances
  - I want an S3 bucket
  - I want a load balancer (ELB) in front of these EC2 instances
- Then CloudFormation creates those for you, in the right order, with the exact configuration that you specify

![cf-template](/img/docs/cloud/aws/cf-template.png)

## Benefits of AWS CloudFormation

- Infrastructure as code
  - No resources are manually created, which is excellent for control
  - The code can be version controlled for example using Git
  - Changes to the infrastructure are reviewed through code
- Cost
  - Each resources within the stack is tagged with an identifier so you can easily see how much a stack costs you
  - You can estimate the costs of your resources using the CloudFormation template
  - Savings strategy: In Dev, you could automation deletion of templates at 5 PM and recreated at 8 AM, safely
- Productivity
  - Ability to destroy and re-create an infrastructure on the cloud on the fly
  - Automated generation of Diagram for your templates!
  - Declarative programming (no need to figure out ordering and orchestration)
- Separation of concern: create many stacks for many apps, and many layers. Ex:
  - VPC stacks
  - Network stacks
  - App stacks
- Don’t re-invent the wheel
  - Leverage existing templates on the web!
  - Leverage the documentation

## How CloudFormation Works

- Templates must be uploaded in S3 and then referenced in CloudFormation
- To update a template, we can’t edit previous ones. We have to reupload a new version of the template to AWS
- Stacks are identified by a name
- Deleting a stack deletes every single artifact that was created by CloudFormation

![cloud-formation-work](/img/docs/cloud/aws/cloud-formation-work.png)

### Templates

- Manual way
  - Editing templates in Application Composer or code editor
  - Using the console to input parameters, etc…
  - We’ll mostly do this way in the course for learning purposes
- Automated way
  - Editing templates in a YAML file
  - Using the AWS CLI (Command Line Interface) to deploy the templates, or using a Continuous Delivery (CD) tool
  - Recommended way when you fully want to automate your flow

### Building Blocks

- Template’s Components
  - AWSTemplateFormatVersion – identifies the capabilities of the template “2010-09-09”
  - Description – comments about the template
  - Resources (MANDATORY) – your AWS resources declared in the template
  - Parameters – the dynamic inputs for your template
  - Mappings – the static variables for your template
  - Outputs – references to what has been created
  - Conditionals – list of conditions to perform resource creation
- Template’s Helpers
  - References
  - Functions

### Resources

- Resources are the core of your CloudFormation template (MANDATORY)
- They represent the different AWS Components that will be created and configured
- Resources are declared and can reference each other
- AWS figures out creation, updates and deletes of resources for us
- There are over 700 types of resources (!)
- Resource types identifiers are of the form:
  - `service-provider::service-name::data-type-name`

### Parameters

- Parameters are a way to provide inputs to your AWS CloudFormation template
- They’re important to know about if:
  - You want to reuse your templates across the company
  - Some inputs can not be determined ahead of time
- Parameters are extremely powerful, controlled, and can prevent errors from happening in your templates, thanks to types

![cf-parameters](/img/docs/cloud/aws/cf-parameters.png)

- Ask yourself this:
  - Is this CloudFormation resource configuration likely to change in the future?
  - If so, make it a parameter
- You won’t have to re-upload a template to change its content

#### Parameters Settings

![cf-parameter-settings](/img/docs/cloud/aws/cf-parameter-settings.png)

#### Example

![cf-parameter-example](/img/docs/cloud/aws/cf-parameter-example.png)

#### Referencing parameters

- The Fn::Ref function can be leveraged to reference parameters
- Parameters can be used anywhere in a template
- The shorthand for this in YAML is !Ref
- The function can also reference other elements within the template

#### Pseudo Parameters

- AWS offers us Pseudo Parameters in any CloudFormation template
- These can be used at any time and are enabled by default
- Important pseudo parameters:

![cf-pseudo-params](/img/docs/cloud/aws/cf-pseudo-params.png)

### Mappings

- Mappings are fixed variables within your CloudFormation template
- They’re very handy to differentiate between different environments (dev vs prod), regions (AWS regions), AMI types…
- All the values are hardcoded within the template

![cf-mappings](/img/docs/cloud/aws/cf-mappings.png)

#### Accessing Mapping Values (Fn::FindInMap)

- We use Fn::FindInMap to return a named value from a specific key
- !FindInMap [ MapName, TopLevelKey, SecondLevelKey ]

![cf-mapping-values](/img/docs/cloud/aws/cf-mapping-values.png)

### Mappings vs. Parameters

- Mappings are great when you know in advance all the values that can be taken and that they can be deduced from variables such as
  - Region
  - Availability Zone
  - AWS Account
  - Environment (dev vs prod)
  - etc…
- They allow safer control over the template
- Use parameters when the values are really user specific

### Outputs

- The Outputs section declares optional outputs values that we can import into other stacks (if you export them first)!
- You can also view the outputs in the AWS Console or in using the AWS CLI
- They’re very useful for example if you define a network CloudFormation, and output the variables such as VPC ID and your Subnet IDs
- It’s the best way to perform some collaboration cross stack, as you let expert handle their own part of the stack
- Creating a SSH Security Group as part of one template
- We create an output that references that security group

![cf-outputs](/img/docs/cloud/aws/cf-outputs.png)

#### Cross-Stack Reference

- We then create a second template that leverages that security group
- For this, we use the Fn::ImportValue function
- You can’t delete the underlying stack until all the references are deleted

![cf-cross-stack-reference](/img/docs/cloud/aws/cf-cross-stack-reference.png)

### Conditions

- Conditions are used to control the creation of resources or outputs based on a condition
- Conditions can be whatever you want them to be, but common ones are:
  - Environment (dev / test / prod)
  - AWS Region
  - Any parameter value
- Each condition can reference another condition, parameter value or mapping

![cf-conditions](/img/docs/cloud/aws/cf-conditions.png)

#### How to define a Condition

```yaml
Conditions:
  CreateProdResources: !Equals [!Ref EnvType, prod]
```

- The logical ID is for you to choose. It’s how you name condition
- The intrinsic function (logical) can be any of the following:
  - Fn::And
  - Fn::Equals
  - Fn::If
  - Fn::Not
  - Fn::Or

#### How to use a Condition

Conditions can be applied to resources / outputs / etc…

```yaml
Resources:
  MountPoint:
    Type: AWS::EC2::VolumeAttachment
    Condition: CreateProdResources
```

### Intrinsic Functions

- Ref
- Fn::GetAtt
- Fn::FindInMap
- Fn::ImportValue
- Fn::Base64
- Condition Functions (Fn::If, Fn::Not, Fn::Equals, etc…)

#### Fn::Ref

- The Fn::Ref function can be leveraged to reference
  - Parameters – returns the value of the parameter
  - Resources – returns the physical ID of the underlying resource (e.g., EC2 ID)
- The shorthand for this in YAML is !Ref

```yaml
Resources:
  DBSubnet1:
    Type: AWS::EC2::Subnet
    Properties:
      VpcId: !Ref MyVPC
```

#### Fn::GetAtt

- Attributes are attached to any resources you create
- To know the attributes of your resources, the best place to look at is the documentation
- Example: the AZ of an EC2 instance!

![getatt](/img/docs/cloud/aws/getatt.png)

#### Fn::FindInMap

- We use Fn::FindInMap to return a named value from a specific key
- `!FindInMap [ MapName, TopLevelKey, SecondLevelKey ]`

![findinmap](/img/docs/cloud/aws/findinmap.png)

#### Fn::ImportValue

- Import values that are exported in other stacks
- For this, we use the Fn::ImportValue function

![importValue](/img/docs/cloud/aws/importValue.png)

#### Fn::Base64

- Convert String to it’s Base64 representation
  - `!Base64 "ValueToEncode"`
- Example: pass encoded data to EC2 Instance’s UserData property

![base64](/img/docs/cloud/aws/base64.png)

#### Condition Functions

```yaml
Conditions:
  CreateProdResources: !Equals [!Ref EnvType, prod]
```

- The logical ID is for you to choose. It’s how you name condition
- The intrinsic function (logical) can be any of the following:
  - Fn::And
  - Fn::Equals
  - Fn::If
  - Fn::Not
  - Fn::Or

### Rollbacks

- Stack Creation Fails:
  - Default: everything rolls back (gets deleted). We can look at the log
  - Option to disable rollback and troubleshoot what happened
- Stack Update Fails:
  - The stack automatically rolls back to the previous known working state
  - Ability to see in the log what happened and error messages
- Rollback Failure? Fix resources manually then issue ContinueUpdateRollback API from Console
  - Or from the CLI using continue-update-rollback API call

### Service Role

- IAM role that allows CloudFormation to create/update/delete stack resources on your behalf
- Give ability to users to create/update/delete the stack resources even if they don’t have permissions to work with the resources in the stack
- Use cases:
  - You want to achieve the least privilege principle
  - But you don’t want to give the user all the required permissions to create the stack resources
- User must have iam:PassRole permissions

![cf-service-role](/img/docs/cloud/aws/cf-service-role.png)

### Capabilities

- CAPABILITY_NAMED_IAM and CAPABILITY_IAM
  - Necessary to enable when you CloudFormation template is creating or updating IAM resources (IAM User, Role, Group, Policy, Access Keys, Instance Profile…)
  - Specify CAPABILITY_NAMED_IAM if the resources are named
- CAPABILITY_AUTO_EXPAND
  - Necessary when your CloudFormation template includes Macros or Nested Stacks (stacks within stacks) to perform dynamic transformations
  - You’re acknowledging that your template may change before deploying
- InsufficientCapabilitiesException
  - Exception that will be thrown by CloudFormation if the capabilities haven’t been acknowledged when deploying a template (security measure)

#### DeletionPolicy Delete

![cf-deletion](/img/docs/cloud/aws/cf-deletion.png)

#### DeletionPolicy Retain

- Specify on resources to preserve in case of CloudFormation deletes
- Works with any resource

#### DeletionPolicy Snapshot

- Create one final snapshot before deleting the resource
- Examples of supported resources:
  - EBS Volume, ElastiCache Cluster, ElastiCache ReplicationGroup
  - RDS DBInstance, RDS DBCluster, Redshift Cluster, Neptune DBCluster, DocumentDB DBCluster

#### Stack Policies

- During a CloudFormation Stack update, all update actions are allowed on all resources (default)
- **A Stack Policy is a JSON document that defines the update actions that are allowed on specific resources during Stack updates**
- Protect resources from unintentional updates
- When you set a Stack Policy, all resources in the Stack are protected by default
  - Specify an explicit ALLOW for the resources you want to be allowed to be updated

![stackpolicy-example](/img/docs/cloud/aws/stackpolicy-example.png)

#### Termination Protection

- To prevent accidental deletes of CloudFormation Stacks, use TerminationProtection

### Custom Resources

- Used to
  - define resources not yet supported by CloudFormation
  - define custom provisioning logic for resources can that be outside of CloudFormation (on-premises resources, 3rd party resources…)
  - have custom scripts run during create / update / delete through Lambda functions (running a Lambda function to empty an S3 bucket before being deleted)
- Defined in the template using AWS::CloudFormation::CustomResource or Custom::MyCustomResourceTypeName (recommended)
- Backed by a Lambda function (most common) or an SNS topic

#### Definition

- ServiceToken specifies where CloudFormation sends requests to, such as Lambda ARN or SNS ARN (required & must be in the same region)
- Input data parameters (optional)

![custom-resource](/img/docs/cloud/aws/custom-resource.png)

#### Example

Use Case: Delete content from an S3 bucket

![cf-custom-example](/img/docs/cloud/aws/cf-custom-example.png)

### StackSets

- Create, update, or delete stacks across multiple accounts and regions with a single operation/template
- Target accounts to create, update, delete stack instances from StackSets
- When you update a stack set, all associated stack instances are updated throughout all accounts and regions
- Can be applied into all accounts of an AWS Organization
- Only Administrator account (or Delegated Administrator) can create StackSets
