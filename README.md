* Clone repo.
* Install dependencies.
```
npm install
```
* Install Nest CLI.
```
npm i -g @nestjs/cli
```
* Start DB (Mongo).
```
docker-compose up -d
```
* Build database (Seed data).
```
http://localhost:3000/api/v1/seed-addresses
http://localhost:3000/api/v1/seed-conversions
```