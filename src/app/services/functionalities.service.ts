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
  public likeProducts = (like: string[]) => {
    this.productListLike = [];
    for (let i of like) {
      for (let product of this.productList) {
        if (product.category == i) {
          this.productListLike.push(product);
        }
      }
    }
    return this.productListLike;
  }

  public getLikeProductsList = () => this.productListLike;
}
