import { Component, OnInit } from '@angular/core';
import { ProductI } from '../../services/product-service.service';

@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.component.html',
  styleUrls: ['./seller-dashboard.component.scss']
})
export class SellerDashboardComponent implements OnInit {

  constructor() { }

  options : any [] = [
    {
      img : 'assets/img/products/electrodomesticos01.png',
      text : 'Vende Productos',
      sales : '1 K',
      followers : '520',
      c1 : {
        txt1 : 'Ventas: ',
        txt2 : 'Seguidores: '
      }
    },
    {
      img : 'assets/img/products/electrodomesticos01.png',
      text : 'Tus Productos',
      sales : '2 k',
      followers : '720',
      c1 : {
        txt1 : 'Productos: ',
        txt2 : 'Gustados: '
      }
    },
    {
      img : 'assets/img/products/electrodomesticos01.png',
      text : 'Editar Productos',
      sales : '2 k',
      followers : '720',
      c1 : {
        txt1 : 'Eliminados: ',
        txt2 : 'No vendidos: '
      }
    },
    {
      img : 'assets/img/products/electrodomesticos01.png',
      text : 'Tus Compras',
      sales : '2 k',
      followers : '720',
      c1 : {
        txt1 : 'Compras: ',
        txt2 : 'Ofertas: '
      }
    }

  ];

  

  ngOnInit() {
  }

}
