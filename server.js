// all external modules that needed to be imported
const express = require('express');
const mongoose = require('mongoose');



// dotenv config method to keep the sensetive data secure
require('dotenv').config();


//database connection

mongoose.connect(process.env.DB_CON, () => {
  console.log('database connected');
});


//customized modules
const url = require('./Routes/routes');

//is admin variable

const isAdmin = true;

//creating the node application
const app = express();
const port = process.env.PORT || 8000;

//using middleware

app.use((req, res, next) => {
  if (isAdmin) {
    next();
  } else {
    res.status(401).send("Unauthorized access");
  }
});

//all the routes using middleware
app.use('/api', url);



//running on port 
app.listen(port, () => {
  console.log(`the sever is running on http://localhost:${port}`);
});