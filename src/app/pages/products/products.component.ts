import { Component, OnInit } from '@angular/core';
import { ProductServiceService, ProductI } from '../../services/product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public productOfertList: ProductI[] = [];
  public productOfert: ProductI;

  constructor(private productService: ProductServiceService) {
    this.productOfertList = productService.getProductList();
  }

  ngOnInit() {
    
  }

}
