---
id: network
title: Network
---

The Kubernetes network model is built out of several pieces:

- Each pod in a cluster gets its own unique cluster-wide IP address
- The pod network (also called a cluster network) handles communication between pods. It ensures that (barring intentional network segmentation):
  -  All pods can communicate with all other pods, whether they are on the same node or on different nodes. Pods can communicate with each other directly, without the use of proxies or address translation (NAT).
  -  Agents on a node (such as system daemons, or kubelet) can communicate with all pods on that node.
-  The Service API lets you provide a stable (long lived) IP address or hostname for a service implemented by one or more backend pods, where the individual pods making up the service can change over time.
- The Gateway API (or its predecessor, Ingress) allows you to make Services accessible to clients that are outside the cluster.
- NetworkPolicy is a built-in Kubernetes API that allows you to control traffic between pods, or between pods and the outside world.

## CNI (Container Network Interface)

For cluster networking Kubernetes relies on the Container Network Interface (CNI) standard. Third party CNI plugins implement the actual networking functionality. Popular CNI plugins are:

- Calico
- Flannel
- Cilium

To check which plugin is used in your cluster you can check via: `ls /etc/cni/net.d/`

## Service Types

There are 3 different types that can be used to expose service inside or outside the cluster:

- ClusterIP (default)
  - Exposes the service on a cluster-internal IP
  - Makes the service only reachable from within the cluster
- NodePort
  - Exposes the service on each Node's IP at a static port (the NodePort)
  - A ClusterIP service, to which the NodePort service routes, is automatically created
  - Makes the service reachable from outside the cluster using `<NodeIP>:<NodePort>`
- LoadBalancer
  - Exposes the service externally using a cloud provider's load balancer
  - A NodePort and ClusterIP service, to which the external load balancer routes, are automatically created
  - Makes the service reachable from outside the cluster using the load balancer's IP address

kube-proxy is responsible for translating the services into usable network rules.

## DNS

- Each service is automatically registered with the kube-dns (now CoreDNS) and has a CNAME record created like `web-service.default.svc.cluster.local`
- The same can be enabled for pods. They will get a CNAME like: `pod-ip-address.namespace.pod.cluster.local`
- The CoreDNS service is registered as a pod in the cluster and is responsible for resolving IPs to hostnames and vice versa

## Ingress

- Ingress is an API object that manages external access to the services in a cluster, typically HTTP
- Ingress can provide load balancing, SSL termination and name-based virtual hosting
- Ingress was recently succeeded by Gateway API, which provides more flexibility and features
- An Ingress controller like nginx or traefik is required to implement the Ingress rules
  - the controller acts upon the ingress resources
  - the controller is deployed via a deployment exposed through a service, has its config in a ConfigMap and a ServiceAccount for Authorization
- Routes can route traffic via different URL prefixes for instance