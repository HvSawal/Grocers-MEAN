let mongoose = require("mongoose");
mongoose.Promise = global.Promise;      // creating reference. 

const AutoIncrement = require('mongoose-sequence')(mongoose);

let EmployeeSchema = mongoose.Schema({
    _id: Number,
    name: String,
    email: String,
    password: {type: String, default:"employeepass"},
    isAdmin: {type: Boolean, default:false}
})

EmployeeSchema.plugin(AutoIncrement , {id: 'employee_id_counter', inc_field: '_id'});

let EmployeeModel = mongoose.model("Employee", EmployeeSchema, "employees");

module.exports = EmployeeModel
