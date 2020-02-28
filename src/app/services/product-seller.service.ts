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
  }



  getAllProductSeller = () => this.productSellerList;


}

export interface ProductSellerI {
  size?: string[];
  name?: string;
  category?: string;
  subcategory?: string;
  descriptionProduct?: string;
  imageP?: string;
  priceP?: number;

  descriptionCar?: string;
  brand?: string;
  model?: string;
  typeCar?: string;
  placa?: string;
  yearCar?: number;
  imageC?: string;
  priceC?: number;

  area?: string;
  stratum?: number;
  sector?: string;
  antiquity?: string;
  rooms?: number;
  bathrooms?: number;
  parking?: string;
  imageI?: string;
  priceI?: number;

  productType: string;
  idSeller: string;
};