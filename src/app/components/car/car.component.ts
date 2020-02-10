import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService, ProductI } from '../../services/product-service.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  
  public countProducts : number;
  public countValue : number;
  public CarList : ProductI [] = null;
  constructor(private act:ActivatedRoute, private productService:ProductServiceService) { 
    this.CarList = productService.getCarList();
    
  }

  ngOnInit() {
    if(this.CarList.length==0){

    }else{
      this.countProducts = this.CarList.length;
    }
  }

}
