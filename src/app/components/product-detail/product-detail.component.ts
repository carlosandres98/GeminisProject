import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductI, ProductServiceService } from '../../services/product-service.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public productName: string;
  public product: ProductI;

  constructor(private act: ActivatedRoute, private producService: ProductServiceService) {
    act.params.subscribe(data => {
      this.productName = data['product'];
    });
    console.log(this.productName);
  }

  ngOnInit() {
    let productFind: boolean;
    this.product = this.producService.getProductByName(this.productName);
    if (this.product == null) {
      productFind = false;
    } else {
      productFind = true;
      console.log(this.product);
    }


  }

}
