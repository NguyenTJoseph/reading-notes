# Django REST Framework & Docker
## Beginner's Guide to Docker
- Docker is just Linux containers which are a type of virtualization.
- Containers are a lightweight alternative to Virtual Machines
- Dockerfile is a list of instructions for creating an image
- Images are made up of one or more layers
- Containers are a running instance of an image
- docker-compose.yml controls how to run the container
- Containers are stateless and ephemeral in nature. We can link the local filesystem via volumes but things become more complex with databases.
## Django for APIs
- A serializer translates data into a format that is easy to consume over the internet, typically JSON, and is displayed at an API endpoint.
- We can use the popular cURL program to execute HTTP requests via the command line. All we need for a basic GET request it to specify curl and the URL we want to call.
- Django REST Framework provides this visualization by default.