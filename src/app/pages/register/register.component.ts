import { Component, OnInit } from '@angular/core';
import { ProductServiceService, ProductI } from '../../services/product-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {



  constructor(private productService: ProductServiceService) {

  }

  ngOnInit() {

  }

}
