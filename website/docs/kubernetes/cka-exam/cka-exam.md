---
id: cka-exam
title: CKA Exam notes
---

- Don't forget to set context before each task
- Copy + Paste is important (ctrl + shift + v | Shift + Insert)
- Important Linux commands
  - kubectl logs >pod-name> | grep "abc" > /tmp/access-failed.txt
  - vim: "set paste" command
- Great overview of the cluster endpoints: `kubectl cluster-info`

## Possible Tasks

### Storage

- Create a StorageClass
- Create a PersistentVolume
- Create a PersistentVolumeClaim
- **Dynamic Volume Provisioning**
- Volume Types, Access Modes, Reclaim Policies

:::info
If the provisioner kubernetes.io/no-provisioner is used, it means that the PVs need to be created manually (static provisioning).
:::

### Scheduling

- Applying affinity to pods
- Applying taints to nodes
- Applying tolerations to pods
- Configuring and using autoscaling (VPA/HPA)
- StatefulSets

### Networking

- Troubleshooting CoreDNS
- Customizing DNS settings
- Gateway API

### Security

- Enforce restricted pod security standard

### 3rd Party Resources

- Helm
- Kustomize
- CRDs and Operators

## Summary of new Exam Topics

### Helm

Important commands:

- Create new chart: `helm create <chart-name>`
- Install helm chart: `helm install <release-name> <chart-name> --version <version> -n <namespace>`
- Upgrade chart: `helm upgrade <release-name> <chart-name> -n <namespace>`
- Uninstall chart: `helm uninstall <release-name> -n <namespace>`
- View chart history: `helm history <release-name> -n <namespace>`
- Rollback chart: `helm rollback <release-name> <revision> -n <namespace>`
- List installed charts: `helm list [-n <namespace>]`
- Search charts: `helm search [repo|hub] <search-term>`
- Add repo: `helm repo add <repo-name> <repo-url>`
- View chart values: `helm show values <chart-name>`

### Kustomize

Instead of templates & variables, kustomize uses a file called `kustomization.yaml` to define resources and patches. It should be placed in the same directory as the resources to be managed.

#### Declaring resources

```yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization

# Example configuration for the webserver
# at https://github.com/monopole/hello
commonLabels:
  app: hello

resources:
  - deployment.yaml
  - service.yaml
```

#### Generate manifests

To generate manifests from a kustomization file, use the command:

```bash
kustomize build <directory-containing-kustomization>
```

#### Applying Kustomization

Can also be applied directly with kubectl:

```bash
kubectl apply -k <directory-containing-kustomization>
```

#### Multiple kustomization files

You can have multiple kustomization files in different directories to manage different sets of resources or environments. Each directory can have its own `kustomization.yaml` file.

Example structure (db, nginx, message-broker):

```
db/
  ├── deployment.yaml
  ├── service.yaml
  └── kustomization.yaml
nginx/
  ├── deployment.yaml
  ├── service.yaml
  └── kustomization.yaml
message-broker/
  ├── deployment.yaml
  ├── service.yaml
  └── kustomization.yaml
kustomization.yaml
```

The top-level `kustomization.yaml` can reference the other directories as bases:

```yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization
resources:
  - db/
  - nginx/
  - message-broker/
```

#### Environment Overlays

You can create different overlays for different environments (e.g., dev, staging, prod) by creating subdirectories with their own `kustomization.yaml` files that reference the base configuration and apply environment-specific patches.

Example structure:

```
base/
  ├── deployment.yaml
  ├── service.yaml
  └── kustomization.yaml
overlays/
  ├── dev/
  │   └── kustomization.yaml
  |   └── deployment-patch.yaml
  ├── staging/
  │   └── kustomization.yaml
  |   └── deployment-patch.yaml
  └── prod/
      └── kustomization.yaml
      └── deployment-patch.yaml
```

kustomization.yaml in overlays/dev/ might look like:

```yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization
namespace: development
resources:
  - ../../base
commonLabels:
  environment: development
patches:
  - path: deployment-patch.yaml
    target:
      kind: Deployment
      name: my-app
```

kustomization.yaml in overlays/prod/ might look like:

```yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization
namespace: production
resources:
  - ../../base
commonLabels:
  environment: production
patches:
  - path: deployment-patch.yaml
    target: # Not strictly necessary if the patch already specifies the target
      kind: Deployment
      name: my-app
```

The deployment-patch.yaml files would contain the specific changes for each environment like resource limits, replica counts, etc. The patch will only include the fields that need to be changed.

Example deployment-patch.yaml for dev:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 1
  template:
    spec:
      containers:
        - name: my-app-container
          resources:
            limits:
              cpu: "500m"
              memory: "256Mi"
            requests:
              cpu: "250m"
              memory: "128Mi"
