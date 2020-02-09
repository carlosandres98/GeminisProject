import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {


  public productList: ProductI[] = [
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
    },
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

  public offertWeekProductList: ProductI[] = [

  ];
  public recommendedProductList: ProductI[] = [

  ];
  constructor() {
    this.offertWeekProductList.push(this.productList[0]);
    this.offertWeekProductList.push(this.productList[1]);
    this.offertWeekProductList.push(this.productList[2]);
    this.offertWeekProductList.push(this.productList[3]);
    this.recommendedProductList.push(this.productList[4]);
    this.recommendedProductList.push(this.productList[5]);
    this.recommendedProductList.push(this.productList[6]);
    this.recommendedProductList.push(this.productList[7]);
  }

  getoffertWeekProductList = () => this.offertWeekProductList;
  getrecommendedProductList = () => this.recommendedProductList;

  getProductByName = (productName: string) => {
    let productFind: ProductI;
    for (let product of this.productList) {
      if (product.name == productName) {
        productFind = product;
        break;
      }else{
        productFind = null;
      }
    }
    return productFind;
  };

}

export interface ProductI {
  image: string;
  name: string;
  price: number
}