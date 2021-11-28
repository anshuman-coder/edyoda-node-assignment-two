const mongoose = require('mongoose');


const Products = {
  imgUrl: String,
  name: String,
  price: String,
};

module.exports = mongoose.model('products', Products);