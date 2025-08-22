---
id: questions
title: CKA Exam Questions
---

## Scale a deployment

```bash
kubectl scale deployment <deployment-name> --replicas=<number>
```

## Create a NodePort service for a deployment

```bash
kubectl expose deployment <deployment-name> --type=NodePort <service-name>
```

## Create a PersistentVolume

Create a PersistentVolume named `my-pv` with access mode `ReadWriteOnce` and size `10Gi` using hostPath

```yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: my-pv
spec:
  capacity:
    storage: 10Gi
  accessModes:
    - ReadWriteOnce
  hostPath:
   path: /data/my-pv
```

## Creating an Ingress resource

Create an Ingress resource named luau that routes traffic on the path /aloha to the aloha service on port 54321

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: luau
spec:
  rules:
    - http:
        paths:
          - path: /aloha
            pathType: Prefix
            backend:
              service:
                name: aloha
                port:
                  number: 54321    
```

## Monitor cluster and application resources

1. Identify all Pods in the integration namespace with the label `app=intensive`
2. Determine which of these Pods is using the most CPU resources
3. Write the name of the Pod consuming the most CPU resources to /opt/cka/answers/cpu_pod_01.txt

```bash
kubectl top pods -n integration # List all pods in the integration namespace and their CPU usage
kubectl get pods -n integration -L app=intensive # List pods with label app=intensive
```

## Configure Pod admission and scheduling

1. Create a Pod named noded that uses the nginx image
2. Ensure the Pod is scheduled to a node labeled disk=nvme

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: noded
spec:
  containers:
    - name: nginx
      image: nginx
  nodeSelector:
    disk: nvme
```

## Multicontainer Pod

1. Create a pod named multicontainer that has two containers:
  - A container running the redis:6.2.6 image
  - A container running the nginx:1.21.6 image

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: multicontainer
spec:
  containers:
    - name: redis
      image: redis:6.2.6
    - name: nginx
      image: nginx:1.21.6
```

## Monitor logs of a container

```bash
kubectl logs <pod-name> -c <container-name>
```

## Add a sidecar container which runs a specific bash command

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: logger
spec:
  containers:
    - name: loggingpod
      image: busybox
      args: [/bin/sh, -c, "i=0; while true; do echo '$i: $(date)' >> /var/log/log01.log; i=$((i+1)); sleep 10; done"]
      volumeMounts:
        - name: logz
          mountPath: /var/log
    - name: sidecar
      image: busybox
      command: ["/bin/sh", "-c", "tail -f /var/log/log01.log"]
      volumeMounts:
        - name: logz
          mountPath: /var/log
  volumes:
    - name: logz
      emptyDir: {}
  nodeName: node-1
```

## Manage role based access control

1. Create a ClusterRole named app-creator that allows create permissions for Deployments, StatefulSets, and DaemonSets
2. Create a ServiceAccount named app-dev
3. Bind the ServiceAccount app-dev to the ClusterRole app-creator using a ClusterRoleBinding


```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: app-creator
rules:
  - apiGroups: ["apps"]
    resources: ["deployments", "statefulsets", "daemonsets"]
    verbs: ["create"]
```

To find out which apiGroups are available, you can use the command:

```bash
kubectl api-resources | grep Stateful # Will show that StatefulSets belong to apps/v1
```

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: app-dev
```

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: app-dev-binding
subjects:
  - kind: ServiceAccount
    name: app-dev
    namespace: default
roleRef:
  kind: ClusterRole
  name: app-creator
  apiGroup: rbac.authorization.k8s.io
```

## Troubleshoot cluster with taints

1. Inspect the nodes controller and node-1 for any taints they have. Write the results to heir respective files

```bash
kubectl describe node controller | grep -i Taints
kubectl describe node node-1 | grep -i Taints
```

The flag `-i` is used to perform a case-insensitive search for the term "Taints". Just in case you don't know how it is capitalized.

## Use ConfigMaps and Secrets to configure applications

1. Create a ConfigMap called metal-cm containing the file `~/mycode/yaml/metal.html`
2. To the deployment "enter-sandman" add the metal-cm ConfigMap mounted to the path `var/www/index.html`
3. Create the deployment in the metallica namespace

```bash
kubectl create configmap metal-cm --from-file=~/mycode/yaml/metal.html -n metallica
```

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: enter-sandman
  namespace: metallica
spec:
  replicas: 1
  selector:
    matchLabels:
      app: enter-sandman
  template:
    metadata:
      labels:
        app: enter-sandman
    spec:
      containers:
        - name: web
          image: nginx
          volumeMounts:
            - name: metal-volume
              mountPath: /var/www/index.html
      volumes:
        - name: metal-volume
          configMap:
            name: metal-cm
```

## Use ConfigMaps and Secrets to configure applications

1. You will adjust an existing pod named kiwi-secret-pod in namespace kiwi
2. Make a new secret named juicysecret. It must contain the following key/value pairs:
   1. username=kiwis
   2. password=aredelicious
3. Make this content available in the pod kiwi-secret-pod as environment variables USERKIWI and PASSKIWI

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: juicysecret
  namespace: kiwi
type: Opaque
data:
  username: kiwis
  password: aredelicious
```

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: kiwi-secret-pod
  namespace: kiwi
spec:
  containers:
    - name: kiwi-container
      image: kiwi-image
      env:
        - name: USERKIWI
          valueFrom:
            secretKeyRef:
              name: juicysecret
              key: username
        - name: PASSKIWI
          valueFrom:
            secretKeyRef:
              name: juicysecret
              key: password
```

## Define and enforce Network Policies

1. In namespace cherry you'll find two deployments named pit and stem. Both deployments are exposed via a service.
2. Make a NetworkPolicy named cherry-control that:
   1. prevents outgoing traffic from the pit deployment
   2. Except to that of the stem deployment

```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: cherry-control
  namespace: cherry
spec:
  podSelector:
    matchLabels:
      app: pit
  policyTypes:
  - Ingress
  - Egress
  egress:
  - to:
    - podSelector:
        matchLabels:
          app: stem
```
