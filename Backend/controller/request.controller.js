const ProductModel = require("../model/product.model.js");
let RequestModel = require("../model/request.model.js");

let storeRequest = (req, res) => {

    let request = new RequestModel({
        product_id: req.body.product_id,
        price: req.body.price,
        quantity: req.body.quantity,
    });

    request.save((err, result) => {
        if (!err) {
            res.send("Request stored successfully ")
        } else {
            res.send(err);
        }
    })

}

let getRequests = async (req, res) => {
    try {
        const requests = await RequestModel.find()
            .sort({ createdAt: -1 });
        res.send(requests);
    } catch (err) {
        res.send("Error generated "+err);
    }
};

let acceptRequestById = (req, res) => {
    let did = req.params.did;

    RequestModel.findOne({_id:did},(err,request) => {
        if(!err){
            let pid = request.product_id;
            let price = request.price;
            let quantity = request.quantity;

            ProductModel.findOne({_id:pid},(err,product) => {
                product.price = price;
                product.quantity = quantity 
                product.save();
            })
        }
        deleteRequestById(req,res);
    })
}

let deleteRequestById = (req,res) => {
    let did = req.params.did;
    console.log(did);
    RequestModel.deleteOne({_id:did},(err,result)=> {
        if(!err){
                if(result.deletedCount>0){
                    res.send("Request deleted successfully")
                }else {
                    res.send("Request not present");
                }
        }else {
            res.send("Error generated "+err);
        }
    });
}

module.exports = { storeRequest,getRequests,acceptRequestById,deleteRequestById }