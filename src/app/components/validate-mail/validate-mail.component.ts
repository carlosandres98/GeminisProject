import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-validate-mail',
  templateUrl: './validate-mail.component.html',
  styleUrls: ['./validate-mail.component.scss']
})
export class ValidateMailComponent implements OnInit {

  public mail : string;
  constructor(private act: ActivatedRoute) { 
    act.params.subscribe(data=>{
      this.mail = data['mail'];
    })
  }

  ngOnInit() {
  }

}
