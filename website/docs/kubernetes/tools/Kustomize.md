---
id: kustomize
title: Kustomize
---

Kustomize is a configuration management tool built into kubectl that allows you to customize Kubernetes resource definitions without modifying the original YAML files. It uses a concept called "overlays" to apply changes to base configurations.

![kustomize-overview](/img/docs/kubernetes/kustomize-overview.png)

- `kustomization.yaml`: The main configuration file for Kustomize. It defines the resources to be customized and the transformations to be applied.
  - A parent kustomize.yaml can reference other folders with their own kustomization.yaml files as "bases".
- Transformers can be used to for instance add common labels to all resources
- Image Transformers can for instance change the image tag that is used
- Patches can be used to target specific resources and change something about them
- Overlays contain environment-specific configurations with patches and additional resources
- Components provide reusable pieces of configuration that can be reused in multiple overlays

