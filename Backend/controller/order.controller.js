
let OrderModel = require("../model/order.model.js");

//Retrieve all order details 
let getOrderDetails =(req,res)=> {

    OrderModel.find({},(err,result)=> {
        if(!err){
            res.json(result);
        }
    })

}

let getOrderById = (req,res)=> {
    
    let pid = req.params.pid;       //passing id through path param 
    
    OrderModel.find({_id:pid},(err,data)=> {
        if(!err){
            res.json(data);         // return array 
            //res.json(data[0])     // return only one object 
        }
    })
}

let storeOrderDetails = (req,res)=> {
   
    let order = new OrderModel({
        total:req.body.total,
        userId:req.body.userId,
        products: req.body.products
    });

    order.save((err,result)=> {
        if(!err){
            res.send(result)
            //res.json({"msg":"Record stored successfully"})
        }else {
            res.send(err);
            //res.send("Record didn't store ");
        }
    })

}

let deleteOrderById= (req,res)=> {
    let pid = req.params.pid;
    OrderModel.deleteOne({_id:pid},(err,result)=> {
        if(!err){
                if(result.deletedCount>0){
                    res.send("Record deleted successfully")
                }else {
                    res.send("Record not present");
                }
        }else {
            res.send("Error generated "+err);
        }
    })

}

let updateOrderStatus= (req,res)=> {
    let pid = req.body.pid;
    let updatedStatus = req.body.status;
    OrderModel.updateMany({_id:pid},{$set:{status:updatedStatus}},(err,result)=> {
        if(!err){
            if(result.nModified>0){
                    res.send("Record updated succesfully")
            }else {
                    res.send("Record is not available");
            }
        }else {
            res.send("Error generated "+err);
        }
    })

}



module.exports={getOrderDetails,getOrderById,storeOrderDetails,deleteOrderById,updateOrderStatus}