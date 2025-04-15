import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  _id:Object,
  name: String,
    description: String,
    price: Number,
    category: String,
    specs: Object,
});

const productModel = mongoose.model('Product', productSchema);

export default productModel;
