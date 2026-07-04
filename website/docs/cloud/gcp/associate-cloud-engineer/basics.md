---
title: Basics
sidebar_position: 1
---

## Regions and Availability Zones

Regions: Geographically separated locations where Google Cloud resources can be deployed.
Availability Zones: Distinct locations within a region that are designed to be isolated from each other to provide fault tolerance.

## Google Compute Engine (GCE) - Virtual Machines

Google Compute Engine allows you to create and run virtual machines on Google Cloud's infrastructure. It is comparable to Amazon EC2 and Microsoft Azure Virtual Machines.

### Machine Families

- General-purpose (E, N): Balanced CPU and memory for a wide range of workloads.
- Compute-optimized (C, H): High-performance CPUs for compute-intensive workloads.
- Memory-optimized (M, X): High memory capacity for memory-intensive workloads.
- Storage-optimized (Z): High disk throughput and IOPS for storage-intensive workloads.

### Machine Types

- standard: 4GB RAM per vCPU
- highmem: 8GB RAM per vCPU
- highcpu: 1GB RAM per vCPU

### Images

- Public images: Pre-configured operating system images provided by Google Cloud or third-party providers.
- Custom images: User-created images based on existing instances or other images.

### IP Addresses

- Internal IP: Used for communication between resources within the same VPC network.
- External Ephemeral IP: Temporary public IP address assigned to a VM instance, released when the instance is stopped or restarted.
- External Static IP: Permanent public IP address that can be reserved and assigned to a VM instance.