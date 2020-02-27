import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductSellerService {

  constructor() { }
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

  productType : string;
  price: number;
  image: string;

  idSeller : string;
};