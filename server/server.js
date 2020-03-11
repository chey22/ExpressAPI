const express = require('express');
const cors = require('cors');
const apiRouter = require('./routes');

let app = express();

//THE 3 MIDDLEWARES
//cors middleware
app.use(cors());
//this is the body parser middleware that parses the JSON content that's posted to the API so that we can use the JSON content like a JS object
app.use(express.json());
//middleware router from apiRouter out of routes in index.js
app.use('/api', apiRouter);


app.listen(3000);