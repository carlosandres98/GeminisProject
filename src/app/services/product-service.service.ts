import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }

  public offertWeekProductList: ProductI[] = [
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

  public recommendedProductList: ProductI[] = [
    {
      name: 'Mueble Sofa',
      image: '',
      price: 54000
    },
    {
      name: 'Camisa Polo',
      image: '',
      price: 45000
    },
    {
      name: 'Billetera de Cuero',
      image: '',
      price: 64000
    },
    {
      name: 'Jean Azul',
      image: '',
      price: 98000
    }
  ];


  getoffertWeekProductList = () => this.offertWeekProductList;
  getrecommendedProductList = () => this.recommendedProductList;

}

export interface ProductI {
  image: string;
  name: string;
  price: number
}