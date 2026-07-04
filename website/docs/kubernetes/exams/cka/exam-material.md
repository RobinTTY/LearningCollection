---
id: exam-material
title: Exam Material
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
        accessModes: ["ReadWriteOnce"]
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

Resources:

- **GatewayClass**: Defines a class of Gateways, similar to IngressClass.
- **Gateway**: Represents a network gateway that manages traffic routing. Implementation of the Gateway class.
- **TLSRoutes, HTTPRoutes, TCPRoutes, etc.**: Define how traffic is routed through the Gateway through rules.
  - The route routes traffic to services based on rules defined in the route resource.

#### Gateway Class

```yaml
apiVersion: gateway.networking.k8s.io/v1
kind: GatewayClass
metadata:
  name: my-gateway-class
spec:
  controller: example.com/gateway-controller
```

#### Gateway

```yaml
apiVersion: gateway.networking.k8s.io/v1
kind: Gateway
metadata:
  name: my-gateway
spec:
  gatewayClassName: my-gateway-class
  listeners:
    - name: http
      protocol: HTTP
      port: 80
      allowedRoutes: # optional
        namespaces:
          from: All|Selector|Same
```

#### HTTPRoute

```yaml
apiVersion: gateway.networking.k8s.io/v1
kind: HTTPRoute
metadata:
  name: my-http-route
spec:
  parentRefs:
    - name: my-gateway
  hostnames:
    - "example.com"
  rules:
    - matches:
        - path:
            type: PathPrefix
            value: /api
      backendRefs:
        - name: api-service
          port: 8080 # Points to the service port
```

#### Possible Exam Task: Convert Ingress to Gateway API

This is often part of the exam. You have to convert an existing Ingress resource to Gateway API resources.

