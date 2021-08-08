---
id: antlr
title: ANTLR
---

# ANTLR (Another Tool For Language Recognition - pronounced Antler)

## What is ANTLR

- parser generator that uses LL(\*) for parsing
  - an LL parser (Left-to-right, Leftmost derivation) is a top-down parser for a subset of context-free languages. It parses the input from Left to right, performing Leftmost derivation of the sentence
  - An LL parser is called an LL(k) parser if it uses k tokens of lookahead when parsing a sentence
- successor of the Purdue Compiler Construction Tool Set (PCCTS)
- takes as input a grammar that specifies a language and generates as output source code for a recognizer of that language
- Output languages that are supported are: Java, **C#**, C++, JavaScript, Python2, Python3, Swift, and Go
- ANTLR can generate lexers, parsers, tree parsers, and combined lexer-parsers.
- ANTLR provides a single consistent notation for specifying lexers, parsers, and tree parsers
- By default, ANTLR reads a grammar and generates a recognizer for the language defined by the grammar (i.e., a program that reads an input stream and generates an error if the input stream does not conform to the syntax specified by the grammar)
- In order to do something useful with the language, actions can be attached to grammar elements in the grammar. These actions are written in the programming language in which the recognizer is being generated
- When the recognizer is being generated, the actions are embedded in the source code of the recognizer at the appropriate points. Actions can be used to build and check symbol tables and to emit instructions in a target language, in the case of a compiler

## What is a Parser

- software component that takes input data (frequently text) and builds a data structure
- can automatically build parse trees, which are data structures representing how a grammar matches the input
- in this case C# code is generated
- The parser is often preceded by a separate lexical analyser, which creates tokens from the sequence of input characters

## What is a Lexer

- converts a sequence of characters (such as in a computer program or web page) into a sequence of tokens (strings with an assigned and thus identified meaning)
- A program that performs lexical analysis may be termed a lexer, tokenizer, or scanner, though scanner is also a term for the first stage of a lexer
- A lexer is generally combined with a parser, which together analyze the syntax of programming languages, web pages, and so forth

## Improvements by ANTLR v4

- accepts every grammar you give it (with one exception described in the next bullet). There are no grammar conflict or ambiguity warnings as ANTLR translates your grammar to executable, Human–readable parsing code
- If you give your ANTLR-generated parser valid input, it will always recognize it properly, no matter how complicated the grammar
- ANTLR v4 dramatically simplifies the grammar rules used to match syntactic structures like programming language expressions
- Language applications need to execute code snippets when they see specific input sentences, phrases, or tokens. To make this easier, ANTLRgenerated parsers automatically build convenient representations of the input called parse trees that an application can walk to trigger code snippets as it encounters constructs of interest

### Listeners and Parsers

- ANTLR automatically generates parse tree walkers for us in the form of listener and visitor pattern implementations
- Listeners are analogous to XML document handler objects that respond to SAX events triggered by XML parsers
- The biggest change is that v4 deemphasizes embedding actions (code) in the grammar, favoring listeners and visitors instead
- Those mechanisms decouple grammars from application code, nicely encapsulating an application instead of fracturing it and dispersing the pieces across a grammar
- Without embedded actions, you can also reuse the same grammar in different applications without even recompiling the generated parser

## Step by Step Getting Started

### Step 1: Install Java

The C# target for ANTLR 4 requires Java for _generating_ C# code (but the applications compiled from this C# code will not require Java to be installed).
You can install _any_ of the following versions of Java to use this target.

If you already have one of the following installed, you should check to make sure the installation is up-to-date.

- Java 8 runtime environment (x86 or x64)
- Java 8 development kit (x86 or x64, provided that the JRE option is also installed during the development kit installation)
- Java 7 runtime environment (x86 or x64)
- Java 7 development kit (x86 or x64, provided that the JRE option is also installed during the development kit installation)

### Step 2: Download the tool

You need to download the ANTLR tool from the ANTLR web site.
This is a Java archive (\*.jar) used to generate the C# code from an ANTLR grammar.

### Step 3: Add or create a grammar file (\*.g4) in your project

To avoid confusing your IDE, we suggest setting the build action to None for this file.
See the docs and the book to learn about writing lexer and parser grammars.

### Step 4: Generate the C# code

This can be done either from the cmd line, or by adding a custom pre-build command in your project.
At minimal, the cmd line should look as follows: `java -jar antlr4-4.7.2.jar -Dlanguage=CSharp grammar.g4`
This will generate the files, which you can then integrate in your project.
This is just a quick start. The tool has many useful options to control generation, please refer to its documentation.

### Step 5: Add a reference to the ANTLR runtime in your project

The Antlr 4 standard runtime for C# is now available from NuGet.
We trust that you know how to do add NuGet references to your project :-).
The package id is [Antlr4.Runtime.Standard](https://www.nuget.org/packages/Antlr4.Runtime.Standard/). We do not support other packages.

Use the GUI or the following command in the Package Manager Console:

```
Install-Package Antlr4.Runtime.Standard
```

### Step 6: You're done!

Of course, the generated code is not going to meet your requirement by magic.
There are 3 ways to use the generated code:

- by generating a parse tree, and traversing it using a listener. This is the most common method.
- by generating a parse tree, and traversing it using a visitor. This requires the -visitor option, and is a bit more work.
- by providing code within your grammar, which gets executed when your input files are parsed. While the latter works, it is no longer the recommended approach, because it is not portable, and harder to maintain. More importantly, it breaks the parsing when your code breaks.

See the web site for examples of using the generated code.

To learn more about ANTLR 4, read [the book](http://a.co/2n4rJlb).

### Visual Studio integration

If you require tighter Visual Studio integration, you can use the tools from [Tunnel Vision Labs](http://tunnelvisionlabs.com/).
(please note however that they use a different tool and runtime)

## Grammar Examples

[Examples Github Link](https://github.com/antlr/grammars-v4)
