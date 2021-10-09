const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "String is Required"
  },
  day: {
    type: Date,
    default: Date.now
  },
  distance: {
    type: Number,
    trim: true,
    required: "String is Required"
  },
  duration: {
    type: Number,
    trim: true,
    required: "String is Required"
  },

  weight: {
    type: Number,
    trim: true,
    required: "String is Required"
  },
  sets: {
    type: Number,
    trim: true,
    required: "String is Required"
  },
  reps: {
    type: Number,
    unique: true,
    required: true
  },

});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;