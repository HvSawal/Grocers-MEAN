import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  login = true;
  attemptsLeft = 3;
  constructor(public loginSer:LoginService, public userSer:UserService, public route: Router) { }

  ngOnInit(): void {
  }

  checkLogin(loginRef:any){
    this.loginSer.attemptLogin(loginRef).
    subscribe(id=>{
      console.log(id);
      if(id == ""){
        console.log("incorrect");
        this.login = false;
        let incorrectAttempts = JSON.parse(sessionStorage.getItem("incorrectAttempts"));
        console.log(incorrectAttempts);
        if(incorrectAttempts == null){
          incorrectAttempts = 0;
        }
        incorrectAttempts++;
        this.attemptsLeft --;

        if(incorrectAttempts > 2){
          this.userSer.lockUser(loginRef);
        }

        sessionStorage.setItem("incorrectAttempts", JSON.stringify(incorrectAttempts));
      }
      else{
        localStorage.setItem("userId",JSON.stringify(id));
        sessionStorage.setItem("incorrectAttempts","0");
        this.route.navigate(['/']);
      }
    },error=>console.log(error));

    
    
  }
}
