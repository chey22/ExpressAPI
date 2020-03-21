const express = require("express"),
  router = express.Router(),
  chirpsRouter = require("./chirps"),
  usersRouter = require("./users");

router.use("/chirps", chirpsRouter);
router.use("/users", usersRouter);

module.exports = router;
