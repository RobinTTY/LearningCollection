---
id: miscellaneous-concepts
title: Miscellaneous Concepts
---

## ConfigMaps and Secrets

- ConfigMaps:
  - Store non-confidential data in key-value pairs
  - Consumed by pods as environment variables, command-line arguments, or configuration files
  - Used to decouple environment-specific configurations from application code
- Secrets:
  - Store sensitive data such as passwords, OAuth tokens, and SSH keys
  - Similar to ConfigMaps but with additional security measures
  - Can be consumed by pods in the same way as ConfigMaps
  - By default stored unencrypted in etcd, but can be encrypted at rest

## Scheduling

- Kubernetes scheduler is responsible for placing pods on nodes
- Scheduling is done for pods where spec.nodeName is not set
- Scheduler runs as a pod in the kube-system namespace
- There can be multiple schedulers as well as custom schedulers (each one has a profile)
  - On pod: `spec.schedulerName: "my-custom-scheduler"`
- Phases:
  1. Filtering: Filters nodes based on resource requirements, affinity/anti-affinity rules, taints, etc.
  2. Scoring: Ranks the filtered nodes based on various criteria (e.g., resource availability, node health)
  3. Binding: Binds the pod to the selected node

## Taints and Tolerations

- Taints are applied to nodes to repel pods that do not tolerate them
- Tolerations are applied to pods to allow them to be scheduled on nodes with specific taints
- Taints and tolerations are used to control pod placement and ensure that pods are scheduled on appropriate nodes

## Node Selectors and Affinity

- Node selectors are used to constrain pods to run on specific nodes based on labels
- `spec.nodeSelector` is used to specify the labels that a node must have for the pod to be scheduled on it
- Affinity rules provide more advanced scheduling options:
  - Node affinity: Similar to node selectors but allows for more complex rules (e.g., preferred vs. required)
  - Pod affinity/anti-affinity: Allows pods to be scheduled based on the presence or absence of other pods

## Autoscaling

- Kubernetes supports automatic horizontal and vertical scaling of pods/clusters
  - for clusters: Cluster Autoscaler
  - for pods: Horizontal Pod Autoscaler (HPA) and Vertical Pod Autoscaler (VPA)
- VPA adjusts CPU & memory of pods (good for DBs)
- HPA adjusts number of pods

## Resource Quotas and Requirements

- Resource quotas can be applied to a namespace to limit available resources
- Resource requirements can be specified for pods to ensure they have the necessary resources to run
  - Requests: the minimum amount of cpu/memory that needs to be available to schedule the pod
  - Limits: the maximum amount of cpu/memory that can be used by the pod
  - Suffixes: `m` for milli (e.g. 1000m = 1 CPU), `Mi` for Mebibytes (e.g. 1024 MiB = 1 GiB)
  Limit Range: Constraints resource allocation for each object kind (e.g. pod/pvc) in a namespace

```yaml title="Resource Quota Example"
spec:
  containers:
    - name: my-container
      resources:
        requests:
        memory: "64Mi"
        cpu: "250m"
        limits:
        memory: "128Mi"
        cpu: "500m"
```

```yaml title="Limit Range Example"
spec:
  limits:
    - default:
        cpu: "500m"
        memory: "128Mi"
      defaultRequest:
        cpu: "250m"
        memory: "64Mi"
      type: Container
```

## Labels and Annotations

- Labels are key-value pairs attached to objects (e.g., pods, services) for identification and selection
  - Used for grouping and selecting objects (e.g., `spec.selector.matchLabels`)
  - Example: `app: my-app`, `env: production`
- Annotations are also key-value pairs but used for storing non-identifying metadata
  - Can be used to store additional information about an object (e.g., build version, maintainer)
  - Not used for selection or grouping
  - Example: `description: "This is my application"`, `maintainer: "John Doe"`

## Admission Controller

- Admission controllers are plugins that intercept requests to the Kubernetes API that create/delete or modify objects
- Can validate or mutate requests
- Change enabled/disabled plugins: /etc/kubernetes/manifests/kube-apiserver.yaml
- Common admission controllers:
  - `NamespaceLifecycle`: Validates namespace lifecycle
  - `LimitRanger`: Enforces resource limits
  - `ServiceAccount`: Automatically creates service accounts for pods
  - `NodeRestriction`: Restricts nodes from modifying their own objects
- Custom admission controllers can be implemented (either validating or mutating) through webhooks
- Flow: Mutation first then validation

## Monitoring

- Kubernetes doesn't have a built-in monitoring solution, instead there are various third-party solutions
- Metrics Server is one possible solution
- Each kubelet contains a component called cAdvisor which monitors performance of pods and exposes them

## Priority

- Pods can have a priority assigned to them
- Higher priority pods are scheduled before lower priority pods
- If a high priority pod cannot be scheduled due to resource constraints, lower priority pods may be evicted to make room
  - This process is called preemption
- Priorities are added via `PriorityClass` objects
  - Classes are assigned to pods via `spec.priorityClassName`
- There are different preemption policies:
  - `PreemptLowerPriority`: Default, preempts lower priority pods
  - `Never`: Does not preempt any pods

### PriorityClass

If you want to ensure that your apps running in Kubernetes stay running, even when the cluster is under heavy load, you can create a custom `PriorityClass` for them to use.

Assigning them a higher priority ensures they get scheduled first, and lower-priority pods get evicted before them if the node is full.

```bash
kubectl create priorityclass high-priority --value=1000000
```

If no priority class is set in the pod spec, the pod gets a priority value of `0` by default. This means, it's the first to be evicted if the node is under memory or CPU pressure.

### High priority Pods

You may have apps that must always stay running, such as:

- Logging/monitoring agents
- Control-plane components (in self-managed clusters)
- Payment gateways
- Message queues

Assigning them higher priority ensures they get scheduled first, and they don't get evicted before the lower priority pods.

### Preemption

Preemption is the process of evicting pods with lower priority when the node(s) experiences CPU or memory stress.