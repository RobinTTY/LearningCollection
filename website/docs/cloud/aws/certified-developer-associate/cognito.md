---
title: Cognito
sidebar_position: 23
---

- Give users an identity to interact with our web or mobile application
- Cognito User Pools:
  - Sign in functionality for app users
  - Integrate with API Gateway & Application Load Balancer
- Cognito Identity Pools (Federated Identity):
  - Provide AWS credentials to users so they can access AWS resources directly
  - Integrate with Cognito User Pools as an identity provider
- Cognito vs IAM: “hundreds of users”, ”mobile users”, “authenticate with SAML”

## Cognito User Pools (CUP) – User Features

- Create a serverless database of user for your web & mobile apps
- Simple login: Username (or email) / password combination
- Password reset
- Email & Phone Number Verification
- Multi-factor authentication (MFA)
- Federated Identities: users from Facebook, Google, SAML…
- Feature: block users if their credentials are compromised elsewhere
- Login sends back a JSON Web Token (JWT)

![cognito-user-pools-diagram](/img/docs/cloud/aws/cognito-user-pools-diagram.png)

### Integrations

CUP integrates with API Gateway and Application Load Balancer:

![cognito-user-pool-integration](/img/docs/cloud/aws/cognito-user-pool-integration.png)

### Lambda Triggers

CUP can invoke a Lambda function synchronously on these triggers:

![cup-lambda-trigger](/img/docs/cloud/aws/cup-lambda-trigger.png)

### Hosted Authentication UI

- Cognito has a hosted authentication UI that you can add to your app to handle sign-up and sign-in workflows
- Using the hosted UI, you have a foundation for integration with social logins, OIDC or SAML
- Can customize with a custom logo and custom CSS

### Hosted UI Custom Domain

- For custom domains, you must create an ACM certificate in us-east-1
- The custom domain must be defined in the “App Integration” section

### Adaptive Authentication

- Block sign-ins or require MFA if the login appears suspicious
- Cognito examines each sign-in attempt and generates a risk score (low, medium, high) for how likely the sign-in request is to be from a malicious attacker
- Users are prompted for a second MFA only when risk is detected
- Risk score is based on different factors such as if the user has used the same device, location, or IP address
- Checks for compromised credentials, account takeover protection, and phone and email verification
- Integration with CloudWatch Logs (sign-in attempts, risk score, failed challenges…)

![cup-adaptive-authentication](/img/docs/cloud/aws/cup-adaptive-authentication.png)

### Decoding a ID Token; JWT – JSON Web Token

- CUP issues JWT tokens (Base64 encoded):
  - Header
  - Payload
  - Signature
- The signature must be verified to ensure the JWT can be trusted
- Libraries can help you verify the validity of JWT tokens issued by Cognito User Pools
- The Payload will contain the user information (sub UUID, given_name, email, phone_number, attributes…)
- From the sub UUID, you can retrieve all users details from Cognito / OIDC

![cognito-jwt](/img/docs/cloud/aws/cognito-jwt.png)

## Application Load Balancer – Authenticate Users

- Your Application Load Balancer can securely authenticate users
  - Offload the work of authenticating users to your load balancer
  - Your applications can focus on their business logic
- Authenticate users through:
  - Identity Provider (IdP): OpenID Connect (OIDC) compliant
  - Cognito User Pools:
    - Social IdPs, such as Amazon, Facebook, or Google
    - Corporate identities using SAML, LDAP, or Microsoft AD
- **Must use an HTTPS listener to set authenticate-oidc & authenticate-cognito rules**
- **OnUnauthenticatedRequest** – authenticate (default), deny, allow

![cognito-alb-auth](/img/docs/cloud/aws/cognito-alb-auth.png)

### Auth through Cognito User Pools

- Create Cognito User Pool, Client and Domain
- Make sure an ID token is returned
- Add the social or Corporate IdP if needed
- Several URL redirections are necessary
- Allow your Cognito User Pool Domain on your IdP app's callback URL. For example:
  - https://domain-prefix.auth.region.amazoncognito.com/saml2/idpresponse
  - https://user-pool-domain/oauth2/idpresponse

### OIDC Authentication

![alb-oidc](/img/docs/cloud/aws/alb-oidc.png)

### Auth. Through an Identity Provider (IdP) - OIDC compliant

- Configure a Client ID & Client Secret
- Allow redirect from OIDC to your Application Load Balancer DNS name (AWS provided) and CNAME (DNS Alias of your app)
  - https://DNS/oauth2/idpresponse
  - https://CNAME/oauth2/idpresponse

## Cognito Identity Pools (Federated Identities)

- Get identities for “users” so they obtain temporary AWS credentials
- Your identity pool (e.g identity source) can include:
  - Public Providers (Login with Amazon, Facebook, Google, Apple)
  - Users in an Amazon Cognito user pool
  - OpenID Connect Providers & SAML Identity Providers
  - Developer Authenticated Identities (custom login server)
  - Cognito Identity Pools allow for unauthenticated (guest) access
- Users can then access AWS services directly or through API Gateway
  - The IAM policies applied to the credentials are defined in Cognito
  - They can be customized based on the user_id for fine grained control

![cognito-identity-pools](/img/docs/cloud/aws/cognito-identity-pools.png)

With CUP:

![cognito-identity-pools-with-cup](/img/docs/cloud/aws/cognito-identity-pools-with-cup.png)

## IAM Roles

- Default IAM roles for authenticated and guest users
- Define rules to choose the role for each user based on the user’s ID
- You can par tition your users’ access using policy variables
- IAM credentials are obtained by Cognito Identity Pools through STS
- The roles must have a “trust” policy of Cognito Identity Pools

### Guest User example

![cip-guest-example](/img/docs/cloud/aws/cip-guest-example.png)

### Policy variable on S3

![cip-policy-variable](/img/docs/cloud/aws/cip-policy-variable.png)

### DynamoDB

![cip-dynamodb](/img/docs/cloud/aws/cip-dynamodb.png)

## Cognito User Pools vs Identity Pools
