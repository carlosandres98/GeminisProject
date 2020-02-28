import { Component, OnInit } from '@angular/core';
import { ProductSellerI, ProductSellerService } from '../../services/product-seller.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sale-product',
  templateUrl: './sale-product.component.html',
  styleUrls: ['./sale-product.component.scss']
})
export class SaleProductComponent implements OnInit {

  login: boolean = false;
  productList: ProductSellerI[] = [];


  productSellerProduct: ProductSellerI = {
    productType: '',

    idSeller: '',

    size: [],
    name: '',
    category: '',
    subcategory: '',
    descriptionProduct: '',
    priceP: 0,
    imageP: '',

    descriptionCar: '',
    brand: '',
    model: '',
    typeCar: '',
    placa: '',
    yearCar: 0,
    priceC: 0,
    imageC: '',

    area: '',
    stratum: 0,
    sector: '',
    antiquity: '',
    rooms: 0,
    bathrooms: 0,
    parking: '',

    priceI: 0,
    imageI: ''
  }

  productSeller: ProductSellerI = {
    productType: '',

    idSeller: '',

    size: [],
    name: '',
    category: '',
    subcategory: '',
    descriptionProduct: '',
    priceP: 0,
    imageP: '',

    descriptionCar: '',
    brand: '',
    model: '',
    typeCar: '',
    placa: '',
    yearCar: 0,
    priceC: 0,
    imageC: '',

    area: '',
    stratum: 0,
    sector: '',
    antiquity: '',
    rooms: 0,
    bathrooms: 0,
    parking: '',

    priceI: 0,
    imageI: ''
  }



  constructor(private service: ProductSellerService) {

  }

  ngOnInit() {
  }

  saveDataV(formDataV: NgForm) {

    this.productSeller = {
      productType: 'Vehículo',

      idSeller: '1037',

      size: [],
      name: '',
      category: '',
      subcategory: '',
      descriptionProduct: '',
      priceP: 0,
      imageP: '',

      descriptionCar: formDataV.value,
      brand: formDataV.value.txtBrand,
      model: formDataV.value.txtModel,
      typeCar: formDataV.value.txtType,
      placa: formDataV.value.txtPlaca,
      imageC: '',
      priceC: formDataV.value.txtPrice,
      yearCar: formDataV.value.txtYear,



      area: '',
      stratum: 0,
      sector: '',
      antiquity: '',
      rooms: 0,
      bathrooms: 0,
      imageI: '',
      priceI: 0,
      parking: ''

    }

    this.service.addProduct(this.productSeller);

  }

  saveDataIn(formDataIn: NgForm) {

    this.productSeller = {
      productType: 'Inmuebles',

      idSeller: '1037',

      size: [],
      name: '',
      category: '',
      subcategory: '',
      descriptionProduct: '',
      priceP: 0,
      imageP: '',

      descriptionCar: '',
      brand: '',
      model: '',
      typeCar: '',
      placa: '',
      yearCar: 0,
      priceC: 0,
      imageC: '',

      area: formDataIn.value.txtArea,
      stratum: formDataIn.value.txtStratum,
      sector: formDataIn.value.txtSector,
      antiquity: formDataIn.value.txtAntiquity,
      rooms: formDataIn.value.txtRooms,
      bathrooms: formDataIn.value.txtBathrooms,
      priceI: formDataIn.value.txtPrice,
      imageI: 'assets/img/products/headphones.png',
      parking: formDataIn.value.txtParking,


    }

    this.service.addProduct(this.productSeller);

  }

  saveProduct(formDataP: NgForm) {
    this.productSellerProduct = {
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
      priceC: 0,
      imageC: '',

      area: '',
      stratum: 0,
      sector: '',
      antiquity: '',
      rooms: 0,
      bathrooms: 0,
      parking: '',
      priceI: 0,
      imageI: ''
    }

    this.service.addProduct(this.productSellerProduct);
  }


  goProfile() {

  }

  goHelpCenter() {

  }
}


