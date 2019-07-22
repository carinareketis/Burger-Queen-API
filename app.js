const express = require("express");
const app = express();
const db = require('./models/index');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');


app.listen(4577, console.log("Servidor rodando"));

app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/user", require("./routes/user"))

app.use("/product", require("./routes/product"))

app.use("/order", require("./routes/order"))

db.sequelize.sync();