```

The kustomization.yaml inside the base directory may look like this:

```yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization
resources:
  - deployment.yaml
  - service.yaml
```

To apply the configuration for a specific environment, navigate to the respective overlay directory and run:

```bash
kubectl apply -k .
```

### StatefulSets

A StatefulSet runs a group of Pods, and maintains a sticky identity for each of those Pods. This is useful for managing applications that need persistent storage or a stable, unique network identity (hostname will be the same).

#### Creating a StatefulSet

This creates a headless Service, `nginx`, to publish the IP addresses of Pods in the StatefulSet, `web`:


```yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx
  labels:
    app: nginx
spec:
  ports:
  - port: 80
    name: web
  clusterIP: None
  selector:
    app: nginx
---
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: web
spec:
  serviceName: "nginx" # This is necessary for StatefulSets - they need a headless service if the network identity is required
  replicas: 2
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: registry.k8s.io/nginx-slim:0.21
        ports:
        - containerPort: 80
          name: web
        volumeMounts:
        - name: www
          mountPath: /usr/share/nginx/html
  volumeClaimTemplates:
  - metadata:
      name: www
    spec:
      accessModes: [ "ReadWriteOnce" ]
      resources:
        requests:
          storage: 1Gi
```

#### PVCs

Each Pod in a StatefulSet gets its own PersistentVolumeClaim created from the `volumeClaimTemplates` section. The PVCs are named using the pattern `<claim-name>-<statefulset-name>-<ordinal>`, e.g., `www-web-0`, `www-web-1`, etc.

- The cluster creates a PersistentVolumeClaim for each replica; you do not create a PVC yourself.
- The cluster creates a PersistentVolume for each PVC; you do not create a PV yourself.
- The cluster allocates storage (on AWS/EKS, for example, an EBS volume); you do not allocate the storage yourself.

### Pod Priority and Preemption

Pod Priority is a feature that allows you to **assign a priority level to Pods**. When the cluster is under resource pressure, Pods with lower priority may be evicted to make room for higher-priority Pods.

#### Priority Classes

Priority classes are used to define the priority levels for Pods. You can create custom priority classes or use the default ones provided by Kubernetes.

```yaml
apiVersion: scheduling.k8s.io/v1
kind: PriorityClass
metadata:
  name: high-priority
value: 1000
globalDefault: false
description: "This priority class is for high-priority pods."
```

#### Applying Priority Class to Pods

You can assign a priority class to a Pod by specifying the `priorityClassName` field in the Pod specification.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: high-priority-pod
spec:
  priorityClassName: high-priority
  containers:
  - name: my-container
    image: my-image
```

### Gateway API

Gateway API is a set of resources for managing network traffic in Kubernetes. It provides a more flexible and extensible way to handle ingress and egress traffic compared to traditional Ingress resources.



## Things to remember

### Dynamic env values

```yml {8-12}
spec:
  volumes:
    - name: shared-volume
      emptyDir: {}
  containers:
    - image: nginx:1-alpine
      name: mc-pod-1
      env:
        - name: NODE_NAME
          valueFrom:
            fieldRef:
              fieldPath: spec.nodeName
```
			  
### Install a local package

`apt install ./cri-docker_0.3.16.3-0.debian.deb` or `dpkg -i ./cri-docker_0.3.16.3-0.debian.deb`

Start service: `systemctl start cri-docker`  
Start on boot: `systemctl enable cri-docker`

### Upgrade existing helm chart

- List helm charts: `helm list -n <namespace-name>`
- Update repos: `helm repo update`
- Search repos: `helm search repo <search-term>`
- Add repo: `helm add repo <repo-name>`
- Upgrade repo: `helm upgrade <release-name> <chart-name> --version <version-name>` (Chart name is those from repo search)

### Number of replicas wrong

If after adjusting resource quota a deployment still has not the wanted number of replicas => Delete the associated replicaset

### Create PersistentVolume on a specific node

`nodeAffinity` has to be used to place the pv on a specific node

### Enforce pod security standard

Just follow the docs: [Kubernetes Docs](https://kubernetes.io/docs/tasks/configure-pod-container/enforce-standards-namespace-labels/)

### Fix kubeconfig

To test a kubeconfig file, use the command:

```bash
k get node --kubeconfig <kubeconfig-file>
```

This will help you verify if the kubeconfig is set up correctly and can communicate with the cluster.

### Edit control-plane pod

To edit a control plane pod, 
you have to edit the static pod manifest file located in `/etc/kubernetes/manifests/`.

### Gateway API

A Gateway in Kubernetes is a networking resource that controls external traffic into a cluster, supporting HTTP, HTTPS, TCP, and UDP protocols.

- Create GatewayClass (implementation of the Gateway object)
- Create Gateway (defines how traffic is managed through listeners)
- Create Route (defines how traffic is routed)