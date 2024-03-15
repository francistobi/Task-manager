require("dotenv").config();
require("./db/connect");
const express = require("express");
const tasks = require("./routes/tasks");
const { connectToMongodb } = require("./db/connect");
const url = process.env.connection_string;

const app = express()

app.use(express.json());
app.use(express.static("public"))

//routes
app.use("/api/v1/tasks", tasks)

//app.post("/api/v1/tasks") - create a new task
//app.get("/api/v1/tasks/:id") - get single task
//app.patch("/api/v1/tasks/:id") - update task
//app.delete("/api/v1/tasks/:id") - delete task

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
}

start();
