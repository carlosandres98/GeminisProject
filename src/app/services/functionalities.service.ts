import { Injectable } from '@angular/core';
import { ProductI, ProductServiceService } from './product-service.service';

@Injectable({
  providedIn: 'root'
})
export class FunctionalitiesService {

  public likeCategories: string[];
  public producList: ProductI[];

  constructor(private producService: ProductServiceService) {
    this.producList = producService.getAllProducts();

  }
  go(a: string[]) {
    this.likeCategories = a;
    console.log(this.likeCategories);
  }
}
