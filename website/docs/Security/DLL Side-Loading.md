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

Side-loading **takes advantage of the DLL search order** used by the loader by positioning both the victim application and malicious payload(s) alongside each other. Executables used to side-load payloads may not be flagged during delivery and/or execution which makes them a good way to evade detection.

The payload itself may also be encrypted/packed or otherwise obfuscated until loaded into memory of the trusted process.

## Examples of DLL Side-Loading

### Operation Clandestine Fox

- Attack originating from APT3, a China-based group which researchers have attributed to China's Ministry of State Security
- Attack was carried out in 2014
- Target were companies in the energy sector

#### Initial Contact

- The initial attack vector is social engineering: An e-mail is sent which is made to look like a job application
- The e-mail contains an attachment with a resume and **sample software** the applicant has written
- The applicant had previously contacted the employee who received the e-mail via a social network, to make it look more legitimate
- Before the e-mail was sent, there had been three weeks of communication between applicant and employee

The email contained the following:

> Hi Michael,
>
> Attached is my resume and the software I developed for my Uncle who is a researcher in new material. Last week I was busy with my partners to develop a control system. Thank you very much. Wish to be a member of your company.
>
> Emily

- FireEye investigated this attack and found some inconsistencies in the social profile of the alleged applicant:
  - She had some fake education history
  - She also had additional contacts at the victim's company
  - She had inquired about who the IT Manger was and what versions of software they ran with her other contacts

The attacker used e-mail and social networks to communicate with her various contacts. Worth noting is that the attacker used the private e-mail addresses of employees to contact them, possibly to circumvent the more sophisticated corporate e-mail security but maybe just because employees had linked their personal e-mail to the social network instead of the work address.

#### The E-Mail Attachments

Attached to the E-Mail was a single **"resume.rar"** file. This archive was sent to different companies and didn't always contain the same files. The archive with the sideloading attack looked as follows:

- SETUP.exe
- my resume.pdf

This archive was protected by the password "TTcalc".

**SETUP.exe** is a self executing RAR archive containting more files:

- ttcalc.exe
- ttcalcBAK.exe
- ttcalc.chm
- README
- CHANGELOG
- COPYRIGHT

When the SETUP.exe is executed it opens the WinRAR window, prompting the user for the location to extract the files to.

The files are written to a TTCalc folder and it is tried to launch ttcalcBAK.exe (the malware dropper) but the path is incorrect so it fails with an error message. All other files are benign and related to the legitimate TTCalc application.

TTCalc is a scientific calculator.

ttcalcBAK.exe is also a self-extracting RAR which drops and launches _chrome_frame_helper_. Chrome frame helper dll is a file that belongs to Google Chrome Frame, a plugin for Internet Explorer that enables Internet Explorer to display web pages in Google Chrome's rendering style. The project was retired in 2014.

In this case the file is a [Backdoor](https://www.fireeye.com/blog/threat-research/2014/07/pacific-ring-of-fire-plugx-kaba.html), it uses a legitimate Chrome executable to **load the malicious DLL via side-loading**. According to FireEye this kind of malware was quiet common at the time (2014).

Now with the actual malcode loaded the malware would start to communicate with the Command and Control Server.

## What we can learn

- Very often the attack vector is social engineering and if we are more cautious about these interactions we can avoid possible attacks
- Don't use your personal Mail for business communication purposes

## Mitigations

- Train developers of applications so they know how to avoid introducing DLL Side-Loading vulnerabilities
- Train users of applications that might be vulnerable to DLL Side-Loading attacks
- Restrict possibly abused functionality in applications if possible (e.g. Excel/Word Macros, etc.)
- Keep software up to date

## Detection

- Monitor running processes on your machine for unusual activity
  - e.g. a process that does not usually use the network begins to do so
- Monitor the introduction of new files/programs
- Track DLL metadata
  - e.g. compute a hash of the DLL and validate it before loading it for process execution (you need to account for updates/patching)
