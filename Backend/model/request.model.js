let mongoose = require("mongoose");
mongoose.Promise = global.Promise;      // creating reference. 

const AutoIncrement = require('mongoose-sequence')(mongoose);

let RequestSchema = mongoose.Schema({
    _id: Number,
    product_id: Number,
    price: Number,
    quantity: Number
})

RequestSchema.plugin(AutoIncrement , {id: 'request_id_counter', inc_field: '_id'});

let RequestModel = mongoose.model("Request", RequestSchema, "requests");

module.exports = RequestModel
