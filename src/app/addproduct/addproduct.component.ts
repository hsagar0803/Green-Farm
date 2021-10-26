import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {


  inputTitle=''
  inputPrice='';
  inputQty='';
  inputDes='';
  Category='';
  constructor( private dbservice:DatabaseService) { }

  ngOnInit(): void {
  }
  addProductData(){
    this.dbservice.saveProductDataWithInfo(this.inputTitle, this.inputPrice,this.inputQty, this.inputDes, this.Category);
    this.inputTitle='';
    this.inputPrice='';
    this.inputQty='';
    this.inputDes='';
    this.Category='';
  }
  clearProductData(){
    this.inputTitle='';
    this.inputPrice='';
    this.inputQty='';
    this.inputDes='';
    this.Category='';
  }
}
