---
id: dllSideLoading
title: DLL Side-Loading
sidebar_position: 3
---

- Category: Defense Evasion
- Technique: Hijack Execution Flow
- Goal: Execute malicious payload

References:

- MITRE: [Hijack Execution Flow: DLL Side-Loading](https://attack.mitre.org/techniques/T1574/002/)
- FireEye: [DLL SIDE-LOADING: A THORN IN THE SIDE OF THE ANTI-VIRUS INDUSTRY - 2014](https://www.mandiant.com/media/10376/download)

DLL Side-Loading involves execution of a malicious payload in form of a DLL. Rather than just planting the DLL within the search order of a program (to await invocation by a user process) the adversaries may directly side-load the payload by invoking a legitimate application that executes the payload.

## Traditional DLL-Side loading on Windows

- Windows, like many operating systems, allows applications to load DLLs at runtime
- Applications can specify the location of DLLs by specifying a full path, using DLL redirection, or by using a manifest.
- If none of these methods are used, Windows attempts to locate the DLL by searching a **predefined set of directories** in a set order
- This fact can be abused by placing a malicious DLL in one of these directories
  - In these cases Windows reaches the malicious DLL before finding the legitimate version

## Less common variants

Another way to take advantage of DLL side-loading is by the way of Windows side-by-side (SxS or WinSxS) assembly feature.

This feature helps manage conflicting and
duplicate DLL versions by loading them on
demand from a common directory

![Side-By-Side-Loading](/img/docs/Security/Side-by-Side.png)

- WinSxS mainfests, which are embedded in the executable as XML data, describe dependencies and libraries used by the application
- WinSxS is designed to give developers flexibility to update binaries by easily replacing the old binaries in the same location
- This omission may inadvertently grant trusted installer privileges to malicious payloads.

![Side-By-Side-Loading2](/img/docs/Security/Side-by-Side2.png)

### The problem

The problem with this technique is that it offers little to no validation of the loaded DLL other than what is explicit in the manifest’s DLL metadata.

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

- Based on whether the system is 32-bit or 64-bit one of the two base64 encoded blobs gets executed by the embedded macro
- We can see that the decoded blob begins with the header of a [Portable Executable (PE)](https://en.wikipedia.org/wiki/Portable_Executable) DLL file
- After decoding the DLL is dropped in the directory location `'Users\Administrator\AppData\Roaming\'` as 'main_background.png'.
- The DLL retrieves the payload from the URL, decrypts it executes it in the memory. Therefore, it is observed that only the KerrDown DLL downloader is saved in the system and the payload (Cobalt Strike Beacon) directly gets executed in the memory without being written in the system.

## Mitigations

- **Application Developer Guidance:** Train developers of applications so they know how to avoid introducing DLL Side-Loading vulnerabilities
- Keep software up to date

## Detection

- Monitor running processes on your machine for unusual activity
  - e.g. a process that does not usually use the network begins to do so
- Monitor the introduction of new files/programs
- Track DLL metadata
  - e.g. compute a hash of the DLL and validate it before loading it for process execution (you need to account for updates/patching)
