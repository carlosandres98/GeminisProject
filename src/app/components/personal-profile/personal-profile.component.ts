import { Component, OnInit } from '@angular/core';
import { usersDBI, UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-personal-profile',
  templateUrl: './personal-profile.component.html',
  styleUrls: ['./personal-profile.component.scss']
})
export class PersonalProfileComponent implements OnInit {

  
  public userDB: usersDBI;
  constructor(private userService:UserServiceService) {
    this.userDB = this.userService.userDB;
    console.log(this.userDB);
   }

  ngOnInit() {
  }

}
