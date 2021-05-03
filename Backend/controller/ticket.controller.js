let TicketModel = require("../model/ticket.model.js");
let userController = require("./user.controller.js");

//Retrieve all order details 

let resolveTicketById = (req,res)=> {
    let tid = req.params.tid;       //passing id through path param 
    console.log(tid);
    
    TicketModel.findOne({_id:tid},(err,ticket)=> {
        if(!err){
            console.log(ticket);
            let user = ticket.userID;
            userController.unlockUser(user);
            deleteTicketById(req,res,tid);
        }
    })
}

let createTicket = (req,res)=> {
   
    let ticket = new TicketModel({
        _id: req.body._id,
        userID: req.body.userID,
        name: req.body.name,
        reason: req.body.reason
    });

    ticket.save((err,result)=> {
        if(!err){
            res.send("Ticket Created Successfully ")
        }else {
            res.send(err);
        }
    })

}

let deleteTicketById = (req,res,id) => {
    TicketModel.deleteOne({_id:id},(err,result)=> {
        if(!err){
                if(result.deletedCount>0){
                    res.send("Ticket deleted successfully")
                }else {
                    res.send("Ticket not present");
                }
        }else {
            res.send("Error generated "+err);
        }
    })

}

let showTickets = async (req, res) => {
    try {
        const tickets = await TicketModel.find()
            .sort({ createdAt: -1 });
        res.send(tickets);
    } catch (err) {
        res.send("Error generated "+err);
    }
};

module.exports={resolveTicketById,showTickets,createTicket,deleteTicketById}