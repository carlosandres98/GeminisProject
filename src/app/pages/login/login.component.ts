import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserServiceService, usersDBI } from '../../services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  access: boolean = true;
  userD: usersDBI;
  validLogin = true;

  userDB: userI = {
    txtEmail: '',
    txtPassword: ''
  };

  constructor(private router: Router, private userSevice: UserServiceService) {

  }

  ngOnInit() {
  }

  goLogin(formData: NgForm) {
    this.access = true;
    this.userDB = formData.value;
    this.userD = this.userSevice.login(this.userDB.txtEmail, this.userDB.txtPassword);

    if (this.userD) {
      this.router.navigate(['/switch-seller']);

    } else {
      this.access = false;
    }

  }

  goRegister() {
    this.router.navigate(['register']);

  }

  goRecover() {
    this.router.navigate(['recover']);
  }

}

export interface userI {
  txtEmail: string;
  txtPassword: string;
}
