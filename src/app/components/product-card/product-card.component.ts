import { Component, OnInit, Input } from '@angular/core';
import { ProductI, ProductServiceService } from '../../services/product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  constructor(private rt: Router, private productService: ProductServiceService) { }

  product: ProductI;
  @Input() productList: ProductI[] = [];
  @Input() title: any;

  ngOnInit() {
  }

  goDetailProduct(productName: ProductI) {
    this.rt.navigate(['detail-product', productName])
  };

  goAddToCar(name: string) {
    this.product = this.productService.getProductByName(name);
    this.productService.addCarList(this.product);
    this.rt.navigate(['car']);
  }
}
