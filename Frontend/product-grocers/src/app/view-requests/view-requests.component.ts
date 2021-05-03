import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/request.service';
import { Request } from '../models/request.model';
@Component({
  selector: 'app-view-requests',
  templateUrl: './view-requests.component.html',
  styleUrls: ['./view-requests.component.css']
})
export class ViewRequestsComponent implements OnInit {

  requests:Request[] = [];
  constructor(public reqSer: RequestService) { }

  ngOnInit(): void {
    this.showRequests();
  }

  showRequests() {
    this.reqSer.getRequests().subscribe(requests => {this.requests = requests; console.log(requests);})
    
  }

  acceptRequest(id:any){
    this.reqSer.acceptRequest(id);
  }

  declineRequest(id:any){
    this.reqSer.deleteRequest(id);
  }
}
