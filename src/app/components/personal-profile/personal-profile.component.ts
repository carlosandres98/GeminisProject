import { Component, OnInit } from '@angular/core';
import { usersDBI, UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-personal-profile',
  templateUrl: './personal-profile.component.html',
  styleUrls: ['./personal-profile.component.scss']
})
export class PersonalProfileComponent implements OnInit {


  public navbar: any = {
    home: 'Ofertas',
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
      category: 'Electródomesticos',
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



  public userDB: usersDBI;
  constructor(private userService: UserServiceService) {
    this.userDB = this.userService.userDB;
    console.log(this.userDB);
  }

  ngOnInit() {
  }

}
