const mongoose = require("mongoose");
require("dotenv").config();
const DB = process.env.MONGODB;

mongoDB().catch((err) => console.log(err));

async function mongoDB() {
  await mongoose.connect(DB, (err) => {
    if (err) console.log(err);
    else console.log("Connected successfully to mongoose :)");
  });
}

module.exports = mongoDB;
