import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket.model';
@Injectable({
  providedIn: 'root'
})
export class TicketService {
  constructor(public http:HttpClient) { }
//post method 1st parameter url and 2nd parameter json data. 
  createTicket(ticketRef:any){
    this.http.post("http://localhost:9090/ticket/createTicket",ticketRef,{responseType:"text"}).
    subscribe(result=>console.log(result),error=>console.log(error));
  }

  getTickets():Observable<Ticket[]>{
     return this.http.get<Ticket[]>("http://localhost:9090/ticket/showTickets")    //Should return array of tickets that can then be used to display tickets
  }

  //by default all HttpClient method return type is observable with json format data. 
  resolveTicket(id:any):any{
    return this.http.delete("http://localhost:9090/ticket/resolveTicketById/"+id,{responseType:'text'})
      .subscribe(result=>console.log(result),error=>console.log(error));
  }
}
