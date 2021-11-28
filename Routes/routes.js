const express = require('express');
const router = express.Router();


//customized exports
const products = require('../Models/products');
const users = require('../Models/users');


router.get('/', (req, res) => {
  res.send("Server started!");
});


router.get('/users', (req, res) => {
  users.find({})
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(400).send("bad request!" + err);
    });
});


router.get('/products', (req, res) => {
  products.find({})
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(400).send("Bad request!"+ err);
    })
});



router.get('*', (req, res) => {
  res.status(404).send("404 page not found!");
});


module.exports = router;