let express = require("express");
let router = express.Router();  //router reference. 
let ProductController = require("../controller/product.controller.js");

//mapping sub path with http methods. 
router.get("/allProductDetails",ProductController.getProductDetails);
router.get("/retrieveProductById/:pid",ProductController.getProductById)
router.post("/storeProductDetails",ProductController.storeProductDetails);
router.delete("/deleteProductById/:pid",ProductController.deleteProductById);
router.put("/updateProduct",ProductController.updateProduct);
router.put("/reduceQuantity",ProductController.reduceQuantity);



module.exports=router;