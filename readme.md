## Documentation: [Postman](https://documenter.getpostman.com/view/9496143/UVR8q8X2) 
## Installation

Demo requires [Docker](https://www.docker.com/) to run

* Create .env file from env.sample
* Run docker-compose
```sh
docker-compose up -d
```
### Seed Account data (email || password)
- user1@demo.com || demo 
- user2@demo.com || demo
### Note
- Every time running a container, server will remove all seed data and seed them again so a token will be **invalid**
- You need to login again to get new token 
