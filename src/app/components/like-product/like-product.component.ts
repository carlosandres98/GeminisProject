import { Component, OnInit } from '@angular/core';
import { ProductI } from '../../services/product-service.service';
import { ActivatedRoute } from '@angular/router';
import { FunctionalitiesService } from '../../services/functionalities.service';

@Component({
  selector: 'app-like-product',
  templateUrl: './like-product.component.html',
  styleUrls: ['./like-product.component.scss']
})
export class LikeProductComponent implements OnInit {

  public offertTitle: string = 'Ofertas para tí';
  public likeProducts: ProductI[];
  constructor(private funct:FunctionalitiesService) {
    this.likeProducts = this.funct.getLikeProductsList();
  }

  ngOnInit() {
  }

}
