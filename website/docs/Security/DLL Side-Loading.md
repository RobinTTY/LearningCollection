---
id: dllSideLoading
title: DLL Side-Loading
sidebar_position: 3
---

- Category: Defense Evasion
- Technique: Hijack Execution Flow
- Goal: Execute malicious payload

DLL Side-Loading involves execution of a malicious payload in form of a DLL. Rather than just planting the DLL within the search order of a program (to await invocation by a user process) the adversaries may directly side-load the payload by invoking a legitimate application that executes the payload.

## Examples of DLL Side-Loading

### OceanLotus KerrDown

- OceanLotus (APT32) is a sophisticated threat actor originating out of south east asia
- KerrDown uses DLL Side-Loading to load [Cobalt Strike](https://www.infocyte.com/cyber-security/2020/09/02/cobalt-strike-the-new-favorite-among-thieves/) beacons into memory

![KerrDown](https://unit42.paloaltonetworks.com/wp-content/uploads/2019/01/Figure-6-Execution-flow-of-sideloaded-malicious-downloader.png)

#### Process

- Victim needs to open a lure document, which includes an image file with a message in Vietnamese which that asks the victim to enable macros to view the contents of the file
  ![Delivery](https://unit42.paloaltonetworks.com/wp-content/uploads/2019/01/Figure-1-Lure-document.png)
- Two different base64 blobs are inserted in the page in separate tables, the font size has been changed to 1 which may deceive victims to overlook the content
  - this may be used to hide the content from automated tools which can detect the presence of an embedded binary within files

![Base64](https://unit42.paloaltonetworks.com/wp-content/uploads/2019/01/Figure-2-Base64-encoded-pedll-files-embedded-as-text-in-the-document..png)
