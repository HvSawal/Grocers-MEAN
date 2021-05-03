import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  user?:any
  userId = JSON.parse(localStorage.getItem('userId'))
  constructor(public usrService:UserService) { }

  ngOnInit(): void {
    this.getUser(this.userId)
  }

  getUser(id: any) {
    this.usrService.retrieveUserById(id).subscribe(result => {
      console.log(result);
      this.user = result[0];
    })
  }

}
