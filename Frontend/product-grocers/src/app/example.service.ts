import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  constructor(public http: HttpClient) { }

  showExampleDetails(exampleRef: any){
    //params: url, jsondata
    this.http.post("http://localhost:9090/example/",exampleRef).subscribe(res=>console.log(res), err=>console.log(err));
  }

  storeUserDetails(userRef:any){
    this.http.post("http://localhost:9090/user/storeUserDetails",userRef,{responseType:"text"}).
    subscribe(result=>console.log(result),error=>console.log(error));
    console.log(userRef);
    
    alert('Details printed on server console');
  }
}
