---
title: Elastic Compute Cloud (EC2)
sidebar_position: 3
---

EC2 is the Infrastructure as a Service offering of AWS. It mainly consists in the capability of:

- Renting virtual machines (EC2)
- Storing data on virtual drives (EBS)
- Distributing load across machines (ELB)
- Scaling the services using an auto-scaling group (ASG)

## EC2 sizing & configuration options

- Operating System
- CPU
- RAM
- Storage
  - Network attached (EBS & EFS)
  - Hardware (EC2 Instance Store)
- Network card
- Firewall rules
- Bootstrap script (configure at first launch): EC2 User Data

### EC2 User Data

- It is possible to bootstrap our instances using an EC2 User data script
- Bootstrapping means launching commands when a machine starts
- That script is only run once at the instance first start
- EC2 user data is used to automate boot tasks such as:
  - Installing updates
  - Installing software
  - Downloading common files from the internet
- The EC2 User Data Script runs with the root user

### EC2 Instance Types

![ec2-instance-types](/img/docs/cloud/aws/ec2-instance-types.png)

- General Purpose
  - Great for a diversity of workloads such as web servers or code repositories
  - Balance between: Compute, Memory, Networking
- Compute Optimized
  - Great for compute-intensive tasks that require high performance processors
- Memory Optimized
  - Fast performance for workloads that process large data sets in memory
- Storage Optimized
  - Great for storage-intensive tasks that require high, sequential read and write access to large data sets on local storage

## Security Groups

- Security Groups are the fundamental of network security in AWS (acting as a firewall)
- They regulate:
  - Access to Ports
  - Authorized IP ranges – IPv4 and IPv6
  - Control of inbound/outbound network traffic
- Security groups only contain allow rules
  - All inbound traffic is blocked by default
  - All outbound traffic is authorized by default
- Security groups rules can reference by IP or by security group

![security-group-example-1](/img/docs/cloud/aws/security-group-example-1.png)
![security-group-example-2](/img/docs/cloud/aws/security-group-example-2.png)

Security Groups can be:

- Can be attached to multiple instances
- Locked down to a region / VPC combination
- Does live “outside” the EC2 – if traffic is blocked the EC2 instance won’t see it
- It’s good to maintain one separate security group for SSH access
- If your application is not accessible (time out), then it’s a security group issue
- If your application gives a “connection refused“ error, then it’s an application error or it’s not launched

### Referencing other security groups - Diagram

![referencing-security-groups](/img/docs/cloud/aws/referencing-security-groups.png)

### Classic Ports to know

- 21 - FTP
- 22 - SSH/SFTP
- 80 - HTTP
- 443 - HTTPS
- 3389 RDP (Remote Desktop)

## EC2 Instances Purchasing Options

- **On-Demand Instances** – short workload, predictable pricing, pay by second
- **Reserved** (1 & 3 years)
  - **Reserved Instances** – long workloads
  - **Convertible Reserved Instances** – long workloads with flexible instances
- **Savings Plans** (1 & 3 years) –commitment to an amount of usage, long workload
- **Spot Instances** – short workloads, cheap, can lose instances (less reliable)
- **Dedicated Hosts** – book an entire physical server, control instance placement
- **Dedicated Instances** – no other customers will share your hardware
- **Capacity Reservations** – reserve capacity in a specific AZ for any duration

### EC2 On Demand

- Pay for what you use:
  - Linux or Windows - billing per second, after the first minute
  - All other operating systems - billing per hour
- Has the highest cost but no upfront payment
- Recommended for short-term and un-interrupted workloads, where you can't predict how the application will behave

### EC2 Reserved Instances

- Up to 72% discount compared to On-demand
- You reserve a specific instance attributes (Instance Type, Region, Tenancy, OS)
  - Reservation Period – 1 year (+discount) or 3 years (+++discount)
  - Payment Options – No Upfront (+), Partial Upfront (++), All Upfront (+++)
  - Reserved Instance’s Scope – Regional or Zonal (reserve capacity in an AZ)
- Recommended for steady-state usage applications (think database)
- You can buy and sell in the Reserved Instance Marketplace
- Convertible Reserved Instance
  - Can change the EC2 instance type, instance family, OS, scope and tenancy
  - Up to 66% discount

### EC2 Savings Plans

- Get a discount based on long-term usage (up to 72% - same as RIs)
- Commit to a certain type of usage ($10/hour for 1 or 3 years)
- Usage beyond EC2 Savings Plans is billed at the On-Demand price

- Locked to a specific instance family & AWS region (e.g., M5 in us-east-1)
- Flexible across:
  - Instance Size (e.g., m5.xlarge, m5.2xlarge)
  - OS (e.g., Linux, Windows)
  - Tenancy (Host, Dedicated, Default)

### EC2 Spot Instances

- Can get a discount of up to 90% compared to On-demand
- Instances that you can “lose” at any point of time if your max price is less than the current spot price
- The MOST cost-efficient instances in AWS
- Useful for workloads that are resilient to failure
  - Batch jobs
  - Data analysis
  - Image processing
  - Any distributed workloads
  - Workloads with a flexible start and end time
