const mongoose = require('mongoose');

const Users = {
    id: String,
    name: String,
    username: String,
    email: String,
    address: {
      street: String,
      suite: String,
      city: String,
      zipcode: String,
    },
    phone: String,
};

module.exports = mongoose.model('users', Users)