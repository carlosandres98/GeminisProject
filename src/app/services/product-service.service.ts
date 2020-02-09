import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }

  public offertWeekProductList: ProductI[] = [
    {
      name: 'Saco de invierno',
      image: 'assets/img/smoking.jpg',
      price: 150000
    },
    {
      name: 'Maleta KANKEN',
      image: 'assets/img/smoking.jpg',
      price: 85000
    },
    {
      name: 'Smart Watch Negro',
      image: 'assets/img/smoking.jpg',
      price: 750000
    },
    {
      name: 'Audifonos BOSE XD-456',
      image: 'assets/img/smoking.jpg',
      price: 1567000
    }
  ];

  public recommendedProductList: ProductI[] = [
    {
      name: 'Mueble Sofa',
      image: 'assets/img/smoking.jpg',
      price: 54000
    },
    {
      name: 'Camisa Polo',
      image: 'assets/img/smoking.jpg',
      price: 45000
    },
    {
      name: 'Billetera de Cuero',
      image: 'assets/img/smoking.jpg',
      price: 64000
    },
    {
      name: 'Jean Azul',
      image: 'assets/img/smoking.jpg',
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