import { Component, OnInit, Input } from '@angular/core';
import { ProductI } from '../../services/product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  constructor(private rt: Router) { }
  @Input() productList: ProductI[] = [];
  @Input() title: any;

  ngOnInit() {
  }

  goDetailProduct(productName: ProductI) {
    this.rt.navigate(['detail-product', productName])
  };
}