- Not suitable for critical jobs or databases

### EC2 Dedicated Hosts

- A physical server with EC2 instance capacity fully dedicated to your use
- Allows you address **compliance requirements** and **use your existing server bound software licenses** (per-socket, per-core, per—VM software licenses)
- Purchasing Options:
  - On-demand – pay per second for active Dedicated Host
  - Reserved - 1 or 3 years (No Upfront, Partial Upfront, All Upfront)
- The most expensive option
  - Useful for software that have complicated licensing model (BYOL – Bring Your Own License)
  - Or for companies that have strong regulatory or compliance needs

### EC2 Dedicated Instances

- Instances run on hardware that’s dedicated to you
- May share hardware with other instances in same account
- No control over instance placement (can move hardware after Stop / Start)

![dedicated-instances](/img/docs/cloud/aws/dedicated-instances.png)

### EC2 Capacity Reservations

- Reserve On-Demand instances capacity in a specific AZ for any duration
- No time commitment (create/cancel anytime), no billing discounts
- You’re charged at On-Demand rate whether you run instances or not
- Suitable for short-term, uninterrupted workloads that needs to be in a specific AZ
  - Combine with Regional Reserved Instances and Savings Plans to benefit from billing discounts

### AWS charges for IPv4 addresses

- Starting February 1st 2024, there’s a charge for all Public IPv4 created in your account
- $0.005 per hour of Public IPv4 (~ $3.6 per month)
- RDS and Load Balancers have one public ipv4 per AZ

## Amazon EC2 – Instance Storage

### EBS Volumes

- An EBS (Elastic Block Store) Volume is a network drive (i.e. not a physical drive) you can attach to your instances while they run
  - It uses the network to communicate the instance, which means there might be a bit of latency
  - It can be detached from an EC2 instance and attached to another one quickly
- It allows your instances to persist data, even after their termination
- They can only be mounted to one instance at a time (at the CCP level)
- It’s locked to an Availability Zone (AZ)
  - An EBS Volume in us-east-1a cannot be attached to us-east-1b
  - To move a volume across, you first need to snapshot it
- Have a provisioned capacity (size in GBs, and IOPS)
  - You can increase the capacity of the drive over time

#### EBS Volume - Example

![ebs-volume](/img/docs/cloud/aws/ebs-volume.png)

### Delete on Termination attribute

- Controls the EBS behaviour when an EC2 instance terminates
  - By default, the root EBS volume is deleted (attribute enabled)
  - By default, any other attached EBS volume is not deleted (attribute disabled)
- This can be controlled by the AWS console / AWS CLI

### EBS Snapshots

- Make a backup (snapshot) of your EBS volume at a point in time
- Not necessary to detach volume to do snapshot, but recommended
- Can copy snapshots across AZ or Region

![snapshot-example](/img/docs/cloud/aws/snapshot-example.png)

#### EBS Snapshots Features

- **EBS Snapshot Archive:** cheaper storage but takes 24-72 hours to restore
- **Recycle Bin:** Setup rules to retain deleted snapshots so you can recover them after an accidental deletion with a specified retention window (from 1 day to 1 year)
- **Fast Snapshot Restore (FSR):** Force full initialization of snapshot to have no latency on the first use ($$$)

### Amazon Machine Image (AMI)

- AMI are a customization of an EC2 instance
  - You add your own software, configuration, operating system, monitoring...
  - Faster boot / configuration time because all your software is pre-packaged
- AMI are built for a specific region (and can be copied across regions)
- You can launch EC2 instances from:
  - A Public AMI: AWS provided
  - Your own AMI: you make and maintain them yourself
  - An AWS Marketplace AMI: an AMI someone else made (e.g. ELK)

#### AMI Process (from an EC2 instance)

- Start an EC2 instance and customize it
- Stop the instance (for data integrity)
- Build an AMI – this will also create EBS snapshots
- Launch instances from other AMIs

![ami-workflow](/img/docs/cloud/aws/ami-workflow.png)

### EC2 Instance Store

- EBS volumes are network drives with good but “limited” performance
- If you need a high-performance hardware disk, use EC2 Instance Store
  - Better I/O performance (very high IOPS)
  - EC2 Instance Store lose their storage if they’re stopped (ephemeral)
  - Good for buffer / cache / scratch data / temporary content
  - Risk of data loss if hardware fails
  - Backups and Replication are your responsibility

### EBS Volume Types

EBS Volumes are characterized in Size | Throughput | IOPS (I/O Ops Per Sec).
EBS Volumes come in 6 types:

- **gp2 / gp3 (SSD):** General purpose SSD volume that balances price and performance for a wide variety of workloads
- **io1 / io2 Block Express (SSD):** Highest-performance SSD volume for mission-critical low-latency or high-throughput workloads
- **st1 (HDD):** Low cost HDD volume designed for frequently accessed, throughput intensive workloads
- **sc1 (HDD):** Lowest cost HDD volume designed for less frequently accessed workloads

