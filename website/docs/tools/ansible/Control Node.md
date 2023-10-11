---
id: tools-ansible-control-node-environment
title: Control Node Environment
sidebar_position: 3
---

A control node has the following files per default under `/etc/ansible`:

- **ansible.cfg** - options for ansible
- **hosts** - list of computers where ansible should execute the playbook
- **roles** - ways of automatically loading certain vars_files, tasks, and handlers based on a known file structure
