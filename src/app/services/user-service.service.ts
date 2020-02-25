import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  public userDB: usersDBI;

  public usersDB: usersDBI[] = [

    {
      id: '1037659854',
      photo: 'assets/img/users/camc.jpg',
      accountype: 'Comprador Y Vendedor',
      names: 'Carlos Andrés',
      mode: 'Vendedor',
      lastnames: 'Montoya Cardona',
      email: 'camc@inso.com',
      password: '123',
      confirmpass: '123'
    },
    {
      id: '1037659854',
      photo: 'assets/img/users/teo.jpg',
      accountype: 'Comprador y Vendedor',
      names: 'Mateo',
      mode: 'Comprador',
      lastnames: 'Orozco Lotero',
      email: 'mol@inso.com',
      password: '123',
      confirmpass: '123'
    },
    {
      id: '1037659854',
      photo: 'assets/img/users/sah.jpg',
      accountype: '',
      names: 'Santiago',
      mode: 'Comprador',
      lastnames: 'Agudelo Hernándes',
      email: 'sah@inso.com',
      password: '123',
      confirmpass: '123'
    }
  ];

  getUsersList = () => this.usersDB;



  login = (email: string, password: string) => {
    let userDB: usersDBI;
    for (let user of this.usersDB) {

      if (user.email == email && user.password == password) {
        userDB = user;
        this.userDB = userDB;
        break;
      } else {
        userDB = null;
        this.userDB = userDB;
      }
    }
    return userDB;
  }

  constructor() {
    this.usersDB = this.getUsersList();
  }
}
export interface usersDBI {
  id: string;
  photo: string;
  accountype: string;
  names: string;
  mode: string;
  lastnames: string;
  email: string;
  password: string;
  confirmpass: string;
};