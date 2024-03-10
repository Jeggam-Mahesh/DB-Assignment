/// creating database schema in mongoose 

//Product schema:

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  desc: String,
  SKU: String,
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ProductCategory',
    required: true
  },
  inventory_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Inventory',
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  discount_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Discount'
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  modified_at: {
    type: Date,
    default: Date.now
  },
  deleted_at: Date
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;


//productCategorySchema:

const mongoose = require('mongoose');

const productCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  desc: String,
  created_at: {
    type: Date,
    default: Date.now
  },
  modified_at: {
    type: Date,
    default: Date.now
  },
  deleted_at: Date
});

const ProductCategory = mongoose.model('ProductCategory', productCategorySchema);

module.exports = ProductCategory;


// inventorySchema:

const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  modified_at: {
    type: Date,
    default: Date.now
  },
  deleted_at: Date
});

const Inventory = mongoose.model('Inventory', inventorySchema);

module.exports = Inventory;



//discountSchema:
const mongoose = require('mongoose');

const discountSchema = new mongoose.Schema({
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  name: String,
  desc: String,
  discount_percent: {
    type: Number,
    required: true
  },
  active: {
    type: Boolean,
    default: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  modified_at: {
    type: Date,
    default: Date.now
  },
  deleted_at: Date
});

const Discount = mongoose.model('Discount', discountSchema);

module.exports = Discount;
