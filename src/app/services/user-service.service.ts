import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  public userDB: usersDBI;

  public usersDB: usersDBI[] = [

    {
      id: '1037659854',
      photo: 'assets/users/camc.jfif',
      accountype: 'Comprador',
      names: 'Carlos Andrés',
      mode: 'Comprador',
      lastnames: 'Montoya Cardona',
      email: 'camc@inso.com',
      password: '123',
      confirmpass: '123'
    },
    {
      id: '1037659854',
      photo: '',
      accountype: 'Comprador Y Vendedor',
      names: 'Mateo',
      mode: 'Comprador',
      lastnames: 'Orozco Lotero',
      email: 'mol@inso.com',
      password: '123',
      confirmpass: '123'
    },
    {
      id: '1037659854',
      photo: '',
      accountype: 'Comprador Y Vendedor',
      names: 'Santiago',
      mode: 'Vendedor',
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
        this.userDB = userDB;
        userDB = null;
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