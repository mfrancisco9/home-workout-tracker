const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    type: {
        type: String,
        required: `Please choose either 'resistance' or 'cardio'.`,
        enum: ['cardio', 'resistance']

    },
    name: {
        type: String,
        trim: true,
        required: `Please enter a name for this exercise.`

    },
    duration: {
        type: Number,
        required: `Please enter a duration.`

    },
    weight: {
        type: Number,

    },
    sets: {
        type: Number,

    },
    reps: {
        type: Number,

    },
    distance: {
        type: Number,

    }
});

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
    },
    exercises: [exerciseSchema]
});


// tallying total duration

workoutSchema.virtual("totalDuration").get(function () {
    let totalDuration = 0;
    this.exercises.forEach((el) => {
      totalDuration += el.duration;
    });
    return totalDuration;
  });


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;