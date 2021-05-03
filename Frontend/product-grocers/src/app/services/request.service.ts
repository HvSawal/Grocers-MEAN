import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from '../models/request.model'

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(public http: HttpClient) { }
  sendRequest(reqRef: any) {
    this.http.post("http://localhost:9090/request/storeRequest", reqRef, { responseType: "text" }).
      subscribe(result => console.log(result), error => console.log(error));
  }

  getRequests():Observable<Request[]>{
    return this.http.get<Request[]>("http://localhost:9090/request/showRequests")    //Should return array of tickets that can then be used to display tickets
 }

 acceptRequest(id:any){
   this.http.delete("http://localhost:9090/request/acceptRequest/"+id,{responseType:'text'})
   .subscribe(result=>console.log(result),error=>console.log(error));
 }

 deleteRequest(id:any){
   this.http.delete("http://localhost:9090/request/deleteRequest/"+id,{responseType:'text'})
   .subscribe(result=>console.log(result),error=>console.log(error));
 }
}
