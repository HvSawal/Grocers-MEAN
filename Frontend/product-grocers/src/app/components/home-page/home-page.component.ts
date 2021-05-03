import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  userID:number;
  isAdmin:boolean = false;
  isLoggedIn:boolean = false;
  constructor(private empSer: EmployeeService) { }

  ngOnInit(): void {
    this.userID = JSON.parse((localStorage.getItem("userId")));
    if(this.userID.toString() != ""){
      this.isLoggedIn = true;
    }
    let employee = this.empSer.getEmployee(this.userID).subscribe(employee =>{
      this.isAdmin = employee[0].isAdmin;
    });
  }

}
