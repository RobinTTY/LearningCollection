---
id: memVsFileStream
title: Memory Stream vs FileStream
---

- Stream is a representation of bytes
- Both these classes derive from the Stream class which is abstract by definition
- As the name suggests, a FileStream reads and writes to a file whereas a MemoryStream reads and writes to the memory. **So it relates to where the stream is stored**
  - Let us assume you want to read binary data from the database, you would go in for a MemoryStream
  - However if you want to read a file on your system, you would go in for a FileStream
- **One quick advantage of a MemoryStream is that there is not need to create temporary buffers and files in an application**
