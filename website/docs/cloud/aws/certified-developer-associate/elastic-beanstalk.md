---
title: Elastic Beanstalk
sidebar_position: 3
---

What is Elastic Beanstalk:

- PaaS: Run/Manage applications without maintaining the infrastructure
- Not recommended for Production applications

Supported languages:

- Ruby
- Python
- PHP
- Go
- NodeJs
- C#
- and more

## Web vs Worker Environment

- Web Environment: For running web applications
- Worker Environment: For background or long running jobs
- Can be deployed together (frontend/backend)

### Web Environment Types

- Load-Balanced Env
  - uses Auto Scaling Groups (ASG)
  - uses Elastic Load Balancing (ELB)
  - Designed to scale
- Single-Instance Env
  - no Load balancer => saves cost
  - apart from that no difference to load-balanced env

## Deployment Policies

![deployment-policies](/img/docs/cloud/aws/deployment-policies.png)

- Single-Instance Env doesn't support all of the policies
- All at once
  - Deploys new versions to all instances at once
  - All instances out of service during deployment
- Rolling
  - Deploys new app version to batch of instances at a time
  - Takes out a configurable percentage of instances offline per batch
  - Capacity is reduced while a batch is taken offline
- Rolling with additional batch
  - Ensures capacity is never reduced during update
  - Launches new instances before updating a batch
- Immutable (safest way to deploy for critical applications)
  - Creates a new ASG with EC2 instances
  - Deploys the updated version of the app on the new instances
  - Points the ELB to the new ASG and deletes the old ASG

In Place Deployment: All the deployment policies provided by EB are considered in-place since they are within the scope of a single EB environment.

- Blue/Green
  - run tow identical production environments
  - shift traffic from Blue (old) to Green (new)
  - not in-place => blue/green because it requires two EB environments, swapping occurs at the DNS level
- EB Traffic Splitting
  - Allows you to forward a portion of your traffic to the new environment after a period of time then move the rest

## Configuration Files

- .ebextensions: hidden folder at the root of the project which contains config files
- .config: extension for the config files
- config files can configure:
  - Option Settings
  - Linux/Windows server configuration
  - Custom resources

## Environment Manifest

- File at the root of the project `env.yml`
- Allows you to configure:
  - Name of env
  - Stack (programming language)
  - Associating the environment links
  - Default Configuration of Services
  - etc.
- Makes EB environment portable

## CLI

- Let's you create and manage your EB environments
  - `eb init` - Inits a new env, creates config files
  - `eb create` - Creates new env and deploys an application to it
  - `eb clone` - Creates a clone of existing env
  - `eb deploy` - Deploys app to an existing env
  - `eb logs` - Get slogs
  - `eb events` - Gets events
  - `eb health` - Gets health status
  - `eb terminate` - Terminates and deletes env + resources
  - `eb abort` - Cancels an env update or deployment that is in progress
  - `eb status` - Gets status of an env
  - `eb list` - List all envs

## Custom Image

- If you need to install a lot of software that isn't used in the standard AMIs (Amazon Machine Image) you can setup a custom image.

## Configuring RDS

- A database can be added inside or outside the EB env
  - When inside env it will be deleted when EB env is terminated
