import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }


  storeUserDetailsInfo(userRef: any) {
    this.http.post("http://localhost:9090/user/storeUserDetails", userRef, { responseType: "text" }).
      subscribe(result => console.log(result), error => console.log(error));


    alert('Details printed on server console');
  }
  retrieveAllUserDetails(): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:9090/user/allUserDetails")
  }

  retrieveUserById(id: any): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:9090/user/retrieveUserById/" + id)
  }

  //by default all HttpClient method return type is observable with json format data. 
  deleteUserById(id: any): any {
    return this.http.delete("http://localhost:9090/user/deleteUserById/" + id, { responseType: 'text' });
  }
  updateUserFundsById(userRef: any): any {
    return this.http.put("http://localhost:9090/user/updateUserFundsById", userRef, { responseType: 'text' })
  }

  userOrderPurchase(userRef: any): any {
    return this.http.put("http://localhost:9090/user/userOrderPurchase", userRef, { responseType: 'text' })
  }

  lockUser(loginRef:any):any{
    console.log("User locked");
    return this.http.put("http://localhost:9090/user/lockUser",loginRef, { responseType: 'text' }).subscribe((result) => {console.log(result)});
  }

  unlockUser(userRef: any): any {
    return this.http.put("http://localhost:9090/user/unlockUser", userRef, { responseType: 'text' })
  }

  updateUser(userRef: any): any {
    return this.http.put("http://localhost:9090/user/updateUser", userRef, { responseType: 'text' })
  }

  
  addFunds(userRef: any): any {
    return this.http.put("http://localhost:9090/user/addFunds", userRef, { responseType: 'text' })
  }




}
