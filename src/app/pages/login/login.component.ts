import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userDB: userI = {
    email: '',
    password: ''
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goLogin(formData: NgForm) {
    this.userDB = formData.value;
    console.log(this.userDB);
  }

  goRegister() {
    this.router.navigate(['register']);
    this.router.navigate(['dashboard']);
  }

  goRecover() {
    this.router.navigate(['recover']);
  }

}

export interface userI {
  email: string;
  password: string;
}
