import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {


  public usersDB: usersDBI[] = [
    {
      names: 'Carlos Andés',
      lastnames: 'Montoya Cardona',
      email: 'Camc@Inso.com',
      password: '10987651234',
      confirmpass: '10987651234'
    },
    {
      names: '',
      lastnames: 'Orozco Lotero',
      email: 'mol@inso.com',
      password: '123',
      confirmpass: '10987651234'
    },
    {
      names: 'Santiago',
      lastnames: 'Santiago Agudelo Hernándes',
      email: 'SAH@Inso.com',
      password: '10987651234',
      confirmpass: '10987651234'
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
    return userDB
  }

  constructor() {
    this.usersDB = this.getUsersList();
  }
}
export interface usersDBI {
  names: string;
  lastnames: string;
  email: string;
  password: string;
  confirmpass: string;
};