const express = require('express').Router;
const db = require('../../models');
const app = express();

app.post('/', (req , res) => {
  db.Workout.create({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.put("/:id", ({ body, params }, res) => {
  db.Workout.findByIdAndUpdate(params.id, { $push: { exercises: body }})
  .then(data => {
    console.log(data)
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
})

app.get("/range", (req, res) => {
  db.Workout.aggregate([ {$addFields: { totalDuration: {$sum: '$exercises.duration' }}}
    
  
])
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

app.get("/", (req, res) => {
db.Workout.aggregate([ {$addFields: { totalDuration: {$sum: '$exercises.duration' }}}
    
  
])
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});




module.exports = app