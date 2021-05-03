let EmployeeModel = require("../model/employee.model.js");
let RequestModel = require("../model/request.model");
let ProductModel = require("../model/product.model")

//Retrieve all order details 
let getEmployeeDetails =(req,res)=> {

    EmployeeModel.find({},(err,result)=> {
        if(!err){
            res.json(result);
        }
    })

}

let getEmployeeById = (req,res)=> {
    let eid = req.params.eid;       //passing id through path param 

    EmployeeModel.find({_id:eid},(err,employee)=> {
        if(!err){
            res.json(employee);
        }
    })
}

let createEmployee = (req,res)=> {
   
    let employee = new EmployeeModel({
        name: req.body.name,
        email: req.body.email
    });

    employee.save((err,result)=> {
        if(!err){
            res.send("Employee Created Successfully ")
        }else {
            res.send("Error Creating Employee ");
        }
    })

}

let deleteEmployeeById= (req,res)=> {
    console.log("In delete employee");
    let eid = req.params.eid;
    console.log(eid);
    EmployeeModel.deleteOne({_id:eid},(err,result)=> {
        if(!err){
                if(result.deletedCount>0){
                    res.send("Employee deleted successfully")
                }else {
                    res.send("Employee not present");
                }
        }else {
            res.send("Error generated "+err);
        }
    })

}

let changePassword = (req,res) => {
    let eid = req.body._id;

    EmployeeModel.updateOne(
        { _id: eid }, 
        { $set: 
            {  
                password: req.body.password
            }
        }, 
    (err, result) => {
        if (!err) {
            if (result.nModified > 0) {
                res.send("Record updated succesfully")
            } else {
                res.send("Record is not available");
            }
        } else {
            res.send("Error generated " + err);
        }
    })
}

let createRequest = (req,res) => {
    let request = new RequestModel({
        product_id: req.body.product_id,
        price: req.body.price,
        quantity: req.body.number
    });

    request.save((err,result)=> {
        if(!err){
            res.send("Request Created Successfully ")
        }else {
            res.send("Error Creating Request ");
        }
    })
}

let getRequests = async (req,res) => {
    try {
        const requests = await RequestModel.find()
            .sort({ createdAt: -1 });
        res.send(requests);
    } catch (err) {
        res.send("Error generated "+err);
    }
}

let resolveRequest = (req,res) => {
    let pid = req.params.pid;
    RequestModel.findOne({product_id:pid},(err, request) => {
        let newPrice = request.price;
        let newAmount = req.quantity;
        
        ProductModel.updateMany(
            { _id: pid }, 
            { $set: 
                {  
                    price: newPrice
                }
            })
        
        deleteRequest(req,res);
    });
}

let deleteRequest = (req,res) => {
    let pid = req.params.pid;
    RequestModel.deleteOne({ product_id: pid }, (err, result) => {
        if (!err) {
            if (result.deletedCount > 0) {
                res.send("Request deleted successfully")
            } else {
                res.send("Request not present");
            }
        } else {
            res.send("Error generated " + err);
        }
    })
}

module.exports={getEmployeeDetails,getEmployeeById,createEmployee,deleteEmployeeById,changePassword,createRequest,getRequests,resolveRequest,deleteRequest}