import { Component, OnInit } from '@angular/core';
import { usersDBI, UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-p-profile',
  templateUrl: './p-profile.component.html',
  styleUrls: ['./p-profile.component.scss']
})
export class PProfileComponent implements OnInit {

  public userDB: usersDBI;
  constructor(private userService: UserServiceService) {
    this.userDB = this.userService.userDB;
    console.log(this.userDB);
  }

  ngOnInit() {
  }

}
