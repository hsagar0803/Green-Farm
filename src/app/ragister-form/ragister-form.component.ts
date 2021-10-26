import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-ragister-form',
  templateUrl: './ragister-form.component.html',
  styleUrls: ['./ragister-form.component.css']
})
export class RagisterFormComponent implements OnInit {

 // title=''; 
 u_name='';
 u_phone='';
 email='';
 password='';
 c_password='';
  constructor(private dbservice:DatabaseService) { }

  ngOnInit(): void {
  }
  saveRagister(){
    this.dbservice.saveWithRagister(this.u_name, this.u_phone, this.email,this.password, this.c_password);
  
    this.u_name ='';
    this.u_phone='';
    this.email='';
    this.password='';
     this.c_password='';
  }
  //saveTodo(){
   // this.dbservice.saveDataWithTitle(this.title);
 // }
}
