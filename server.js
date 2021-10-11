const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
// const routes = require('/controllers')
const Workout = require('./models/workouts')


const app = express();
const PORT = process.env.PORT || 3000;


const db = require("./models");


mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout', { useNewUrlParser: true },
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger("dev"));
// app.use(routes)


// db.on("error", error => {
//   console.log("Database Error:", error);
// });

db.Workout.create({ name: "Workouts" })
  .then(dbWorkouts => {
    console.log(dbWorkouts);
  })
  .catch(({message}) => {
    console.log(message);
  });

  app.put("/", ({body}, res) => {
    db.Workout.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});


