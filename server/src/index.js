const express = require('express');
const app = express();
const db = require('./database/models');
const { expressjwt: jwt } = require('express-jwt');
const cors = require('cors');

//Para que cree las tablas con npm run start
forceSync = async () => {
    await db.sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
    await db.sequelize.sync({ force: true });
    await db.sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
    await db.User.create({
      name: "Prueba",
      lastName: "Prueba",
      email: "prueba@gmail.com",
      password: "12345"
    })
}
forceSync();

//Unir back con front
app.use(cors());
//Para que lo que mandemos en el body llegue al request "app.use(express.json());"
app.use(express.json());

//token: express-jwt
app.use(
    jwt({
      secret: "NocqVerXvLvLtyvquEJF",
      algorithms: ["HS256"],
    }).unless({ path: ["/api/user/login", '/api/user/signup'] })
  );

app.use('/api/user', require('./routes/user.route'))
app.use('/api/task', require('./routes/task.route'))

app.listen(3001, () => console.log("Servidor corriendo en el puerto: 3001"));