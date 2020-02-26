import { Component, OnInit } from '@angular/core';
import { usersDBI } from '../../services/user-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-seller-form',
  templateUrl: './seller-form.component.html',
  styleUrls: ['./seller-form.component.scss']
})
export class SellerFormComponent implements OnInit {

  userDB: usersDBI = {
    city: '',
    country: '',
    address: '',
    services: '',
    id: '',
    photo: '',
    accountype: '',
    names: '',
    mode: '',
    lastnames: '',
    email: '',
    password: '',
    confirmpass: ''

  };
  constructor() { }

  ngOnInit() {
  }

  goRegister(formData: NgForm) {
    console.log(formData);
  }

}
