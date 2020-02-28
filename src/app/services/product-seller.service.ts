import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductSellerService {

  productSeller: ProductSellerI;

  productSellerList: ProductSellerI[] = [];

  constructor() { }

  addProduct(product: ProductSellerI) {
    this.productSellerList.push(product);
    console.log(product);
  }



  getAllProductSeller = () => this.productSellerList;


}





export interface ProductSellerI {
  size?: string[];
  name?: string;
  category?: string;
  subcategory?: string;
  descriptionProduct?: string;
  
  descriptionCar?: string;
  brand?: string;
  model?: string;
  typeCar?: string;
  placa?: string;
  yearCar?: number;

  area?: string;
  stratum?: number;
  sector?: string;
  antiquity?: string;
  rooms?: number;
  bathrooms?: number;
  parking?: string;

  productType: string;
  price: number;
  image: string;

  idSeller: string;
};