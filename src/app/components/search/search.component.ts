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

  public productByCategory: ProductI[];
  public title: string = 'Categorias:'
  constructor(private productService:ProductServiceService, private act:ActivatedRoute) { 
    this.productByCategory = productService.getoffertWeekProductList();
    this.act.params.subscribe (par=>{
      console.log(par['category']);
      console.log(par['subCategory']);
      
    })
  }

  ngOnInit() {
  }

}
