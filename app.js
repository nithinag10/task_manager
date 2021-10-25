const express = require("express");
const app = express();
const router = express.Router();
const tasks = require("./routes/task");
const conenctionDb = require("./db/connect");
require("dotenv").config();
const notFoundHandling = require("./middleware/notFoundHandling");

//middleware
app.use(express.static("./assets"));
app.use(express.json());

//routes
app.use("/api/taskmaster/", tasks);

//Handling Not Found
app.use(notFoundHandling);

const port = 3000;

const start = async () => {
  try {
    await conenctionDb(process.env.MONGO_URI);
    app.listen(port, console.log(`Server listning in port ${port}...`));
  } catch (err) {
    console.log(`Error in connecting to Database ${err}`);
  }
};

start();
