const express = require('express')
const app = express()

//Para que lo que mandemos en el body llegue al request "app.use(express.json());"
app.use(express.json());

app.use('/api/user', require('./routes/user.route'))

app.listen(3000, () => console.log("Servidor corriendo en el puerto: 3000"));