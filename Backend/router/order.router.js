let express = require("express");
let router = express.Router();  //router reference. 
let OrderController = require("../controller/order.controller.js");

//mapping sub path with http methods. 
router.get("/allOrderDetails",OrderController.getOrderDetails);
router.get("/retrieveOrderById/:pid",OrderController.getOrderById)
router.post("/storeOrderDetails",OrderController.storeOrderDetails);
router.delete("/deleteOrderById/:pid",OrderController.deleteOrderById);
router.put("/updateOrderStatus",OrderController.updateOrderStatus);


module.exports=router;