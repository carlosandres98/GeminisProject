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
      subcategory: 'Hombre'
    },
    {
      name: 'Maleta KANKEN',
      image: 'assets/img/products/backpack.png',
      price: 85000,
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when',
      category: 'Ropa',
      subcategory: ''
    },
    {
      name: 'Smart Watch Negro',
      image: 'assets/img/products/smartwatch.png',
      price: 750000,
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when',
      category: 'Tecnología',
      subcategory: ''
    },
    {
      name: 'Audifonos BOSE XD-456',
      image: 'assets/img/products/Bitmap-3.png',
      price: 1567000,
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when',
      category: 'Tecnología',
      subcategory: ''
    },
    {
      name: 'Mueble Sofa',
      image: 'assets/img/products/sofa.png',
      price: 54000,
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when',
      category: 'Muebles',
      subcategory: 'Sofas',
    },
    {
      name: 'Camisa Polo',
      image: 'assets/img/products/shirt.png',
      price: 45000,
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when',
      category: 'Ropa',
      subcategory: 'Hombre'
    },
    {
      name: 'Billetera de Cuero',
      image: 'assets/img/products/wallet.png',
      price: 64000,
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when',
      category: 'Ropa',
      subcategory: ''
    },
    {
      name: 'Jean Azul',
      image: 'assets/img/products/pants.png',
      price: 98000,
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when',
      category: 'Ropa',
      subcategory: 'Mujer'
    },
    {
      name: 'Jean Azul',
      image: 'assets/img/products/electrodomesticos01.png',
      price: 98000,
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when',
      category: 'Electródomestico',
      subcategory: 'Equipos de sonido'
    },
    {
      name: 'Jean Azul',
      image: 'assets/img/products/electrodomesticos02.png',
      price: 98000,
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when',
      category: 'Electródomestico',
      subcategory: 'Equipos de sonido'
    },
    {
      name: 'Jean Azul',
      image: 'assets/img/products/electrodomesticos04.png',
      price: 98000,
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when',
      category: 'Electródomestico',
      subcategory: 'Neveras'
    },
    {
      name: 'Jean Azul',
      image: 'assets/img/products/electrodomesticos05.png',
      price: 98000,
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when',
      category: 'Electródomestico',
      subcategory: 'Lavadoras'
    },
    {
      name: 'Jean Azul',
      image: 'assets/img/products/electrodomesticos08.png',
      price: 98000,
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when',
      category: 'Electródomestico',
      subcategory: 'Televisores'
    },
    {
      name: 'Jean Azul',
      image: 'assets/img/products/muebles02.png',
      price: 98000,
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when',
      category: 'Muebles',
      subcategory: 'Escritorios'
    },
    {
      name: 'Jean Azul',
      image: 'assets/img/products/muebles03.png',
      price: 98000,
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when',
      category: 'Muebles',
      subcategory: 'Escritorios'
    },
    {
      name: 'Jean Azul',
      image: 'assets/img/products/muebles04.png',
      price: 98000,
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when',
      category: 'Muebles',
      subcategory: 'sillas'
    },
    {
      name: 'Jean Azul',
      image: 'assets/img/products/muebles06.png',
      price: 98000,
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when',
      category: 'Muebles',
      subcategory: 'sillas'
    },
    {
      name: 'Jean Azul',
      image: 'assets/img/products/muebles07.png',
      price: 98000,
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when',
      category: 'Muebles',
      subcategory: 'Comedores'
    },
    {
      name: 'Jean Azul',
      image: 'assets/img/products/muebles08.png',
      price: 98000,
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when',
      category: 'Muebles',
      subcategory: 'Comedores'
    },
    {
      name: 'Jean Azul',
      image: 'assets/img/products/muebles09.png',
      price: 98000,
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when',
      category: 'Muebles',
      subcategory: 'Comedores'
    },
    {
      name: 'Jean Azul',
      image: 'assets/img/products/muebles10.png',
      price: 98000,
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when',
      category: 'Muebles',
      subcategory: 'Juegos de salas'
    },
    {
      name: 'Jean Azul',
      image: 'assets/img/products/muebles11.png',
      price: 98000,
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when',
      category: 'Muebles',
      subcategory: 'Juegos de salas'
    },
    {
      name: 'Jean Azul',
      image: 'assets/img/products/muebles12.png',
      price: 98000,
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when',
      category: 'Muebles',
      subcategory: 'Juegos de salas'
    },
    {
      name: 'Jean Azul',
      image: 'assets/img/products/muebles14.png',
      price: 98000,
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when',
      category: 'Muebles',
      subcategory: 'Sofas'
    },
    {
      name: 'Jean Azul',
      image: 'assets/img/products/muebles15.png',
      price: 98000,
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when',
      category: 'Muebles',
      subcategory: 'Sofas'
    },
    {
      name: 'Jean Azul',
      image: 'assets/img/products/ropa02.png',
      price: 98000,
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when',
      category: 'Ropa',
      subcategory: 'Niños'
    },
    {
      name: 'Jean Azul',
      image: 'assets/img/products/ropa03.png',
      price: 98000,
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when',
      category: 'Ropa',
      subcategory: 'Hombre'
    },
    {
      name: 'Jean Azul',
      image: 'assets/img/products/ropa04.png',
      price: 98000,
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when',
      category: 'Ropa',
      subcategory: 'Mujer'
    },
    {
      name: 'Jean Azul',
      image: 'assets/img/products/ropa05.png',
      price: 98000,
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when',
      category: 'Ropa',
      subcategory: 'Mujer'
    },
    {
      name: 'Jean Azul',
      image: 'assets/img/products/tecnologia01.png',
      price: 98000,
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when',
      category: 'Tecnología',
      subcategory: 'Consolas'
    },
    {
      name: 'Jean Azul',
      image: 'assets/img/products/tecnologia02.png',
      price: 98000,
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when',
      category: 'Tecnología',
      subcategory: 'Consolas'
    },
    {
      name: 'Jean Azul',
      image: 'assets/img/products/tecnologia03.png',
      price: 98000,
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when',
      category: 'Tecnología',
      subcategory: 'Consolas'
    },
    {
      name: 'Jean Azul',
      image: 'assets/img/products/tecnologia04.png',
      price: 98000,
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when',
      category: 'Tecnología',
      subcategory: 'Juegos para consolas'
    },
    {
      name: 'Jean Azul',
      image: 'assets/img/products/tecnologia05.png',
      price: 98000,
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when',
      category: 'Tecnología',
      subcategory: 'Juegos para consolas'
    },
    {
      name: 'Jean Azul',
      image: 'assets/img/products/tecnologia06.png',
      price: 98000,
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when',
      category: 'Tecnología',
      subcategory: 'Juegos para consolas'
    },
    {
      name: 'Jean Azul',
      image: 'assets/img/products/tecnologia07.png',
      price: 98000,
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when',
      category: 'Tecnología',
      subcategory: 'Celulares'
    },
    {
      name: 'Jean Azul',
      image: 'assets/img/products/tecnologia08.png',
      price: 98000,
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when',
      category: 'Tecnología',
      subcategory: 'Celulares'
    },
    {
      name: 'Jean Azul',
      image: 'assets/img/products/tecnologia09.png',
      price: 98000,
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when',
      category: 'Tecnología',
      subcategory: 'Celulares'
    },
    {
      name: 'Jean Azul',
      image: 'assets/img/products/zapato01.png',
      price: 98000,
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when',
      category: 'Zapatos y Tenis',
      subcategory: 'Niños'
    },
    {
      name: 'Jean Azul',
      image: 'assets/img/products/zapato02.png',
      price: 98000,
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when',
      category: 'Zapatos y Tenis',
      subcategory: 'Niños'
    },
    {
      name: 'Jean Azul',
      image: 'assets/img/products/zapato03.png',
      price: 98000,
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when',
      category: 'Zapatos y Tenis',
      subcategory: 'Hombre'
    },
    {
      name: 'Jean Azul',
      image: 'assets/img/products/zapato04.png',
      price: 98000,
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when',
      category: 'Zapatos y Tenis',
      subcategory: 'Mujer'
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
    this.productListByCategory = [];
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