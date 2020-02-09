import { Component, OnInit, Input } from '@angular/core';
import { ProductI } from '../../services/product-service.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  constructor() { }
  @Input() productList: ProductI[] = [];
  @Input() title: any;

  ngOnInit() {
  }

}
