import { Component, OnInit, Input } from '@angular/core';
import { ProductSellerI } from '../../services/product-seller.service';

@Component({
  selector: 'app-product-seller-card',
  templateUrl: './product-seller-card.component.html',
  styleUrls: ['./product-seller-card.component.scss']
})
export class ProductSellerCardComponent implements OnInit {

  

  @Input() productSellerList: ProductSellerI[] = [];
  productSeller: ProductSellerI;
  @Input() title: string = ''
  constructor() { }

  ngOnInit() {
  }

}
