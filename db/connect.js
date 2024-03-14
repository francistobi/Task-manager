const mongoose = require("mongoose");


const connectionString = process.env.connection_string;

function connectToMongodb(url) {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
}

module.exports = { connectToMongodb }
