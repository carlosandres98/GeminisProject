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

    descriptionCar: '',
    brand: '',
    model: '',
    typeCar: '',
    placa: '',
    yearCar: 0,

    area: '',
    stratum: 0,
    sector: '',
    antiquity: '',
    rooms: 0,
    bathrooms: 0,
    parking: ''
  }



  constructor(private s: ProductSellerService) { }

  ngOnInit() {
  }

  goLogin(formData: NgForm) {
    console.log(formData);
  }

  saveProduct(formDataP: NgForm) {

    let cad : string = "-";

    this.productSeller = {
      productType: 'Product',
      price: formDataP.value.txtPrice,
      idSeller: '',
      image: formDataP.value.txtFile,
      size: [],
      name: formDataP.value.txtName,
      category: formDataP.value.txtCategory,
      subcategory: formDataP.value.txtSubCategory,
      descriptionProduct: formDataP.value.txtDescription

      
    }
    cad+=this.productSeller.productType+"/";
    cad+=this.productSeller.price+"/";
    cad+=this.productSeller.name+"/";
    cad+=this.productSeller.category+"/";
    cad+=this.productSeller.subcategory+"/";
    cad+=this.productSeller.descriptionProduct+"/";
    alert(this.productSeller.price);
  }
}
