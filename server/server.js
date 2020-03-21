const express = require("express"),
  cors = require("cors"),
  apiRouter = require("./routes"),
  path = require("path"),
  app = express(),
  PORT = process.env.PORT || 3000;

//THE 3 MIDDLEWARES
//cors middleware
app.use(cors());
//this is the body parser middleware that parses the JSON content that's posted to the API so that we can use the JSON content like a JS object
app.use(express.json());
//middleware router from apiRouter out of routes in index.js
app.use("/api", apiRouter);

//use static middleware to serve up client files automatically
app.use(express.static(path.join(__dirname, "../client")));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
