import { Component, OnInit } from '@angular/core';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-raise-ticket',
  templateUrl: './raise-ticket.component.html',
  styleUrls: ['./raise-ticket.component.css']
})
export class RaiseTicketComponent implements OnInit {

  constructor(public ticketSer: TicketService) { }

  ngOnInit(): void {
  }

  submitTicket(ticketRef:any){
    this.ticketSer.createTicket(ticketRef);
  }

}
