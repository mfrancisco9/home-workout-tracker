const router = require('express').Router();
const path = require('path');

//homepage

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "../public/index.html"));
  });
  
//stats page

  router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname + "../public/stats.html"));
  });
  

//exercise submit page

  router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname + "../public/exercise.html"));
  });
  
  module.exports = router;