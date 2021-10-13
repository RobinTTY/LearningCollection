---
id: dataObfuscation
title: Data Obfuscation
sidebar_position: 1
---

- Category: Command and Control
- Goal: Make C&C traffic harder to detect

With data obfuscation an attacker wants to make the necessary C&C traffic harder to detect. This can happen by various means and doesn't have to involve encryption. This encompasses many methods, such as:

- adding junk data to protocol traffic
- using steganography
- impersonating legitimate protocols.

## SolarWinds Sunburst Data Obfuscation

Data obfuscation is a technique that is used by various threat actors, such as:

## Detection

- Analyze network data for uncommon data flows (e.g., a client sending significantly more data than it receives from a server)
- Processes utilizing the network that do not normally have network communication or have never been seen before are suspicious
- Analyze packet contents to detect communications that do not follow the expected protocol behavior for the port that is being used

## Mitigation

- Network Intrusion Prevention (intrusion detection signatures to block traffic at network boundaries)
