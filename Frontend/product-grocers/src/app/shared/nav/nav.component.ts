import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  userID;
  isLoggedIn = false;
  constructor(public route: Router) { }

  ngOnInit(): void {
    this.userID = JSON.parse((localStorage.getItem("userId")));
    if(this.userID.toString() != ""){
      this.isLoggedIn = true;
    }
  }

  logout(){
    localStorage.setItem("userId","")
    this.isLoggedIn = false;
    this.route.navigate(['/login-page']);

  }

}
