import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }

  public productList: ProductI[] = [
    {
      name: 'Saco de invierno',
      image: '',
      price: 150000
    },
    {
      name: 'Maleta KANKEN',
      image: '',
      price: 85000
    },
    {
      name: 'Smart Watch Negro',
      image: '',
      price: 750000
    },
    {
      name: 'Audifonos BOSE XD-456',
      image: '',
      price: 1567000
    }
  ];

  getProductList = () => this.productList;

}

export interface ProductI {
  image: string;
  name: string;
  price: number
}