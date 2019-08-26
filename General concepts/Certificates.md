# Certificates

TLS uses a X.509 Certificate with extended key usage:
Server Authentication (1.3.6.1.5.5.7.3.1)

Other "common" types of X.509 certs are Client Authentication (1.3.6.1.5.5.7.3.2), Code Signing (1.3.6.1.5.5.7.3.3), and a handful of others are used for various encryption and authentication schemes.

## X.509 certificate

X.509 is a standard defining the format of public key certificates. X.509 certificates are used in many internet protocols, including TLS/SSL, which is the basis for HTTPS, the secure protocol for browsing the web. They are also used in offline applications, like electronic signatures.

An X.509 certificate contains a public key and an identity (a hostname or an organization or an individual), and is either signed by a certificate authority or self-signed. When a certificate is signed by a trusted certificate authority, or validated by other means, someone holding that certificate can rely on the public key it contains to establish secure communications with another party, or validate documents digitally signed by the corresponding private key.

X.509 also defines certificate revocation lists, which are a means to distribute information about certificates that have been deemed invalid by a signing authority, as well as a certification path validation algorithm, which allows for certificates to be signed by intermediate CA certificates, which are, in turn, signed by other certificates, eventually reaching a trust anchor.

### History and usage

X.509 was initially issued on July 3, 1988 and was begun in association with the X.500 standard. It assumes a strict hierarchical system of certificate authorities (CAs) for issuing the certificates. This contrasts with web of trust models, like PGP, where anyone (not just special CAs) may sign and thus attest to the validity of others' key certificates.

### Certification process

In the X.509 system, an organization that wants a signed certificate requests one via a certificate signing request (CSR). To do this, it first generates a key pair, keeping the private key secret and using it to sign the CSR. This contains information identifying the applicant and the applicant's public key that is used to verify the signature of the CSR - and the Distinguished Name (DN) that the certificate is for. The CSR may be accompanied by other credentials or proofs of identity required by the certificate authority.

The certification authority issues a certificate binding a public key to a particular distinguished name. An organization's trusted root certificates can be distributed to all employees so that they can use the company PKI system. Browsers such as Internet Explorer, Firefox, Opera, Safari and Chrome come with a predetermined set of root certificates pre-installed, so SSL certificates from major certificate authorities will work instantly; in effect the browsers' developers determine which CAs are trusted third parties for the browsers' users. For example, Firefox provides a CSV and/or HTML file containing a list of Included CAs.

### Structure of a certificate

The structure foreseen by the standards is expressed in a formal language, Abstract Syntax Notation One (ASN.1).

The structure of an X.509 v3 digital certificate is as follows:

- Certificate
  - Version Number
  - Serial Number
  - Signature Algorithm ID
  - Issuer Name
  - Validity period
    - Not Before
    - Not After
  - Subject name
  - Subject Public Key Info
    - Public Key Algorithm
    - Subject Public Key
  - Issuer Unique Identifier (optional)
  - Subject Unique Identifier (optional)
  - Extensions (optional)
    - ...
  - Certificate Signature Algorithm
  - Certificate Signature

### Certification Chain and cross certification

A certificate chain (see the equivalent concept of "certification path" defined by RFC 5280) is a list of certificates (usually starting with an end-entity certificate) followed by one or more CA certificates (usually the last one being a self-signed certificate), with the following properties:

- The Issuer of each certificate (except the last one) matches the Subject of the next certificate in the list.
- Each certificate (except the last one) is supposed to be signed by the secret key corresponding to the next certificate in the chain (i.e. the signature of one certificate can be verified using the public key contained in the following certificate).
- The last certificate in the list is a trust anchor: a certificate that you trust because it was delivered to you by some trustworthy procedure.

Certificate chains are used in order to check that the public key (PK) contained in a target certificate (the first certificate in the chain) and other data contained in it effectively belongs to its subject. In order to ascertain this, the signature on the target certificate is verified by using the PK contained in the following certificate, whose signature is verified using the next certificate, and so on until the last certificate in the chain is reached. As the last certificate is a trust anchor, successfully reaching it will prove that the target certificate can be trusted.

The description in the preceding paragraph is a simplified view on the certification path validation process as defined by RFC 5280, which involves additional checks, such as verifying validity dates on certificates, looking up CRLs, etc.

Examining how certificate chains are built and validated, it is important to note that a concrete certificate can be part of very different certificate chains (all of them valid). This is because several CA certificates can be generated for the same subject and public key, but be signed with different private keys (from different CAs or different private keys from the same CA). So, although a single X.509 certificate can have only one issuer and one CA signature, it can be validly linked to more than one certificate, building completely different certificate chains. This is crucial for cross-certification between PKIs and other applications.

## From Microsoft Azure Docs

Go to: https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-x509ca-concept
