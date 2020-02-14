import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmpassword',
  templateUrl: './confirmpassword.component.html',
  styleUrls: ['./confirmpassword.component.scss']
})
export class ConfirmpasswordComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goDashboard(){
    this.router.navigate(['dashboard']);
  }
}
