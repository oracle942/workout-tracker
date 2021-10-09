const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const session = require('express-session');
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(logger("dev"));


const db = require("./models");


mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/exercisetrackerdb', { useNewUrlParser: true },
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(logger("dev"));

db.on("error", error => {
  console.log("Database Error:", error);
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
