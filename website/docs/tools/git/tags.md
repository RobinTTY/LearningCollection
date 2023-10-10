---
id: tags
title: Tags
sidebar_position: 1
---

## Adding tags to existing commits

```bash
tag="<tag-name>" commit="<hash-of-commit-to-edit>" bash -c 'GIT_COMMITTER_DATE="$(git show --format=%aD $commit)" git tag -a $tag -m $tag $commit'
```
