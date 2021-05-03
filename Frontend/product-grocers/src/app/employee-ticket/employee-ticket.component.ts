import { Component, OnInit } from '@angular/core';
import { TicketService } from '../services/ticket.service';
import { Ticket } from '../models/ticket.model';
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-employee-ticket',
  templateUrl: './employee-ticket.component.html',
  styleUrls: ['./employee-ticket.component.css']
})
export class EmployeeTicketComponent implements OnInit {

  tickets:Ticket[] = [];

  constructor(public ticketSer:TicketService, public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.showTicket();
  }

  unlockAccount(ticketID: any) {
    this.ticketSer.resolveTicket(ticketID);
  }

  showTicket() {
    this.ticketSer.getTickets()
      .subscribe(tickets => {
        this.tickets = tickets;
      })
  }
}
