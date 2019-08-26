# Serialization

Definition:  
In computer science, in the context of data storage, serialization (or serialisation) is the process of __translating data structures or object state into a format that can be stored (for example, in a file or memory buffer) or transmitted__ (for example, across a network connection link) and reconstructed later (possibly in a different computer environment).

hen the resulting series of bits is reread according to the serialization format, it can be used to create a semantically identical clone of the original object. For many complex objects, such as those that make extensive use of references, this process is not straightforward. Serialization of object-oriented objects does not include any of their associated methods with which they were previously linked.

This process of serializing an object is also called marshalling an object. The opposite operation, extracting a data structure from a series of bytes, is deserialization (also called unmarshalling).

## Comparison Serialization and Marshalling

The term "marshal" is considered to be synonymous with "serialize" in the Python standard library,[5] but the terms are not synonymous in the Java-related RFC 2713:  

    To "marshal" an object means to record its state and codebase(s) in such a way that when the marshalled object is "unmarshalled," a copy of the original object is obtained, possibly by automatically loading the class definitions of the object. You can marshal any object that is serializable or remote (that is, implements the java.rmi.Remote interface). Marshalling is like serialization, except marshalling also records codebases. Marshalling is different from serialization in that marshalling treats remote objects specially.

    — Schema for Representing Java(tm) Objects in an LDAP Directory (RFC 2713)

## [Serializable]

### What is it

When you create an object in a .Net framework application, you don't need to think about how the data is stored in memory. Because the .Net Framework takes care of that for you. However, if you want to store the contents of an object to a file, send an object to another process or transmit it across the network, you do have to think about how the object is represented because you will need to convert to a different format. This conversion is called SERIALIZATION.

### Uses for attribute Serializable

Apply SerializableAttribute to a type to indicate that instances of this type can be serialized. Apply the SerializableAttribute even if the class also implements the ISerializable interface to control the serialization process.

All the public and private fields in a type that are marked by the SerializableAttribute are serialized by default, unless the type implements the ISerializable interface to override the serialization process. The default serialization process excludes fields that are marked with NonSerializedAttribute. If a field of a serializable type contains a pointer, a handle, or some other data structure that is specific to a particular environment, and cannot be meaningfully reconstituted in a different environment, then you might want to apply NonSerializedAttribute to that field.

## Reasons to mark something as not serializable

When transferring or saving data, you need to send or save only the required data. So there will be less transfer delays and storage issues. So you can opt out unnecessary chunk of data when serializing.
