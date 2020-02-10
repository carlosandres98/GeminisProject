import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductI, ProductServiceService } from '../../services/product-service.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public productName: string;
  public product: ProductI;

  constructor(private act: ActivatedRoute, private producService: ProductServiceService, private rt:Router) {
    act.params.subscribe(data => {
      this.productName = data['product'];
    });
  }

  ngOnInit() {
    let productFind: boolean;
    this.product = this.producService.getProductByName(this.productName);
    if (this.product == null) {
      productFind = false;
    } else {
      productFind = true;
    }


  }

  goAddToCar(name: string) {
    this.product = this.producService.getProductByName(name);
    this.producService.addCarList(this.product);
    this.rt.navigate(['car']);
  }

}
