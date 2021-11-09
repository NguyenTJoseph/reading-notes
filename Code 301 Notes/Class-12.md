# CRUD 
## Status Codes

In your own words, describe what each group of status code represents:
- 100’s = Informational
- 200’s = Success 
- 300’s = Redirection
- 400’s = Client Error
- 500’s = Server Error
1. What is a status code 202?
- Accepted
2. What is a status code 308?
- Permanent redirect
3. What code would you use if an update didn’t return data to a client?
- 204
4. What code would you use if a resource used to exist but no longer does?
- 410
5. What is the ‘Forbidden’ status code?
- 403

## Rest API

1. Why do we need to pull our MongoDB database string out of our server and put it into our .env?
- When you deploy your app it allows you to change the url
2. What is middleware?
- Code that runs when server gets request but before it is passed to routes
3. What does app.use(express.json()) do?
- Lets server accept json
4. What does the /:id mean in a route?
- It is a parameter that you can access
5. What is the difference between PUT and PATCH?
- Patch only updates information that is passed where put updates the whole thing
6. How do you make a default value in a schema?
- default: 
7. What does a 500 error status code mean?
- An error on server
8. What is the difference between a status 200 and a status 201?
- 200: Successful, 201: Successfully created 