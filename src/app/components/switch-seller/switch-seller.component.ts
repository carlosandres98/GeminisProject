import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-switch-seller',
  templateUrl: './switch-seller.component.html',
  styleUrls: ['./switch-seller.component.scss']
})
export class SwitchSellerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goSeller() {
    this.router.navigate(['/dashboard']);
  }
  goBuyer() {
    this.router.navigate(['/dashboard']);
  }
}
