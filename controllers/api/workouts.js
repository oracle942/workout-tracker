const express = require("express");
const db = require("./models");
const app = express();

db.Workout.create({ name: "Workouts" })
  .then(dbWorkouts => {
    console.log(dbWorkouts);
  })
  .catch(({message}) => {
    console.log(message);
  });

  app.post("/", ({body}, res) => {
    db.Book.create(body)
      .then(({_id}) => db.Library.findOneAndUpdate({}, { $push: { books: _id } }, { new: true }))
      .then(dbLibrary => {
        res.json(dbLibrary);
      })
      .catch(err => {
        res.json(err);
      });
  });