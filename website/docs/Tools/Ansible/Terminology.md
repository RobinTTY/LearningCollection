---
id: tools-ansible-terminology
title: Terminology
sidebar_position: 2
---

- **Control Node:** Any machine with Ansible installed, can run commands and playbooks (can't be a Windows computer)
- **Managed Nodes:** The network devices you manage trough Ansible. Sometimes called hosts. Ansible is not installed on managed nodes
- **Inventory:** A list of managed nodes. Can specify information like IP address for each managed node and can organize them by creating and nesting groups
- **Modules:** The units of code Ansible executes. Each module has a particular use (e.g. administering users, managing VLAN interfaces, etc.). A single module can be invoked by a task, or several can be invoked by a playbook
- **Tasks:** The units of action in Ansible. You can execute a single task once with an ad-hoc command.
- **Playbooks:** Ordered lists of tasks, saved so they can run those tasks repeatedly. Can include variables as well as tasks. Written in YAML.
