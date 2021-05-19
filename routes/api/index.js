const router = require('express').Router();
const db = require ('../../models');


// workouts routes

// finding previous workouts
router.get('/api/workouts', (req, res) => {
    db.Workout.find({}).sort({date: -1})
    .then((data) => {
        res.status(200).json(data);
    })
    .catch((err) => {
        res.status(400).json(err)
    })
});

// get workouts in range: 

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .sort({ date: -1 })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });


// adding workout
router.post('/api/workouts', (req, res) => {
    db.Workout.create(req.body)
    .then((data) => {
        res.status(200).json(data);
    })
    .catch((err) => {
        res.status(400).json(err);
    })
});


// adding to workout:

router.post('/api/workouts/:id', async (req, res) => {
    db.Workout.updateOne({
        _id: req.params.id
    },
    {
        $push: {
            exercises: { ...req.body}
        }
    })
    .then((data) => {
        res.status(200).json(data)
    })
    .catch((err) => {
        res.status(400).json(err);
    })
})

module.exports = router