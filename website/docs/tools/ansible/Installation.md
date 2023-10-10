---
id: tools-ansible-installation
title: Installation
sidebar_position: 1
---

For installation instructions see:

[Ansible Documentation](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html)

:::warning
Windows is not supported as a control node (host which can orchestrate a play).
:::

## Managed Node Requirements

- SSH for communication (sftp by default)
- Python 2.6 or higher OR Python 3.5 or higher

## Ubuntu Installation

On Ubuntu the following commands will install Ansible:

```bash
sudo apt update
sudo apt install software-properties-common
sudo add-apt-repository --yes --update ppa:ansible/ansible
sudo apt install ansible
```