Only gp2/gp3 and io1/io2 Block Express can be used as boot volumes!

#### EBS Volume Types Use cases

- General Purpose SSD
  - 1 GiB - 16 TiB
  - Cost effective storage, low-latency
  - Good for: System boot volumes, Virtual desktops, Development and test environment
  - gp3: Baseline of 3,000 IOPS and throughput of 125 MiB/s | **Can increase IOPS** up to 16,000 and throughput up to 1000 MiB/s **independently**
  - gp2: Small gp2 volumes can burst IOPS to 3,000 | **Size of the volume and IOPS are linked**, max IOPS is 16,000
- Provisioned IOPS (PIOPS) SSD
  - Critical business applications with sustained IOPS performance
  - Or applications that need more than 16,000 IOPS
  - **Great for databases workloads (sensitive to storage perf and consistency)**
  - io1 (4 GiB - 16 TiB): Max PIOPS: 64,000 | Can increase PIOPS independently from storage size
  - io2 Block Express (4 GiB – 64 TiB): Sub-millisecond latency | Max PIOPS: 256,000
  - Supports EBS Multi-attach
- Hard Disk Drives (HDD)
  - Cannot be a boot volume
  - 125 GiB to 16 TiB
  - st1: Throughput Optimized HDD for Big Data, Data Warehouses, Log Processing | Max throughput 500 MiB/s – max IOPS 500
  - sc1: Cold HDD for data that is infrequently accessed | Max throughput 250 MiB/s – max IOPS 250 | low cost

Volume Summary: [AWS Docs](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volume-types.html)

### EBS Multi-Attach – io1/io2 family

- Attach the same EBS volume to multiple EC2 instances in the same AZ
- Each instance has full read & write permissions to the high-performance volume
- Use case:
  - Achieve higher application availability in clustered Linux applications (ex: Teradata)
  - Applications must manage concurrent write operations
- **Up to 16 EC2 Instances at a time (relevant for exam)**
- Must use a file system that’s cluster-aware (not XFS, EXT4, etc…)

### Amazon EFS – Elastic File System

- Managed NFS (network file system) that can be mounted on many EC2
- EFS works with EC2 instances in multi-AZ
- Highly available, scalable, expensive (3x gp2), pay per use

![elastic-file-system](/img/docs/cloud/aws/elastic-file-system.png)

- Use cases: content management, web serving, data sharing, Wordpress
- Uses NFSv4.1 protocol
- Uses security group to control access to EFS
- Compatible with Linux based AMI (not Windows)
- Encryption at rest using KMS
- POSIX file system (~Linux) that has a standard file API
- File system scales automatically, pay-per-use, no capacity planning!

### EFS – Performance & Storage Classes

- EFS Scale
  - 1000s of concurrent NFS clients, 10 GB+ /s throughput
  - Grow to Petabyte-scale network file system, automatically
- Performance Mode (set at EFS creation time)
  - General Purpose (default) – latency-sensitive use cases (web server, CMS, etc…)
  - Max I/O – higher latency, throughput, highly parallel (big data, media processing)
- Throughput Mode
  - Bursting – 1 TB = 50MiB/s + burst of up to 100MiB/s
  - Provisioned – set your throughput regardless of storage size, ex: 1 GiB/s for 1 TB storage
  - Elastic – automatically scales throughput up or down based on your workloads
    - Up to 3GiB/s for reads and 1GiB/s for writes
    - Used for unpredictable workloads

#### EFS – Storage Classes

- Storage Tiers (lifecycle management feature – move file after N days):
  - Standard: for frequently accessed files
  - Infrequent access (EFS-IA): cost to retrieve files, lower price to store
  - Archive: rarely accessed data (few times each year), 50% cheaper
  - Implement lifecycle policies to move files between storage tiers
- Availability and durability
  - Standard: Multi-AZ, great for prod
  - One Zone: One AZ, great for dev, backup enabled by default, compatible with IA (EFS One Zone-IA)
- Over 90% in cost savings

![efs-storage](/img/docs/cloud/aws/efs-storage.png)

### EBS vs EFS – Elastic Block Storage

#### EBS

- EBS volumes
  - one instance (except multi-attach io1/io2)
  - are locked at the Availability Zone (AZ) level
  - gp2: IO increases if the disk size increases
  - gp3 & io1: can increase IO independently
- To migrate an EBS volume across AZ
  - Take a snapshot
  - Restore the snapshot to another AZ
  - EBS backups use IO and you shouldn’t run them while your application is handling a lot of traffic
- Root EBS Volumes of instances get terminated by default if the EC2 instance gets terminated

#### EFS

- Mounting 100s of instances across AZ
- EFS share website files (WordPress)
- Only for Linux Instances (POSIX)
- EFS has a higher price point than EBS
- Can leverage Storage Tiers for cost savings
- Remember: EFS vs EBS vs Instance Store

![ebs-vs-efs](/img/docs/cloud/aws/ebs-vs-efs.png)
