---
id: security
title: Security
---

Kubernetes includes several APIs and security controls, as well as ways to define policies that can form part of how you manage information security.

## Security Mechanisms

- Control plane protection: Protects the API server through TLS/Encryption at rest
- Secrets: Basic protection for configuration values
- Admission controllers intercept API requests and can validate or mutate them
- Workload protection: Network policies/Runtime classes/Pod security standards
- Auditing: Auditing of actions inside the cluster

## Authentication Mechanisms

- There are service accounts and normal users managed by Kubernetes
- Authentication relies on:
  - Static password file (Basic Auth file)
  - Static token file (Token Auth file)
  - Certificates
  - Identity Providers
- The Kube-API, ETCD and Kubelet server all have certificates
- Users, the Kube-Scheduler, Kube-Controller-Manager and Kube Proxy have client certificates
- There can be different certificate authorities in the cluster
  - All certs must be signed by a valid CA in the cluster
- Specified in `/etc/kubernetes/manifests/kube-apiserver.yaml` and `/etc/kubernetes/manifests/etcd.yaml`

## Certificate Issuance

- Certificates necessary to access the Kubernetes API can be issued automatically
- Process:
  1. Create CertificateSigningRequest (CSR) object
  2. Admin reviews and approves the CSR
  3. Kubernetes issues the certificate
  4. Client can use the certificate to access the API
- User needs a private key and generates a CSR -> sent to admin
- Admin creates CSR object from CSR sent by user (encoded to base64)

## Authorization

- Authorization Mechanisms: Node, ABAC, RBAC, Webhook
  - ABAC: applies directly to users/groups
  - Webhook: external service called to authorize requests
- Multiple authorizers can be used (one approval needed)

### Role-Based Access Control (RBAC)

- Step 1: Create Role or ClusterRole
- Step 2: Create RoleBinding or ClusterRoleBinding
- Roles define permissions within a namespace
- ClusterRoles define permissions cluster-wide
- RoleBindings bind Roles to users/groups/service accounts within a namespace
- ClusterRoleBindings bind ClusterRoles to users/groups/service accounts cluster-wide

## Service Accounts

- Used by pods to interact with the Kubernetes API
- Each namespace has a default service account
  - Each pod has this service account assigned if no other SA is specified

## Security Contexts

- Defines privilege and access control settings for a pod/container
  - Example: 'Privileged' policy lets a pod access the hosts network
- The context can be set on pod or container level
  - Capabilities can only be assigned on the container level
  - if context is defined on container and pod level, the container level settings override the ones on pod level for the relevant container

## Network policies

- Control traffic flow at IP address or port level
- Allow to set rules inside cluster and between pods and outside world
- Traffic inside cluster is not restricted by default
- Network policies are linked to pods via labels/pod selectors
- The networking plugin needs to support Network policies for them to be enforced
- If a network policy with type ingress/egress is applied to a pod it becomes isolated to all ports which are not specifically allowed
- Rules are stateful (no explicit allow for response traffic needed)