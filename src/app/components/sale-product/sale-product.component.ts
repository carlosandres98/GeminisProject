import { Component, OnInit } from '@angular/core';
import { ProductSellerI, ProductSellerService } from '../../services/product-seller.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sale-product',
  templateUrl: './sale-product.component.html',
  styleUrls: ['./sale-product.component.scss']
})
export class SaleProductComponent implements OnInit {

  productList: ProductSellerI[] = [];

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



  constructor(private service: ProductSellerService) {
    this.productList = service.getAllProductSeller();
  }

  ngOnInit() {
  }

  goLogin(formData: NgForm) {
    console.log(formData);
  }

  saveDataV(formDataV: NgForm) {

  }

  saveDataIn(formDataIn: NgForm) {

    this.productSeller = {
      productType: 'Inmuebles',
      price: formDataIn.value.txtPrice,
      idSeller: '1037',
      image: 'assets/img/products/headphones.png',
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

      area: formDataIn.value.txtArea,
      stratum: formDataIn.value.txtStratum,
      sector: formDataIn.value.txtSector,
      antiquity: formDataIn.value.txtAntiquity,
      rooms: formDataIn.value.txtRooms,
      bathrooms: formDataIn.value.txtBathrooms,
      parking: formDataIn.value.txtParking
    }

    this.service.addProduct(this.productSeller);

  }

  saveProduct(formDataP: NgForm) {
    this.productSeller = {
      productType: 'Producto',
      priceP: formDataP.value.txtPrice,
      idSeller: '1037',
      imageP: 'assets/img/products/headphones.png',
      size: [],
      name: formDataP.value.txtName,
      category: formDataP.value.txtCategory,
      subcategory: formDataP.value.txtSubCategory,
      descriptionProduct: formDataP.value.txtDescription,

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

    this.service.addProduct(this.productSeller);

    if (this.productList.length > 2) {
      this.see();
    } else {

    }
  }

  see() {
    console.log(this.productList);
  }

  goProfile() {

  }

  goHelpCenter() {

  }
}


