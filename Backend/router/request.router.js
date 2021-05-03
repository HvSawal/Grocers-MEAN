let express = require("express");
let router = express.Router();  //router reference. 
let RequestController = require("../controller/request.controller.js");

//mapping sub path with http methods. 
router.post("/storeRequest",RequestController.storeRequest);
router.get("/showRequests",RequestController.getRequests);
router.delete("/acceptRequest/:did",RequestController.acceptRequestById);
router.delete("/deleteRequest/:did",RequestController.deleteRequestById);

module.exports=router;