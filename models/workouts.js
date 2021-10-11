const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
    required: true
  },
  type: {
    type: String,
    trim: true,
    required: true
  },
  name: {
    type: String,
    trim: true,
    required: true
  },
  distance: {
    type: Number,
    trim: true,
  },
  duration: {
    type: Number,
    trim: true,
  },
  weight: {
    type: Number,
    trim: true,
  },
  sets: {
    type: Number,
    trim: true,
  },
  reps: {
    type: Number,
    trim: true,
  },
  
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;