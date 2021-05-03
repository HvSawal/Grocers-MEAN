import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  isActive1 = "active";
  isActive2 = "";
  isActive3 = "";
  isActive4 = "";

  constructor() { }

  ngOnInit(): void {
  }

  toggleActive(num){
    if(num===1){
      this.isActive1 = "active";
      this.isActive2 = "";
      this.isActive3 = "";
      this.isActive4 = "";
    }
    else if(num===2){
      this.isActive1 = "";
      this.isActive2 = "active";
      this.isActive3 = "";
      this.isActive4 = "";
    }
    else if(num===3){
      this.isActive1 = "";
      this.isActive2 = "";
      this.isActive3 = "active";
      this.isActive4 = "";
    }
    else if(num===4){
      this.isActive1 = "";
      this.isActive2 = "";
      this.isActive3 = "";
      this.isActive4 = "active";
    }
  }

}
