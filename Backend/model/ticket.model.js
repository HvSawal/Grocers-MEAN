let mongoose = require("mongoose");
mongoose.Promise = global.Promise;      // creating reference. 

const AutoIncrement = require('mongoose-sequence')(mongoose);

let TicketSchema = mongoose.Schema({
    _id: Number,
    userID: Number,
    name: String,
    reason: String
})

TicketSchema.plugin(AutoIncrement, {id: 'ticket', inc_field: '_id'});

let TicketModel = mongoose.model("Ticket", TicketSchema, "Tickets");

module.exports = TicketModel