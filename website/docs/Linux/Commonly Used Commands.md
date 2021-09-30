---
id: commonlyUsedCommands
title: Commonly Used Commands
sidebar_position: 1
---

## Viewing files

### Viewing files with size

```sh
ls -l --block-size=G
```

## Services

### Check running services

```sh
systemctl status <service-name>
```

### Restart service

```sh
systemctl restart <service-name>
```

## tmux

### New session

```bash
tmux new -s <session-name>
```

### Enter existing session

```bash
tmux a -t <session-name>
```