Useful documentation in the Gateway API docs under "Guides": [Migrating from Ingress](https://gateway-api.sigs.k8s.io/guides/getting-started/migrating-from-ingress/)

Example Ingress services:

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: web
  namespace: web-app
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
    nginx.ingress.kubernetes.io/ssl-redirect: "false"
spec:
  ingressClassName: nginx
  tls:
    - hosts:
        - gateway.web.k8s.local
      secretName: web-tls-secret
  rules:
    - host: gateway.web.k8s.local
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: web-service
                port:
                  number: 80
```

Converted to Gateway API:

```yaml
apiVersion: gateway.networking.k8s.io/v1
kind: GatewayClass
metadata:
  name: nginx
spec:
  controllerName: gateway.nginx.org/nginx-gateway-controller
---
apiVersion: gateway.networking.k8s.io/v1
kind: Gateway
metadata:
  name: nginx-gateway
  namespace: nginx-gateway
spec:
  gatewayClassName: nginx # Use the gateway class that matches your controller
  listeners:
    - name: https
      port: 443
      protocol: HTTPS
      hostname: gateway.web.k8s.local
      tls:
        mode: Terminate
        certificateRefs:
          - kind: Secret
            name: web-tls-secret
            namespace: web-app
      allowedRoutes:
        namespaces:
          from: All
    - name: http
      port: 80
      protocol: HTTP
      hostname: gateway.web.k8s.local
      allowedRoutes:
        namespaces:
          from: All
---
apiVersion: gateway.networking.k8s.io/v1
kind: HTTPRoute
metadata:
  name: web-route
  namespace: web-app
spec:
  parentRefs:
    - name: nginx-gateway
      kind: Gateway
      namespace: nginx-gateway
      sectionName: http # <-- HTTP
  hostnames:
    - gateway.web.k8s.local
  rules:
    - matches:
        - path:
            type: PathPrefix
            value: /
      backendRefs:
        - name: web-service
          port: 80
---
apiVersion: gateway.networking.k8s.io/v1
kind: HTTPRoute
metadata:
  name: web-route-https
  namespace: web-app
spec:
  parentRefs:
    - name: nginx-gateway
      kind: Gateway
      namespace: nginx-gateway
      sectionName: https # <-- HTTPs
  hostnames:
    - gateway.web.k8s.local
  rules:
    - matches:
        - path:
            type: PathPrefix
            value: /
      backendRefs:
        - name: web-service
          port: 80
```

Commands:

```bash
kubectl describe httproute web-route -n web-app
kubectl describe httproute web-route-https -n web-app
kubectl describe gateway nginx-gateway -n nginx-gateway
```

#### ReferenceGrant

A `ReferenceGrant` is a Kubernetes resource that allows resources in one namespace to reference resources in another namespace. This is particularly useful in scenarios where you have a Gateway in one namespace that needs to reference services or secrets in another namespace.

```yaml
apiVersion: gateway.networking.k8s.io/v1beta1
kind: ReferenceGrant
metadata:
  name: web-app-to-nginx-gateway
  namespace: web-app # This ReferenceGrant must be in the namespace of the Secret
spec:
  from:
    - group: gateway.networking.k8s.io
      kind: Gateway
      namespace: nginx-gateway
  to:
    - group: "" # Core API group for Secrets
      kind: Secret
      name: web-tls-secret # Optionally, restrict to specific secret name (or omit to allow all)
```

### Custom Resource Definitions (CRDs)

Custom Resource Definitions (CRDs) allow you to extend the Kubernetes API by defining your own custom resources. This enables you to create, manage, and interact with resources that are specific to your application or use case.

The resource definition is a template for the custom resource. It defines the schema, validation rules, and other properties of the resource.

```yaml
apiVersion: apiextensions.k8s.io/v1
kind: CustomResourceDefinition
metadata:
  name: myresources.example.com
spec:
  group: example.com
  versions:
    - name: v1
      served: true
      storage: true
      schema:
        openAPIV3Schema:
          type: object
          properties:
            spec:
              type: object
              properties:
                foo:
                  type: string
                bar:
                  type: integer
                  minimum: 0
                  maximum: 100
  scope: Namespaced
  names:
    plural: myresources
    singular: myresource
    kind: MyResource
    shortNames:
      - mr
```

Any custom resource (CR) created will be validated against the schema defined in the CRD.

```yaml
apiVersion: example.com/v1
kind: MyResource
metadata:
  name: my-sample-resource
spec:
  foo: "Hello, World!"
  bar: 42
```

A custom controller is often used alongside CRDs to manage the lifecycle of custom resources. The controller watches for changes to the custom resources and performs actions based on the desired state defined in the resource specification.

#### Possible Exam Question 1

```bash
# List all the cert-manager CRD's
kubectl describe crd | grep certificates

# Extract the documentation of subject specification field
kubectl explain certificates.spec.subject
```

#### Possible Exam Question 2

```bash {8}
helm repo add jetstack https://charts.jetstack.io --force-update

helm install \
  cert-manager jetstack/cert-manager \
  --namespace cert-manager \
  --create-namespace \
  --version v1.17.2 \
  --set crds.enabled=false
```

### Operators

Operators are software extensions that use custom resources to manage applications and their components. They automate the deployment, scaling, and management of complex applications on Kubernetes.

- You define a desired state for your application using custom resources, and the operator continuously monitors the cluster to ensure that the actual state matches the desired state.
- Operators can handle tasks such as backups, updates, scaling, and recovery, etc.
- The cert-manager is an example of an operator that automates the management of TLS certificates in Kubernetes.

### Admission Controllers

Admission controllers are plugins that intercept requests to the Kubernetes API server after authentication and authorization but before they are persisted in etcd. They can modify or validate the requests based on predefined policies. They can allow/deny requests or modify objects based on certain criteria.

There are two types of admission controllers:

- Mutating Admission Controllers: These controllers can modify the incoming requests. For example, they can add default values to fields that are not specified in the request.
- Validating Admission Controllers: These controllers validate the incoming requests against predefined policies. If a request does not meet the criteria, it is rejected.

These requests are handled via webhooks, which are HTTP callbacks that the API server invokes when certain events occur. Webhooks can be used to implement custom admission controllers.

#### Possible Exam Task: Enable Namespace Auto-Creation

To enable namespace auto-creation, you can use the `NamespaceAutoProvision` admission controller. This controller automatically creates namespaces when resources are created in a non-existent namespace.

To enable the `NamespaceAutoProvision` admission controller, you need to modify the API server configuration. This typically involves editing the API server manifest file located at `/etc/kubernetes/manifests/kube-apiserver.yaml` on the control plane node.

Add `NamespaceAutoProvision` to the list of enabled admission controllers in the `--enable-admission-plugins` flag:

```yaml
spec:
  containers:
    - name: kube-apiserver
      command:
        - kube-apiserver
        - --enable-admission-plugins=NamespaceAutoProvision,...
```

### Dynamic Volume Provisioning

Dynamic Volume Provisioning allows Kubernetes to automatically create PersistentVolumes (PVs) when a PersistentVolumeClaim (PVC) is created, without the need for pre-provisioning PVs. This is achieved through the use of StorageClasses, which define the parameters for the dynamic provisioning of storage.

The provisioner specified in the StorageClass is responsible for creating the PVs based on the PVCs. An example provisioner is `kubernetes.io/aws-ebs` for AWS EBS volumes.

#### Example StorageClass

```yaml
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: fast
provisioner: kubernetes.io/aws-ebs
parameters:
  type: gp2
  fsType: ext4
reclaimPolicy: Retain
volumeBindingMode: WaitForFirstConsumer
```

#### Example PersistentVolumeClaim

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: my-pvc
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 10Gi
  storageClassName: fast
```

When the above PVC is created, Kubernetes will automatically provision a PV using the `fast` StorageClass.

### Install (cri-dockerd) Container Runtime On Kubernetes

cri-dockerd is a Docker Engine CRI (Container Runtime Interface) plugin that allows Kubernetes to use Docker as the container runtime..

:::note
This is a possible exam task!
Comment from CKA Exam subreddit:

> they give it to you, its in home directory
> you just do sudo dpkg -i \<paste url\>
> After which you need to enable and start the service with systemctl.
> then you'll set the parameters they give you in sysctl directory
> :::

1. Download the latest CRI-Dockerd Debian package from the official GitHub releases:

```bash
# Download the CRI-Dockerd package
wget https://github.com/Mirantis/cri-dockerd/releases/download/v0.3.16/cri-dockerd_0.3.16.3-0.ubuntu-jammy_amd64.deb
```

2. Install the downloaded package using dpkg:

```bash
# Install the CRI-Dockerd package
sudo dpkg -i cri-dockerd_0.3.16.3-0.ubuntu-jammy_amd64.deb
```

3. Enable and start the cri-dockerd service:

```bash
# Enable CRI-Dockerd service to start on boot
sudo systemctl enable --now cri-docker.service

# Start the CRI-Dockerd service
sudo systemctl start cri-docker.service

# Check the service status
sudo systemctl status cri-docker.service
```

4. Configure System Parameters

```bash
# This editing can be found in the Kubernetes Docs:
# https://kubernetes.io/docs/setup/production-environment/container-runtimes/

# Create and configure kernel parameters
cat <<EOF | sudo tee /etc/sysctl.d/k8s.conf
net.bridge.bridge-nf-call-iptables = 1
net.netfilter.nf_conntrack_max = 131072
net.ipv6.conf.allforwarding = 1
net.ipv4.ip_forward = 1
EOF

# Apply sysctl params without reboot
sudo sysctl --system

# Reload systemd daemon
sudo systemctl daemon-reload
```

### Kubernetes Pod Security Standard, Linux Capabilities, and Security Context

Pod security has two concepts:

- **Security Context:** Defines privilege and access control settings for a Pod and containers.
  - runAsUser, runAsGroup, runAsNonRoot, fsGroup, allowPrivilegeEscalation
- **Linux Capabilities:** Fine-grained permissions that can be added or removed from a container's process. Applied at the container level. Also defined in the `securityContext` but in the container section of the spec.
  - CAP_NET_ADMIN, CAP_SYS_ADMIN, CAP_SYS_TIME, etc.

### Security Standard Levels

Kubernetes defines three levels of Pod Security Standards:

- **Privileged (lowest security):** No restrictions, allows all capabilities. Suitable for trusted workloads.
- **Baseline:** Moderate restrictions, prevents known privilege escalations. Suitable for most workloads.
- **Restricted (highest security):** Strict restrictions, enforces least privilege. Suitable for untrusted workloads.

Creating a restricted namespace:

```bash
kubectl create namespace restricted-ns
kubectl label namespace restricted-ns pod-security.kubernetes.io/enforce=restricted
kubectl label namespace restricted-ns pod-security.kubernetes.io/audit=restricted
kubectl label namespace restricted-ns pod-security.kubernetes.io/warn=restricted
```

This can be found in the docs under "Apply Pod Security Standards at the Namespace Level": [https://kubernetes.io/docs/tutorials/security/ns-level-pss/](https://kubernetes.io/docs/tutorials/security/ns-level-pss/)

I think there is no example of creating a compliant pod but the output of the create command will show a warning of what needs to be set to be compliant. A compliant pod would be:

```yaml
# restricted-compliant-pod.yaml
apiVersion: v1
kind: Pod
metadata:
  name: compliant-pod
  namespace: restricted-ns
spec:
  securityContext:
    runAsNonRoot: true
    runAsUser: 1000
    runAsGroup: 1000
    fsGroup: 1000
    seccompProfile:
      type: RuntimeDefault
  containers:
    - name: app
      image: nginx:alpine
      securityContext:
        allowPrivilegeEscalation: false
        runAsNonRoot: true
        runAsUser: 1000
        capabilities:
          drop: ["ALL"]
```

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
