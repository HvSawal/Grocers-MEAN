import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(public http:HttpClient) { }
  
//post method 1st parameter url and 2nd parameter json data. 
  createEmployee(employeeRef:any){
    this.http.post("http://localhost:9090/employee/createEmployee",employeeRef,{responseType:"text"}).
    subscribe(result=>console.log(result),error=>console.log(error));
  }

  getEmployee(id:any):Observable<Employee[]>{
     return this.http.get<Employee[]>("http://localhost:9090/employee/retrieveEmployeeById/"+id)    //Should return array of tickets that can then be used to display tickets
  }

  //by default all HttpClient method return type is observable with json format data. 
  deleteEmployee(id:any):any{
    return this.http.delete("http://localhost:9090/employee/deleteEmployeeById/"+id,{responseType:'text'});
  }

  changePassword(employeeRef:any){
      return this.http.put("http://localhost:9090/employee/changePassword", employeeRef, { responseType: 'text' })
  }

  retrieveAllEmployeeDetails(): Observable<Employee[]> {
    return this.http.get<Employee[]>("http://localhost:9090/employee/allEmployeeDetails")
  }
}
