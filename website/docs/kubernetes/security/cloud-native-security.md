---
id: cloud-native-security
title: Cloud Native Security
---

This guide explains the four layers of cloud native security Cloud, Cluster, Container, and Code, detailing vulnerabilities and best practices for each.

## The 4 Cs of Cloud Native Security

![the-4-cs-of-cloud-native-security](/img/docs/kubernetes/cks-exam/the-4-cs-of-cloud-native-security.png)

| C         | Focus Area            | Common Attack Vectors                                 | Key Best Practices                                        |
| --------- | --------------------- | ----------------------------------------------------- | --------------------------------------------------------- |
| Cloud     | Infrastructure        | Exposed management ports, overly permissive IAM roles | Firewalls, VPN/bastion, role audits                       |
| Cluster   | Control Plane & APIs  | Public Docker API, unsecured Kubernetes API/Dashboard | Secure APIs, RBAC, OIDC/TLS, regular patching             |
| Container | Workload Isolation    | Untrusted images, privileged containers, lax runtime  | Image signing/scanning, PSP/PSA, seccomp, resource limits |
| Code      | Application & Secrets | Hard-coded credentials, plaintext env vars, no mTLS   | Vault/K8s Secrets (encrypted), mutual TLS, code reviews   |

### Cloud Security

Cloud security protects the environment that hosts your cluster—public cloud, private data center, or colocation. In our demo, an attacker gained access because SSH and API ports were open with no firewall rules.

- Implement network firewalls or cloud security groups around SSH (22), Kubernetes API (6443), and other management ports.
- Require VPN or bastion host access for all administrative connections.
- Audit IAM roles and permissions monthly; follow the principle of least privilege.

:::info
Regularly review firewall rules and security group configurations to prevent unintended exposure.
:::

---

### Cluster Security

The control plane is the heart of Kubernetes. In our breach scenario, the Docker remote API, Kubernetes API server, and Dashboard were exposed without auth.

- Restrict or disable the Docker remote API (`–host=unix:///var/run/docker.sock` only).
- Enable RBAC for the API server and Dashboard; define granular roles.
- Use OIDC, service accounts, or TLS client certificates for authentication.
- Keep control plane components and etcd up to date with patches.

:::info
Disabling the Docker remote API can impact automation scripts. Validate your CI/CD pipelines before rolling this out in production.
:::

---

### Container Security

Containers should run with the least privilege and only use trusted images. In our example, the attacker pulled arbitrary images, ran them in privileged mode, and installed malicious software.

- Enforce image signing and vulnerability scanning; whitelist approved registries.
- Block privileged containers by default with Pod Security Policies (PSP) or Pod Security Admission (PSA).
- Leverage runtimes that support user namespaces, seccomp, and AppArmor profiles.
- Set CPU, memory limits and use read-only root filesystems.

:::info
Pod Security Admission (PSA) is the replacement for PSP in newer Kubernetes versions. Ensure you migrate policies accordingly.
:::

---

### Code Security

Application-level flaws—like hard-coded secrets, plaintext environment variables, and missing TLS—open doors to attackers.

- Store and manage secrets with tools such as [HashiCorp Vault][vault] or [Kubernetes Secrets][k8s-secrets], enabling encryption at rest.
- Implement mutual TLS (mTLS) for service-to-service communication inside the cluster.
- Conduct regular code reviews and static analysis to catch vulnerabilities early.

[vault]: https://www.vaultproject.io/
[k8s-secrets]: https://kubernetes.io/docs/concepts/configuration/secret/
