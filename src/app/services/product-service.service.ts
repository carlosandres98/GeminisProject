import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {


  public productList: ProductI[] = [
    {
      name: 'Saco de invierno',
      image: 'assets/img/products/jacket.png',
      price: 150000,
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when',
      category: 'Ropa',
      subcategory: 'Niños'
    },
    {
      name: 'Maleta KANKEN',
      image: 'assets/img/products/backpack.png',
      price: 85000,
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when',
      category: 'Ropa',
      subcategory: 'Mujer'
    },
    {
      name: 'Smart Watch Negro',
      image: 'assets/img/products/smartwatch.png',
      price: 750000,
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when',
      category: 'Ropa',
      subcategory: 'Mujer'
    },
    {
      name: 'Audifonos BOSE XD-456',
      image: 'assets/img/products/headphones.png',
      price: 1567000,
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when',
      category: '',
      subcategory: ''
    },
    {
      name: 'Mueble Sofa',
      image: 'assets/img/products/sofa.png',
      price: 54000,
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when',
      category: 'Ropa',
      subcategory: 'Hombre',
    },
    {
      name: 'Camisa Polo',
      image: 'assets/img/products/shirt.png',
      price: 45000,
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when',
      category: 'Ropa',
      subcategory: 'Niños'
    },
    {
      name: 'Billetera de Cuero',
      image: 'assets/img/products/wallet.png',
      price: 64000,
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when',
      category: 'Tecnología',
      subcategory: 'Consolas'
    },
    {
      name: 'Jean Azul',
      image: 'assets/img/products/pants.png',
      price: 98000,
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when',
      category: 'Tecnología',
      subcategory: 'Consolas'
    }

  ];

  public productListByCategory: ProductI[] = [];
  public productListByCategorySub: ProductI[] = [];


  public offertWeekProductList: ProductI[] = [

  ];
  public recommendedProductList: ProductI[] = [

  ];

  public carList: ProductI[] = [];



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

  addCarList(product: ProductI) {
    this.carList.push(product);
  }
  getCarList = () => this.carList;
  getoffertWeekProductList = () => this.offertWeekProductList;
  getrecommendedProductList = () => this.recommendedProductList;
  getProductByCategoryList = () => this.productListByCategory;
  getProductByCategorySubList = () => this.productListByCategory;

  getProductByCategory = (category: string) => {
    let productFind: ProductI;
    for (let product of this.productList) {

      if (product.category == category) {
        productFind = product;
        this.productListByCategory.push(productFind);

      } else {

      }
    }
    return productFind;
  };

  getProductByCategorySub = (category: string, subCategory: string) => {
    let productFind: ProductI;
    for (let product of this.productList) {
      if (product.name == category && product.subcategory == subCategory) {
        productFind = product;
        this.productListByCategorySub.push(productFind);
        
      } else {
        
      }
    }
    return productFind;
  };

  getProductByName = (productName: string) => {
    let productFind: ProductI;
    for (let product of this.productList) {
      if (product.name == productName) {
        productFind = product;
        break;
      } else {
        productFind = null;
      }
    }
    return productFind;
  };

}

export interface ProductI {
  image: string;
  name: string;
  price: number;
  description: string;
  category: string;
  subcategory: string;
}