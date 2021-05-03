import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-edit-employees',
  templateUrl: './edit-employees.component.html',
  styleUrls: ['./edit-employees.component.css']
})
export class EditEmployeesComponent implements OnInit {
  employee?:any
  constructor(public empSer:EmployeeService) { }

  ngOnInit(): void {
  }  

  changePassword(employeeRef:any){
    this.empSer.getEmployee(JSON.parse(localStorage.getItem("userId"))).subscribe(employee => {
      let empId = employee[0]._id;
      this.empSer.changePassword({_id: empId, password: employeeRef.password}).subscribe(result => {
        console.log(result)
      });
    })
  }

  getEmployee(id:any){
    this.empSer.getEmployee(id).subscribe(result => {
      console.log(result);
      this.employee = result[0];
    });
  }
  

  

}
