import { Component, OnInit , Input} from '@angular/core';
import { ProductI, ProductServiceService } from '../../services/product-service.service';

@Component({
  selector: 'app-product-ofert',
  templateUrl: './product-ofert.component.html',
  styleUrls: ['./product-ofert.component.scss']
})
export class ProductOfertComponent implements OnInit {

  @Input() productOfertList: ProductI[] = [];
  public productOfert: ProductI;
  constructor(private productService: ProductServiceService) { 
    
  }

  ngOnInit() {
  }

}
