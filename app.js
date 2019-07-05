// require('dotenv').config();
// const chalk = require('chalk');
const express = require("express");
const app = express();
const db = require('./models/index');
app.listen(4577, console.log("Servidor rodando"));

// const Port = process.env.PORT || 4577;
// app.listen(Port , console.log(chalk.red(`Server started on port ${PORT}`)));
//express usa para mim essa rota.

app.use(express.json())

app.use("/user", require("./routes/user"))

app.use("/product", require("./routes/product"))

app.use("/order", require("./routes/order"))

db.sequelize.sync();
//sincroniza o sequelize e o bd



