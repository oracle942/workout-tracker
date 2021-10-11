const express = require("express").Router;
const db = require("../../models");
const app = express();

db.Workout.create({ name: "Workouts" })
  .then(dbWorkouts => {
    console.log(dbWorkouts);
  })
  .catch(({message}) => {
    console.log(message);
  });

  app.post("/", ({body}, res) => {
    db.Workout.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  // app.get("/", ({body}, res) => {
  //   const workout = body;
  //   db.Workout.save(workout, (error, saved) => 
  //   { if (error) {
  //     console.log(error);
  //   } else {
  //     res.send(saved);
  //   }})
     
  // });