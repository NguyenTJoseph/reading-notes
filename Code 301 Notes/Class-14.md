# Authentication
## OAuth
1. What is OAuth?
- Authorization protocol or framework for safely authenticated access to assets without without sharing login credential
2. Give an example of what using OAuth would look like.
- When a site allows you to logon with another sites service.
3. How does OAuth work? What are the steps that it takes to authenticate the user?
- One time token and one time secret unique is sent 
- User is given approved access token to present to prove authentication
4. What is OpenID?
- OpenID allows the user to logon instead of on behalf of the user

## Authorization and Authentication Flows
1. What is the difference between authorization and authentication?
- Authentication checks if you are who you claim and authorization allows you to access.
2. What is Authorization Code Flow?
- User logs in and and is redirected to authorization server and is given an authorization code, client ID, and client secret
3. What is Authorization Code Flow with Proof Key for Code Exchange (PKCE)?
- Creates a cryptographically-random code_verifier and from this generates a code_challenge
- Redirects the user back to the application with an authorization code
- Authorization Server verifies the code_challenge and code_verifier
- Authorization Server responds with an ID Token and Access Token
4. What is Implicit Flow with Form Post?
- It is for public clients that cant store client secrets using only an ID token
5. What is Client Credentials Flow?
- Authentication with using its Client ID and Client Secret
- Authorization Server responds with an Access Token
6. What is Device Authorization Flow?
- Requests authorization using its Client ID
- Responds with device_code, user_code, verification_uri, verification_uri_complete
- Asked to authenticate on computer or phone
- Responds with an Access Token 
7. What is Resource Owner Password Flow?
- Application forwards the user's credentials to your server
- Server responds with an Access Token 