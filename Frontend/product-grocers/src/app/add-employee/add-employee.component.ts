import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../services/employee.service'

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(public empService:EmployeeService) { }

  ngOnInit(): void {
  }

  createEmployee(employeeRef:any){
    console.log(employeeRef);
    this.empService.createEmployee(employeeRef);
  }

}
