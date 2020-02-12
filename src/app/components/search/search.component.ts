import { Component, OnInit } from '@angular/core';
import { ProductI } from 'src/app/services/product-service.service';
import { ProductServiceService } from '../../services/product-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public product: ProductI[];
  public productByCategory: ProductI[];
  public productByCategorySub: ProductI[];
  public title: string ;
  constructor(private productService: ProductServiceService, private act: ActivatedRoute) {

    this.act.params.subscribe(par => {
      productService.getProductByCategory(par['category']);
      productService.getProductByCategorySub(par['category'],par['subCategory']);
      this.title = `Categoria: ${par['category']} > ${par['subCategory']}`
      this.productByCategory = productService.getProductByCategoryList();
      this.productByCategorySub = productService.getProductByCategorySubList();
      console.log(this.productByCategorySub);
    })
  }

  ngOnInit() {
    
  }

}
