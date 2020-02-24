import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FunctionalitiesService } from '../../services/functionalities.service';
import { ProductI } from '../../services/product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-like-product-form',
  templateUrl: './like-product-form.component.html',
  styleUrls: ['./like-product-form.component.scss']
})
export class LikeProductFormComponent implements OnInit {

  public likeClient: string[];
  public isActiveClothing: boolean;
  public isActiveShoes: boolean;
  public isActiveTechnology: boolean;
  public isActiveHomeAppliance: boolean;
  public isActiveFurniture: boolean;

  public test : string = 'Test';
  public likeProducts: ProductI[];
  constructor(private fun: FunctionalitiesService,private router:Router) { }

  ngOnInit() {
  }

  like() {
    this.likeClient = [];
    if (this.isActiveClothing == true) {
      this.likeClient.push('Ropa');
    }
    if (this.isActiveShoes == true) {
      this.likeClient.push('Zapatos y Tenis');
    }
    if (this.isActiveTechnology == true) {
      this.likeClient.push('Tecnología');
    }
    if (this.isActiveHomeAppliance == true) {
      this.likeClient.push('Electródomestico');
    }
    if (this.isActiveFurniture == true) {
      this.likeClient.push('Muebles');
    }
    this.likeProducts = this.fun.likeProducts(this.likeClient);
    this.router.navigate(['/product-like']); 

  }

  saveData(form: NgForm) {

  }
}
