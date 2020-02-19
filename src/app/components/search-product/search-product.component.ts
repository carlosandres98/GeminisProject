import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductI, ProductServiceService } from '../../services/product-service.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.scss']
})
export class SearchProductComponent implements OnInit {

  public productFind: boolean = false;
  public product: ProductI;
  public productList: ProductI[];
  public productName: string;
  constructor(private act: ActivatedRoute, private productService: ProductServiceService, private rt: Router) {
    act.params.subscribe(data => {
      this.productName = data['productName'];
      this.productList = this.productService.sharedProducts(this.productName);


      if (this.productList.length > 0) {
        this.productFind = true;
      } else {
        this.productFind = false;
      }
    })
  }

  ngOnInit() {
  }

  goAddToCar(name: string) {
    this.product = this.productService.getProductByName(name);
    this.productService.addCarList(this.product);
    this.rt.navigate(['/car']);
  }
}
