import { Component, OnInit } from '@angular/core';
import { ProductSellerI, ProductSellerService } from '../../services/product-seller.service';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.scss']
})
export class MyProductsComponent implements OnInit {

  productAddedRecently : string = 'Productos añadidos recientemente';
  myProductList : ProductSellerI [] = [];
  constructor(private service:ProductSellerService) {
    this.myProductList = service.getAllProductSeller();
   }

  ngOnInit() {
  }

}
