---
id: cka-exam
title: CKA Exam notes
---

## Important notes for CKA Exam:

=> Don't forget to set context before each task
=> Copy + Paste is important (ctrl + shift + v | Shift + Insert)
=> Important Linux commands
    - kubectl logs >pod-name> | grep "abc" > /tmp/access-failed.txt
=> vim: "set paste" command

## Things to remember

1. If they want you to add an env value like the node name:

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
			  
2. Install a local package

apt install ./cri-docker_0.3.16.3-0.debian.deb
or dpkg -i ./cri-docker_0.3.16.3-0.debian.deb

=> start service: systemctl start cri-docker
=> start on boot: systemctl enable cri-docker

3. Upgrade existing helm chart

List helm charts: `helm list -n <namespace-name>`
Update repos: `helm repo update`
Search repos: `helm search repo <search-term>`
Add repo: `helm add repo <repo-name>`
Upgrade repo: `helm upgrade <release-name> <chart-name> --version <version-name>` (Chart name is those from repo search)

4. After adjusting resource quota a deployment still has not the wanted number of replicas

=> delete the associated replicaset
