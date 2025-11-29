const express = require("express");
const app = express();

const port = require("./config/appconfig");
const bodyParser = require("body-parser");
const dbConnection = require("./config/dbconnection");
const routes = require("./routers/app.routes");

app.use(bodyParser.json());
app.use(express.json());

dbConnection();

app.use("/api", routes);

app.listen(parseInt(port.serverDetails.port), () => {
  console.log(`Server Running on Port : ${parseInt(port.serverDetails.port)}`);
});
