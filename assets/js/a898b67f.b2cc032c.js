"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[8892],{45414:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=t(74848),a=t(28453);const r={id:"certificates",title:"Certificates"},c=void 0,s={id:"general-concepts/certificates",title:"Certificates",description:"TLS uses a X.509 Certificate with extended key usage:",source:"@site/docs/general-concepts/Certificates.md",sourceDirName:"general-concepts",slug:"/general-concepts/certificates",permalink:"/LearningCollection/general-concepts/certificates",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/general-concepts/Certificates.md",tags:[],version:"current",frontMatter:{id:"certificates",title:"Certificates"},sidebar:"docs",previous:{title:"Call Stack",permalink:"/LearningCollection/general-concepts/callStack"},next:{title:"Dependency Injection",permalink:"/LearningCollection/general-concepts/dependencyInjection"}},o={},l=[{value:"X.509 certificate",id:"x509-certificate",level:2},{value:"History and usage",id:"history-and-usage",level:3},{value:"Certification process",id:"certification-process",level:3},{value:"Structure of a certificate",id:"structure-of-a-certificate",level:3},{value:"Certification Chain and cross certification",id:"certification-chain-and-cross-certification",level:3},{value:"From Microsoft Azure Docs",id:"from-microsoft-azure-docs",level:2}];function h(e){const i={a:"a",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.p,{children:"TLS uses a X.509 Certificate with extended key usage:\nServer Authentication (1.3.6.1.5.5.7.3.1)"}),"\n",(0,n.jsx)(i.p,{children:'Other "common" types of X.509 certs are Client Authentication (1.3.6.1.5.5.7.3.2), Code Signing (1.3.6.1.5.5.7.3.3), and a handful of others are used for various encryption and authentication schemes.'}),"\n",(0,n.jsx)(i.h2,{id:"x509-certificate",children:"X.509 certificate"}),"\n",(0,n.jsx)(i.p,{children:"X.509 is a standard defining the format of public key certificates. X.509 certificates are used in many internet protocols, including TLS/SSL, which is the basis for HTTPS, the secure protocol for browsing the web. They are also used in offline applications, like electronic signatures."}),"\n",(0,n.jsx)(i.p,{children:"An X.509 certificate contains a public key and an identity (a hostname or an organization or an individual), and is either signed by a certificate authority or self-signed. When a certificate is signed by a trusted certificate authority, or validated by other means, someone holding that certificate can rely on the public key it contains to establish secure communications with another party, or validate documents digitally signed by the corresponding private key."}),"\n",(0,n.jsx)(i.p,{children:"X.509 also defines certificate revocation lists, which are a means to distribute information about certificates that have been deemed invalid by a signing authority, as well as a certification path validation algorithm, which allows for certificates to be signed by intermediate CA certificates, which are, in turn, signed by other certificates, eventually reaching a trust anchor."}),"\n",(0,n.jsx)(i.h3,{id:"history-and-usage",children:"History and usage"}),"\n",(0,n.jsx)(i.p,{children:"X.509 was initially issued on July 3, 1988 and was begun in association with the X.500 standard. It assumes a strict hierarchical system of certificate authorities (CAs) for issuing the certificates. This contrasts with web of trust models, like PGP, where anyone (not just special CAs) may sign and thus attest to the validity of others' key certificates."}),"\n",(0,n.jsx)(i.h3,{id:"certification-process",children:"Certification process"}),"\n",(0,n.jsx)(i.p,{children:"In the X.509 system, an organization that wants a signed certificate requests one via a certificate signing request (CSR). To do this, it first generates a key pair, keeping the private key secret and using it to sign the CSR. This contains information identifying the applicant and the applicant's public key that is used to verify the signature of the CSR - and the Distinguished Name (DN) that the certificate is for. The CSR may be accompanied by other credentials or proofs of identity required by the certificate authority."}),"\n",(0,n.jsx)(i.p,{children:"The certification authority issues a certificate binding a public key to a particular distinguished name. An organization's trusted root certificates can be distributed to all employees so that they can use the company PKI system. Browsers such as Internet Explorer, Firefox, Opera, Safari and Chrome come with a predetermined set of root certificates pre-installed, so SSL certificates from major certificate authorities will work instantly; in effect the browsers' developers determine which CAs are trusted third parties for the browsers' users. For example, Firefox provides a CSV and/or HTML file containing a list of Included CAs."}),"\n",(0,n.jsx)(i.h3,{id:"structure-of-a-certificate",children:"Structure of a certificate"}),"\n",(0,n.jsx)(i.p,{children:"The structure foreseen by the standards is expressed in a formal language, Abstract Syntax Notation One (ASN.1)."}),"\n",(0,n.jsx)(i.p,{children:"The structure of an X.509 v3 digital certificate is as follows:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Certificate","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Version Number"}),"\n",(0,n.jsx)(i.li,{children:"Serial Number"}),"\n",(0,n.jsx)(i.li,{children:"Signature Algorithm ID"}),"\n",(0,n.jsx)(i.li,{children:"Issuer Name"}),"\n",(0,n.jsxs)(i.li,{children:["Validity period","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Not Before"}),"\n",(0,n.jsx)(i.li,{children:"Not After"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.li,{children:"Subject name"}),"\n",(0,n.jsxs)(i.li,{children:["Subject Public Key Info","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Public Key Algorithm"}),"\n",(0,n.jsx)(i.li,{children:"Subject Public Key"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.li,{children:"Issuer Unique Identifier (optional)"}),"\n",(0,n.jsx)(i.li,{children:"Subject Unique Identifier (optional)"}),"\n",(0,n.jsxs)(i.li,{children:["Extensions (optional)","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"..."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.li,{children:"Certificate Signature Algorithm"}),"\n",(0,n.jsx)(i.li,{children:"Certificate Signature"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"certification-chain-and-cross-certification",children:"Certification Chain and cross certification"}),"\n",(0,n.jsx)(i.p,{children:'A certificate chain (see the equivalent concept of "certification path" defined by RFC 5280) is a list of certificates (usually starting with an end-entity certificate) followed by one or more CA certificates (usually the last one being a self-signed certificate), with the following properties:'}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"The Issuer of each certificate (except the last one) matches the Subject of the next certificate in the list."}),"\n",(0,n.jsx)(i.li,{children:"Each certificate (except the last one) is supposed to be signed by the secret key corresponding to the next certificate in the chain (i.e. the signature of one certificate can be verified using the public key contained in the following certificate)."}),"\n",(0,n.jsx)(i.li,{children:"The last certificate in the list is a trust anchor: a certificate that you trust because it was delivered to you by some trustworthy procedure."}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Certificate chains are used in order to check that the public key (PK) contained in a target certificate (the first certificate in the chain) and other data contained in it effectively belongs to its subject. In order to ascertain this, the signature on the target certificate is verified by using the PK contained in the following certificate, whose signature is verified using the next certificate, and so on until the last certificate in the chain is reached. As the last certificate is a trust anchor, successfully reaching it will prove that the target certificate can be trusted."}),"\n",(0,n.jsx)(i.p,{children:"The description in the preceding paragraph is a simplified view on the certification path validation process as defined by RFC 5280, which involves additional checks, such as verifying validity dates on certificates, looking up CRLs, etc."}),"\n",(0,n.jsx)(i.p,{children:"Examining how certificate chains are built and validated, it is important to note that a concrete certificate can be part of very different certificate chains (all of them valid). This is because several CA certificates can be generated for the same subject and public key, but be signed with different private keys (from different CAs or different private keys from the same CA). So, although a single X.509 certificate can have only one issuer and one CA signature, it can be validly linked to more than one certificate, building completely different certificate chains. This is crucial for cross-certification between PKIs and other applications."}),"\n",(0,n.jsx)(i.h2,{id:"from-microsoft-azure-docs",children:"From Microsoft Azure Docs"}),"\n",(0,n.jsxs)(i.p,{children:["Go to: ",(0,n.jsx)(i.a,{href:"https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-x509ca-concept",children:"https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-x509ca-concept"})]})]})}function d(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>c,x:()=>s});var n=t(96540);const a={},r=n.createContext(a);function c(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);