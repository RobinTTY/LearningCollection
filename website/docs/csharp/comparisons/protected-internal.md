---
id: private-protected-vs-protected-internal
title: private protected vs protected internal
---

Before C# 7.2 we had `protected internal` modifier:

This really means **protected OR internal**, that is - member A is **accessible to child classes and also to any class in the current assembly**, even if that class is not child of class A (so restriction implied by "protected" is relaxed). The internal modifier is also relaxed.

`private protected` really means protected AND internal:

That is - member is accessible only to child classes which are in the same assembly, but not to child classes which are outside assembly (so restriction implied by "protected" is narrowed - becomes even more restrictive). That is useful if you build hierarchy of classes in your assembly and do not want any child classes from other assemblies to access certain parts of that hierarchy.
