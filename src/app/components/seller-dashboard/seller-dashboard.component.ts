import { Component, OnInit } from '@angular/core';
import { ProductI } from '../../services/product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.component.html',
  styleUrls: ['./seller-dashboard.component.scss']
})
export class SellerDashboardComponent implements OnInit {

  constructor(private rt: Router) { }

  options: any[] = [
    {
      img: 'assets/img/products/electrodomesticos01.png',
      text: 'Vende Productos',
      sales: '1 K',
      followers: '520',
      c1: {
        txt1: 'Sales: ',
        txt2: 'Follower: '
      }
    },
    {
      img: 'assets/img/products/electrodomesticos01.png',
      text: 'Tus Productos',
      sales: '2 k',
      followers: '720',
      c1: {
        txt1: 'Products: ',
        txt2: 'Like: '
      }
    },
    {
      img: 'assets/img/products/electrodomesticos01.png',
      text: 'Editar Productos',
      sales: '550',
      followers: '770',
      c1: {
        txt1: 'Deleted: ',
        txt2: 'Available: '
      }
    },
    {
      img: 'assets/img/products/electrodomesticos01.png',
      text: 'Tus Compras',
      sales: '1 k',
      followers: '52',
      c1: {
        txt1: 'Compras: ',
        txt2: 'Ofertas: '
      }
    }

  ];

  goNavigate(idx: number) {

    switch (idx) {
      case 0:
        this.rt.navigate(['/sale-product']);
        break;
      case 1:

        break;
      case 2:

        break;
      case 3:

        break;
    }
  }
  ngOnInit() {
  }

}
