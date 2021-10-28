---
id: trustedDeveloperUtilities
title: Trusted Developer Utilities Proxy Execution
sidebar_position: 2
---

- Category: Execution
- Goal: Execute malicious payload

There are many utilities used for software development related tasks that can be used to execute code in various forms to assist in development, debugging, and reverse engineering. These utilities are often signed with legitimate certificates that allow them to execute on a system.
This fact can be abused to proxy execute malicious code through a trusted process that effectively bypasses application control solutions.

## Examples of developer utilities

### MSBuild

MSBuild.exe (Microsoft Build Engine) is a **build tool** used by Visual Studio but can also be used independently. It is used to control how the build platform processes and builds software (including compilation, packaging, testing, deployment, etc.).

MSBuild can be used to build different types of projects, like C++ and C#.

<script src="https://gist.github.com/RobinTTY/822fcc1e97c4bae37fcb77d03b43ad8f.js"></script>
