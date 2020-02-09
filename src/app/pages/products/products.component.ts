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
  public recommendedProductList : ProductI [] = [];

  public offertWeekTitle = 'Ofertas de la semana';
  public recommendedTitle = 'Recomendados';

  constructor(private productService: ProductServiceService) {
    this.productOfertList = productService.getoffertWeekProductList();
    this.recommendedProductList = productService.getrecommendedProductList();
  }

  ngOnInit() {
    
  }

}
