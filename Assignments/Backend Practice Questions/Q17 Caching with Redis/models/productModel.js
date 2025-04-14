import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  price: {
    type: Number,
    required: true
  },
  category: String,
  specs: mongoose.Schema.Types.Mixed
});

const productModel = mongoose.model('Product', productSchema);

module.exports = productModel;
