<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Execute in development

1. Clone repo
2. Execute
```
yarn install
```
3. Must have Nest CLI installed
```
npm i -g @nestjs/cli
```

4. Build the database
```
docker-compose up -d
```

5. Clone the archive __.env.template__ and rename to __.env__

6. Fill the environment variables defined in the __.env__ file

7. Execute the app in development

```
yarn start:dev
```

8. Rebuild the database with the SEED data
```
http://localhost:3000/api/v2/seed
```

## Stack 

* MongoDB
* Nest JS