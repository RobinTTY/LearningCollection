---
id: tools-ansible-cli-commands
title: Important CLI commands
sidebar_position: 4
---

- `ssh-keygen` - generate new ssh-key
- `ssh-copy-id [ip-address]` - copy ssh-key to target host
- `ansible -m ping all` - ping all hosts defined in the ansible hosts file
- `ansible -m shell -a 'hostname' all` - execute a command in bash on all hosts
- `ansible-playbook [playbook-name]` - execute the given playbook

Keys are added to ~/.ssh/known_hosts
