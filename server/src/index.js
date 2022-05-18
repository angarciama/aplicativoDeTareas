const express = require('express');
const app = express();
const db = require('./database/models');
const { expressjwt: jwt } = require('express-jwt');

//Para que cree las tablas con npm run start
forceSync = async () => {
    await db.sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
    await db.sequelize.sync({ force: true });
    await db.sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
}

//forceSync();

//Para que lo que mandemos en el body llegue al request "app.use(express.json());"
app.use(express.json());

//token: express-jwt
app.use(
    jwt({
      secret: "NocqVerXvLvLtyvquEJF",
      algorithms: ["HS256"],
    }).unless({ path: ["/api/user/login", '/api/user/register'] })
  );

app.use('/api/user', require('./routes/user.route'))

app.listen(3000, () => console.log("Servidor corriendo en el puerto: 3000"));