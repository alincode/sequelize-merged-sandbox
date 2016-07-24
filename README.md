# sequelize-merged-sandbox

```
npm init -y
npm install -g sequelize-cli
npm install --save sequelize-cli
npm install --save sequelize
sequelize init
npm install --save mysql
```

### Create Model(only first time)
```
sequelize model:create --name User --attributes first_name:string,last_name:string,bio:text
sequelize db:migrate
```

### Create a migration
```
sequelize migration:create
```

### Run migration
```
db:migrate
```

[doc migrations](http://docs.sequelizejs.com/en/latest/docs/migrations/)
