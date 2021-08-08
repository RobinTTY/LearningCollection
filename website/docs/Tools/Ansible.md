---
id: ansible
title: Ansible
---

## Installation

See [Ansbile Docs](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html).

## Terminology

- **Control Node:** Any machine with Ansible installed, can run commands and playbooks (can't be a Windows computer)
- **Managed Nodes:** The network devices you manage trough Ansible. Sometimes called hosts. Ansible is not installed on managed nodes
- **Inventory:** A list of managed nodes. Can specify information like IP address for each managed node and can organize them by creating and nesting groups
- **Modules:** The units of code Ansible executes. Each module has a particular use (e.g. administering users, managing VLAN interfaces, etc.). A single module can be invoked by a task, or several can be invoked by a playbook
- **Tasks:** The units of action in Ansible. You can execute a single task once with an ad-hoc command.
- **Playbooks:** Ordered lists of tasks, saved so they can run those tasks repeatedly. Can include variables as well as tasks. Written in YAML.

## Managed Node Requirements

- SSH for communication (sftp by default)
- Python 2.6 or higher OR Python 3.5 or higher

## Writing Playbooks

Playbooks are Ansible's configuration, deployment, and orchestration language. They can describe a policy you want your remote system to enforce, or a set of steps in a general IT process. They are expressed in YAML format and have a minimum of syntax, which intentionally tries to not be a programming language or script, but rather a model of a configuration or a process.

**Playbooks can be used to:**

- manage configurations of and deployments to remote machines
- sequence multi-tier rollouts involving rolling updates, and can delegate actions to other hosts, interacting with monitoring servers and load balancers along the way

A playbook consists of one or more 'plays' in a list. The goal of a play is to map a group aof hosts to some well defined roles, represented by tasks. A task is nothing more than a call to an ansible module in this case.

By composing a playbook of multiple ‘plays’, it is possible to orchestrate multi-machine deployments, running certain steps on all machines in the webservers group, then certain steps on the database server group, then more commands back on the webservers group, etc.

### Playbook example with one group of hosts

```yaml
---
- hosts: webservers
  vars:
    http_port: 80
    max_clients: 200
  remote_user: root
  tasks:
    - name: ensure apache is at the latest version
      yum:
        name: httpd
        state: latest
    - name: write the apache config file
      template:
        src: /srv/httpd.j2
        dest: /etc/httpd.conf
      notify:
        - restart apache
    - name: ensure apache is running
      service:
        name: httpd
        state: started
  handlers:
    - name: restart apache
      service:
        name: httpd
        state: restarted
```

### Playbook example with multiple groups of hosts

```yaml
---
- hosts: webservers # first group
  remote_user: root

  tasks:
    - name: ensure apache is at the latest version
      yum:
        name: httpd
        state: latest
    - name: write the apache config file
      template:
        src: /srv/httpd.j2
        dest: /etc/httpd.conf

- hosts: databases # second group
  remote_user: root

  tasks:
    - name: ensure postgresql is at the latest version
      yum:
        name: postgresql
        state: latest
    - name: ensure that postgresql is started
      service:
        name: postgresql
        state: started
```

## Control Node Environment

A control node has the following files per default under /etc/ansible:

- ansible.cfg - options for ansible
- hosts - list of computers where ansible should execute the playbook
- roles - ways of automatically loading certain vars_files, tasks, and handlers based on a known file structure

## Important CLI Commands

- ssh-keygen - generate new ssh-key
- ssh-copy-id `[ip-address]` - copy ssh-key to target host
- ansible -m ping all - ping all hosts defined in the ansible hosts file
- ansible -m shell -a 'hostname' all - execute a command in bash on all hosts
- ansible playbook `[playbook-name]`

Keys are added to ~/.ssh/known_hosts

## Privilege escalation

- privilege escalation is handled by the **become** keyword
- setting the **become** keyword to _yes_ activates privilege escalation
- the _become_ keyword can be used at the **play or task** level

### Become Directives

- **become** - privilege escalation
- **become_user** - defines the user which is being used for privilege escalation
- **become_method** (at play or task level) - overrides the default method set in ansible.cfg
- **become_flags** (at play or task level) - permit the use of specific flags for the tasks or role (e.g. to change the user to nobody when the shell is set to no login)

For example, to manage a system service (which requires root privileges) when **connected as a non-root user, you can use the default value of become_user (root)**:

```yaml
- name: Ensure the httpd service is running
  service:
    name: httpd
    state: started
  become: yes
```

To run a command **as the apache user**:

```yaml
- name: Run a command as the apache user
  command: somecommand
  become: yes
  become_user: apache
```

**Note: become must be set to yes!**

To do something **as the nobody user when the shell is nologin**:

```yaml
- name: Run a command as nobody
  command: somecommand
  become: yes
  become_method: su
  become_user: nobody
  become_flags: "-s /bin/sh"
```

## Using Ansible Vault

To encrypt a single variable just use the following command:

```CLI
ansible-vault encrypt_string
> New Vault password:
> Confirm New Vault password:
> Reading plaintext input from stdin. (ctrl-d to end input)
> this is a plaintext string
> !vault |
>           $ANSIBLE_VAULT;1.1;AES256
>           39393766663761653337386436636466396531353261383237613531356531343930663133623839
>           3436613834303264613038623432303837393261663233640a363633343337623065613166306363
>           37336132363462386138343535346264333061656134636631326164643035313433393831616131
>           3635613565373939310a316132313764356432333366396533663965333162336538663432323334
>           33656365303733303664353961363563313236396262313739343461383036333561
> Encryption successful
```

The output can be directly inserted into a playbook like this:

```yml
vars:
  ansible_become_password: !vault |
    $ANSIBLE_VAULT;1.1;AES256
    30323830373430623135386266613062376532313763393431666161303463616538323963663331
    3035626232633239636637316233343734396434353561350a303561353535356163303630336633
    30343631373034303736633435633836336539356435313932613139313963646238613134633738
    3165306536376266650a326431616630666332396634323137393733303036626133646430656262
    6566
```

The playbook can then be executed with the command:

```CLI
ansible-playbook playbook.yml --ask-vault-pass
```

The user will be prompted for the password set during the `ansible-vault encrypt_string` command.
