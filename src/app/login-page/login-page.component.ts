import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  email='';
  password='';
  constructor( private dbservice:DatabaseService) { }

  ngOnInit(): void {
  }

  OnTapOfSubmit(){
 this.dbservice.signWithFirebase(this.email,this.password);
 this.email='';
 this.password='';
  }
}
