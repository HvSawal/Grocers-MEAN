let express = require("express");
let router = express.Router();  //router reference. 
let EmployeeController = require("../controller/employee.controller.js");

//mapping sub path with http methods. 
router.get("/retrieveEmployeeById/:eid",EmployeeController.getEmployeeById)
router.post("/createEmployee",EmployeeController.createEmployee);
router.put("/changePassword",EmployeeController.changePassword)
router.delete("/deleteEmployeeById/:eid",EmployeeController.deleteEmployeeById);
router.post("/createRequest", EmployeeController.createRequest);
router.delete("/resolveRequest/:pid", EmployeeController.resolveRequest);
router.get("/viewRequests",EmployeeController.getRequests)
router.delete("/deleteRequest/:pid", EmployeeController.deleteRequest);
router.get("/allEmployeeDetails",EmployeeController.getEmployeeDetails);

module.exports=router;