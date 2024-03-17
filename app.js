require("dotenv").config();
require("./db/connect");
const express = require("express");
const tasks = require("./routes/tasks");
const { connectToMongodb } = require("./db/connect");
const notFound = require("./middleware/not-found");
// const errorMiddleware = require("./middleware/error-handler");
const url = process.env.connection_string;

const app = express();

app.use(express.json());
app.use(express.static("public"));

//routes
app.use("/api/v1/tasks", tasks);

app.use(notFound);
// app.use(errorMiddleware)

const port = 7000;

const start = async () => {
  try {
    await connectToMongodb(url);
    app.listen(port, () => {
      console.log(`Server started successfully at port ${port}...`);
    });
  } catch (error) {
    console.error(error);
  }
};

start();
