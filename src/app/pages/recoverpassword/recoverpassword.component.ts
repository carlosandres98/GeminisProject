import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recoverpassword',
  templateUrl: './recoverpassword.component.html',
  styleUrls: ['./recoverpassword.component.scss']
})
export class RecoverpasswordComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goConfirmpassword(){
    this.router.navigate(['confirm-password']);
  }

}
