let mongoose = require("mongoose");
mongoose.Promise = global.Promise;      // creating reference. 

const AutoIncrement = require('mongoose-sequence')(mongoose);

let OrderSchema = mongoose.Schema({
    _id: Number,
    total: Number,
    userId: Number,
    products: Array,
    status: {type: String, default: "pending"},
    date: {type: Date, default: Date.now}

})


OrderSchema.plugin(AutoIncrement, {id: 'order_id_counter', inc_field: '_id'});



let OrderModel = mongoose.model("Order", OrderSchema, "orders");

module.exports = OrderModel