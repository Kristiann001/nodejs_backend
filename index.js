const express = require("express");
const studentroutes = require("./Routes/studentroute");
require("dotenv").config();
require("./Helpers/init_mongodb")

const app = express();
app.use(studentroutes);

app.listen(process.env.port || 4000, function () {
  console.log("Now Listening for requests on http://localhost:4000");
});
