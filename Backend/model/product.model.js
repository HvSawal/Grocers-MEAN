let mongoose = require("mongoose");
mongoose.Promise = global.Promise;      // creating reference. 

const AutoIncrement = require('mongoose-sequence')(mongoose);

let ProductSchema = mongoose.Schema({
    _id: Number,
    name: String,
    price: Number,
    quantity: Number,
    desc: String,
    imageUrl: String
})

ProductSchema.plugin(AutoIncrement, {id: 'product_id_counter', inc_field: '_id'});

let ProductModel = mongoose.model("Product", ProductSchema, "products");


module.exports = ProductModel