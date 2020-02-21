import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-like-product-form',
  templateUrl: './like-product-form.component.html',
  styleUrls: ['./like-product-form.component.scss']
})
export class LikeProductFormComponent implements OnInit {

  public isActive : boolean;
  constructor() { }

  ngOnInit() {
  }


  saveData(form:NgForm){

  }
}
