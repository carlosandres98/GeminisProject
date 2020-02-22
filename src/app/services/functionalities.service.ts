import { Injectable } from '@angular/core';
import { ProductI, ProductServiceService } from './product-service.service';

@Injectable({
  providedIn: 'root'
})
export class FunctionalitiesService {

  public likeCategories: string[];
  public productList: ProductI[] = [];
  public productListLike: ProductI[];

  constructor(private producService: ProductServiceService) {
    this.productList = producService.getAllProducts();

  }
  go(like: string[]) {
    this.likeCategories = like;
    
    console.log(this.likeProducts());
  }


  public likeProducts = () => {
    this.productList = [];
    for (let i of this.likeCategories) {
      for (let product of this.productList){
        if (product.category==i){
          this.productListLike.push(product);
        }
      }
    }
    return this.productListLike;
  }
}
