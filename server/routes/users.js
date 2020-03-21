const express = require("express"),
  router = express.Router();

router.get("/:id?", (req, res) => {
  res.send("users");
});

// // OR this with :id snce that's what we had to use in chirps.js ?
// router.get('/:id', (req, res) => {
//     res.send('users')
// });

module.exports = router;
