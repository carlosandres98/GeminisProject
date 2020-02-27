import { Component, OnInit } from '@angular/core';
import { ProductSellerI, ProductSellerService } from '../../services/product-seller.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sale-product',
  templateUrl: './sale-product.component.html',
  styleUrls: ['./sale-product.component.scss']
})
export class SaleProductComponent implements OnInit {

  productSeller: ProductSellerI = {
    productType: '',
    price: 0,
    idSeller: '',
    image: '',
    
    size: [],
    name: '',
    category: '',
    subcategory: '',
    descriptionProduct: '',
    descriptionCar: ''
    
  }



  constructor(private s: ProductSellerService) { }

  ngOnInit() {
  }

  goLogin(formData: NgForm) {
    console.log(formData);
  }

  saveProduct(formData: NgForm) {


    console.log(formData.value);
  }
}
