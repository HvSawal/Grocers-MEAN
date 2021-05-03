import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/request.service';
import { Request } from '../models/request.model';
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-send-request',
  templateUrl: './send-request.component.html',
  styleUrls: ['./send-request.component.css']
})
export class SendRequestComponent implements OnInit {

  requests:Request[] = []; 
  constructor(public reqSer:RequestService) { }

  ngOnInit(): void {
  }

  sendRequest(requestRef:any){
    console.log(requestRef);
    this.reqSer.sendRequest(requestRef);
  }

  showTicket() {
    this.reqSer.getRequests().subscribe(requests => {this.requests = requests;})  //Creates array of requests for html to display
  }

}
