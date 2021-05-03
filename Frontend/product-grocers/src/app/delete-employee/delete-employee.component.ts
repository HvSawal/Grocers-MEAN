import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from '../services/employee.service';


@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  employees?:Array<Employee>

  constructor(public empService:EmployeeService) { }

  ngOnInit(): void {
    this.empService.retrieveAllEmployeeDetails().subscribe(result=>this.employees=result);
  }

  deleteById(id:any){
    this.empService.deleteEmployee(id).subscribe((result:string)=> {
        console.log(result)
    })
  }

}
