import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {


  public usersDB: usersDBI[] = [

    {
      id: '1037659854',
      photo: '',
      accountype: '',
      names: 'Carlos Andrés',
      mode: '',
      lastnames: 'Montoya Cardona',
      email: 'camc@inso.com',
      password: '123',
      confirmpass: '123'
    },
    {
      id: '1037659854',
      photo: '',
      accountype: '',
      names: 'Carlos Andrés',
      mode: '',
      lastnames: 'Orozco Lotero',
      email: 'mol@inso.com',
      password: '123',
      confirmpass: '123'
    },
    {
      id: '1037659854',
      photo: '',
      accountype: '',
      names: 'Carlos Andrés',
      mode: '',
      lastnames: 'Santiago Agudelo Hernándes',
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
        break;
      } else {
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