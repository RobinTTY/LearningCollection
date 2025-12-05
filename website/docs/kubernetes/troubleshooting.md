---
id: troubleshooting
title: Troubleshooting
---

Common troubleshooting steps in Kubernetes:

- Check events, check pod
- Check service: endpoint discovered? -> fix service selectors + pod labels
- Control plane issues: Check kube-system pods, check nodes
  - or check services: kube-apiserver, kube-controller-manager, kube-scheduler, kubelet, kube-proxy
  - Services can be checked via: `service <service-name> status`
- Worker node issues: Check node status: `kubectl get nodes`, `kubectl describe node <node-name>`
  - Check kubelet service: `service kubelet status`
  - Check logs: `journalctl -u kubelet`
  - file: `/var/lib/kubelet/config.yaml`
  - cluster-wide kubelet config: `/etc/kubernetes/kubelet.conf`
