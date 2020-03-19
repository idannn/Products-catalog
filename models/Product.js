const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: String,
  },
  category: {
    type: String,
  },
  description: {
    type: String,
  },
  logo: {
    type: String,
  },
  photos: {
    type: [String],
  },
});

mongoose.model('Product', productSchema);
