### Execution
Run the docker-compose file with 
`docker-compose up` or `docker-compose up -d` to run containers in the background

### How to login to database
Open another terminal to login to the container. Type `docker container ls` to see our running container
Login to your container by using container names
```
docker exec -it <container-name> bash
```
Login to MongoDB with created User & Database by using
```
mongo -u <your username> -p <your password> --authenticationDatabase <your database name>
```

### Connect string
You can connect to the database by using this URL as a connection 
```
mongodb://YourUsername:YourPasswordHere@127.0.0.1:27017/your-database-name
```