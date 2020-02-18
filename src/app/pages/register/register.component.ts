import { Component, OnInit } from '@angular/core';
import { ProductServiceService, ProductI } from '../../services/product-service.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  public userDB : userI = {
    names : '',
    lastnames : '',
    mail : '',
    password : '',
    confirmpass : ''
  }

  constructor(private productService: ProductServiceService,private router:Router) {

  }

  ngOnInit() {

  }

  goRegister(formData:NgForm){
    console.log(this.userDB);
    this.router.navigate(['/validate-email']);
  }

}

export interface userI {
  names : string;
  lastnames : string;
  mail : string;
  password : string;
  confirmpass : string;
}