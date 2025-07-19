---
id: core-components
title: Core Components
---

## Pods

- One or multiple containers that contain the application code
- Containers can communicate through localhost and share storage space

## Replica Sets

- Runs multiple instances of a pod (can also run a single one)
- Ensures that there is always a stable set of replicated pods running
- Replication Controller is the older way of doing this
- `matchlabels` identifies potential pods to acquire

## Deployments

- Higher level than replica set
- Manages a set of pods
- Provides declarative updates for pods and replica sets
- In the deployment we describe the desired state
- Deployment controller changes the state
- Can be used for rollbacks

## Services

- Enable communication between services
- There are different types of services
  - ClusterIP
    - internal IP inside cluster
    - can be exposed via ingress/gateway
  - NodePort
    - Exposes service on each node in the cluster at a static port
    - to make the node port available Kubernetes sets up a ClusterIP
    - Spec: Pod -> TargetPort, Service -> Port, Node -> NodePort (30000-32767)
  - LoadBalancer
    - Exposes service externally through load balancer
    - Used with Cloud Providers
  - External Name
    - Mapping to hostname via cluster DNS
    - e.g. api.foo.bar.example

## Daemon Sets

- Ensures that all (or some) nodes run a copy of a pod

## Static Pods

- Managed directly by the kubelet without api-server observing them
- There is a mirror pod on the api-server so it knows about it but no control
- Use-case: primarily running control plane pods
- Pod definition is read from specific directory -> kubelet monitors this directory
- kubelet.service -> --config: kubeconfig.yaml, kubeconfig.yaml -> staticPodPath: `/etc/kubernetes/manifests`
- Static pods have the node name they are deployed to suffixed to their podname

## Custom Resources

- Extension of the Kubernetes API
- Example: Certificate from cert-manager
- Custom controllers can act upon the created custom resources
- Custom resources are defined through a CustomResourceDefinition
- Operators: One or multiple controllers that act upon a custom resource (or multiple)
