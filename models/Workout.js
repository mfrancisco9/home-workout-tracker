const mongoose = require("mongoose");
const Scheme = mongoose.Schema;

const exerciseSchema = new mongoose.Schema({
    type: {
        type: String,
        require: `Please choose either 'resistance' or 'cardio'.`

    },
    name: {
        type: String,

    },
    duration: {
        type: Number,

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