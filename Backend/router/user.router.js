let express = require("express");
let router = express.Router();  //router reference. 
let UserController = require("../controller/user.controller.js");

//mapping sub path with http methods. 
router.get("/allUserDetails",UserController.getUserDetails);
router.get("/retrieveUserById/:pid",UserController.getUserById)
router.post("/storeUserDetails",UserController.storeUserDetails);
router.delete("/deleteUserById/:pid",UserController.deleteUserById);
router.put("/updateUserFundsById",UserController.updateUserFundsById);
router.put("/userOrderPurchase",UserController.userOrderPurchase);
router.put("/unlockUser",UserController.unlockUser);
router.put("/lockUser",UserController.lockUser);
router.put("/updateUser",UserController.updateUser);
router.post("/login",UserController.login);
router.put("/addFunds",UserController.addFunds);

module.exports=router;