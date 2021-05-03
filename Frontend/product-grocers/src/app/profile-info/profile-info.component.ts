import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {
  user?: any;
  userId = JSON.parse(localStorage.getItem('userId')) 
  constructor(public usrService: UserService) { }

  ngOnInit(): void {
    this.getUser(this.userId)
    console.log(this.userId)
  }

  updateUser(userRef: any) {
    this.usrService.updateUser({user: userRef, userId: this.userId}).subscribe((result: string) => {
      console.log(result)
    });
  }

  getUser(id: any) {
    this.usrService.retrieveUserById(id).subscribe(result => {
      console.log(result);
      this.user = result[0];
    })
  }

}
