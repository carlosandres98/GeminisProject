import { Component, OnInit } from '@angular/core';
import { usersDBI, UserServiceService } from '../../services/user-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-seller-form',
  templateUrl: './seller-form.component.html',
  styleUrls: ['./seller-form.component.scss']
})
export class SellerFormComponent implements OnInit {

  user: usersDBI;

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
  constructor(private userSerice: UserServiceService) {

  }

  ngOnInit() {
  }

  goRegister(formData: NgForm) {
    this.userDB = this.userSerice.getUserByEmail(this.userDB.email);
    this.user = {
      city: formData.value.txtCity,
      country: formData.value.txtCountry,
      address: formData.value.txtAddress,
      services: formData.value.txtServices,
      phone : formData.value.txtPhone,
      id: formData.value.txtId,
      photo: this.userDB.photo,
      accountype: this.userDB.accountype,
      names: this.userDB.names,
      mode: this.userDB.mode,
      lastnames: this.userDB.lastnames,
      email: this.userDB.email,
      password: this.userDB.password,
      confirmpass: this.userDB.confirmpass
    }
    console.log(this.user);

  }

}
