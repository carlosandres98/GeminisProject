import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goLogin() {
    this.router.navigate(['/login']);
  }

  goRegister() {
    this.router.navigate(['/register']);
  }
  
  goProfile () {
    this.router.navigate(['/personal-profile']);
  }

  goCart () {
    this.router.navigate(['/car']);

  }

  goHelpCenter() {
    this.router.navigate(['/helpcenter']);
  }

}
