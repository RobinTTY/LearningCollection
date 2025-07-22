---
id: cka-exam
title: CKA Exam notes
---

## Important notes for CKA Exam:

- Don't forget to set context before each task
- Copy + Paste is important (ctrl + shift + v | Shift + Insert)
- Important Linux commands
  - kubectl logs >pod-name> | grep "abc" > /tmp/access-failed.txt
  - vim: "set paste" command

## Possible Tasks

### Storage

- Create a StorageClass
- Create a PersistentVolume
- Create a PersistentVolumeClaim

### Scheduling

- Applying affinity to pods
- Applying taints to nodes
- Applying tolerations to pods
- Configuring and using autoscaling (VPA/HPA)

### Security

- Enforce restricted pod security standard

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