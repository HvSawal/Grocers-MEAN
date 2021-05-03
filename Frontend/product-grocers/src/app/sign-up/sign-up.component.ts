import { Component, OnInit } from '@angular/core';
//import { ExampleService } from '../example.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(public userService:UserService) { }

  ngOnInit(): void {
  }
  storeUser(userRef:any){
    //console.log(userRef);
    this.userService.storeUserDetailsInfo(userRef);
  }

}
