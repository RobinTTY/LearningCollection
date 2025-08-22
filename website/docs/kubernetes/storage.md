---
id: storage
title: Storage
---

- Different kinds of storage is managed through the Container Storage Interface (CSI)
- CSI allows Kubernetes to use storage systems from different vendors
  - e.g. AWS EBS, Google Cloud Persistent Disk, Azure Disk, etc.
- CSI is not Kubernetes-specific, it is a universal standard for container orchestration systems

## Persistent Volumes (PV)

- Piece of storage in the cluster
- Lifecycle independent of any pod that uses it
- Depending on the underlying storage type can have different performance characteristics
- Different kinds of storage are described through Storage Classes

## Persistent Volume Claims (PVC)

- Request for storage by a user
- PVCs consume the available PV storage
- Claims can request specific size and access modes (e.g. ReadWriteOnce, ReadOnlyMany)
- 1:1 relationship between PVC and PV
- Policy decides what happens when a PVC is deleted
  - Retain: PV is not deleted, can be reused
  - Delete: PV is deleted along with the underlying storage
- Even if a PVC is deleted, the underlying PV can still exist based on the policy
  
## Volumes

- Decouples storage from the container
- Lifecycle is coupled to the pod
- Enables safe container restart and inter-container data sharing

## Storage Classes

- Describe a class of storage which can be used
- Through the storage class name a user can request storage
- A default storage class can be specified as fallback
- Dynamic Volume provisioning is used to automatically provision storage through a provisioner when a PVC is created
  - The provisioner is defined in the storage class
