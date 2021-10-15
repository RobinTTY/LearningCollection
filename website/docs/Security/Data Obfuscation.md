---
id: dataObfuscation
title: Data Obfuscation
sidebar_position: 1
---

- Category: Command and Control (C2)
- Goal: Make C&C traffic harder to detect

With data obfuscation an attacker wants to make the necessary C&C traffic harder to detect. This can happen by various means and doesn't have to involve encryption. This encompasses many methods, such as:

- adding junk data to protocol traffic
- using steganography
- impersonating legitimate protocols.

## Examples of Data Obfuscation

### Data Obfuscation via Images

- [Axiom](https://attack.mitre.org/groups/G0001/), a cyber espionage group suspected to be associated with the Chinese government [used the PNG file format](http://www.novetta.com/wp-content/uploads/2014/11/Executive_Summary-Final_1.pdf) as the carrier format for data to and from the C2
- [APT29](https://attack.mitre.org/groups/G0016/), a threat group that has been attributed to Russia's Foreign Intelligence Service also [used images to hide C2](https://www.welivesecurity.com/wp-content/uploads/2019/10/ESET_Operation_Ghost_Dukes.pdf) communications

#### APT29 approach (Operation Ghost)

- A data blob containing encrypted data is appended to the end the downloaded file
  - allows data to be easily included in a JPEG or PNG image download in a way that means the image remains valid
  - this also makes them look like legitimate traffic (the user just wants to download an image)
- To extract the payload from the file downloaded from the C&C server, the malware will first decrypt the last eight bytes:

  ![apt29](/img/docs/Security/apt29.PNG)

  - These bytes contain offset to the embedded blob relative to the end of the file and
  - a value used as integrity check

- Now that the payload location is known, the malware can decrypt it and execute further commands

This method of hiding C2 traffic falls under steganography. There are [many more examples](https://attack.mitre.org/techniques/T1001/002/) of it.

### Data Obfuscation via Junk Data

- [Sunburst](https://attack.mitre.org/software/S0559/), a trojanized DLL designed to fit within the SolarWinds Orion software update framework, added junk bytes to its C2 over HTTP (this is another malware from the APT29 group)

#### Sunburst approach

- Sunburst uses encrypted traffic to communicate with the C2 server
  - if the message exceeds 10 000 bytes in size, the data is sent in a false JSON blob:
  - ![json](https://symantec-enterprise-blogs.security.com/sites/default/files/styles/blogs_inline_medium/public/2021-01/Figure%202.png?itok=0S0H9tkT)
    :::warning
    This is not a real example of the C2 traffic.
    :::
- The encrypted data to send is broken into multiple variable sized chunks
- The size of each chunk is randomly determined, but generally will go from smaller to larger
- Each chunk is then encoded and added to the JSON blob and sent as the HTTP(S) POST data with a Content-Type header set to application/json
- On receipt, the attacker will need to decode and concatenate all the Message chunks, **skipping junk chunks where the Timestamp second bit is not set**.

## Detection

- Analyze network data for uncommon data flows (e.g., a client sending significantly more data than it receives from a server)
- Processes utilizing the network that do not normally have network communication or have never been seen before are suspicious
- Analyze packet contents to detect communications that do not follow the expected protocol behavior for the port that is being used

## Mitigation

- Network Intrusion Prevention (intrusion detection signatures to block traffic at network boundaries)
  - Analysis can be based on:
    - Address matching
    - Generic pattern matching
    - TCP connection analysis
    - Packet anomaly detection
    - Traffic anomaly detection
    - etc.
