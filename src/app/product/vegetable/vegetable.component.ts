import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';


@Component({
  selector: 'app-vegetable',
  templateUrl: './vegetable.component.html',
  styleUrls: ['./vegetable.component.css']
})
export class VegetableComponent implements OnInit {

  myPData:any;

  

  c_title='';
  c_price='';
  c_quantity='';
  c_total='';
  
  constructor(private dbservice:DatabaseService) { }

  ngOnInit(): void {

    this.fetchProductData();
  }
  fetchProductData(){
    this.dbservice.fetchWithProductData().then(data =>{
      this.myPData=data;
     // console.log(data);
    }).catch(error =>{
      alert(error);
    })
  }

  saveToCart(){
    
    this.dbservice.saveToCartWithPData(this.c_title, this.c_price, this.c_quantity , this.c_total);
    this.c_quantity='';
  }

}
