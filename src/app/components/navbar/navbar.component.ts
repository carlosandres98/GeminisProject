import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from '../../services/product-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private productService: ProductServiceService) { }

  @Input() Category: any;
  @Input() subCategory: any;


  public navbar: any = {
    home: 'Home',
    ropa: {
      category: 'Ropa',
      hombre: 'Hombre',
      mujer: 'Mujer',
      ninos: 'Niños'
    },
    zapatosTenis: {
      category: 'Zapatos y Tenis',
      hombre: 'Hombre',
      mujer: 'Mujer',
      ninos: 'Niños'
    },
    tecnologia: {
      category: 'Tecnología',
      consola: 'Consolas',
      gamesConsoles: 'Juegos para consolas',
      phones: 'Celulares'
    },
    electrodomesticos: {
      category: 'Electródomestico',
      tv: 'Televisores',
      lavadora: 'Lavadoras',
      secadora: 'Secadoras',
      nevera: 'Neveras',
      equipoSonido: 'Equipos de sonido'
    },
    muebles: {
      category: 'Muebles',
      sofa: 'Sofas',
      gameSalas: 'Juegos de salas',
      comedor: 'Comedores',
      silla: 'sillas',
      escritorio: 'Escritorios'
    },
    help: '¿Necesitas ayuda?'
  }



  ngOnInit() {
  }

  searchProduct(productName: string) {
    productName = this.productService.fillPipeProduct(productName);
    console.log(productName);
    this.router.navigate(['/login'])
  }

  goLogin() {
    this.router.navigate(['/login']);
  }

  goRegister() {
    this.router.navigate(['/register']);
  }

  goProfile() {
    this.router.navigate(['/personal-profile']);
  }

  goCart() {
    this.router.navigate(['/car']);

  }

  goHelpCenter() {
    this.router.navigate(['/helpcenter']);
  }

}
