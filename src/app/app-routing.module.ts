import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FruitComponent } from './product/fruit/fruit.component';
import { ProductComponent } from './product/product.component';
import { VegetableComponent } from './product/vegetable/vegetable.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { RagisterFormComponent } from './ragister-form/ragister-form.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
 // {path:'dashboard', component:DashboardComponent},
  {path:'product', component:ProductComponent,children:[
    {path:'vegetable',component:VegetableComponent},
    {path:'fruit', component:FruitComponent},
    {path:'',redirectTo:'vegetable',pathMatch:'full'}
  ]},
  {path:'productlist', component: ProductlistComponent},
  {path:'invoice', component: InvoiceComponent},
  {path:'addproduct', component:AddproductComponent},
  {path:'login-page', component:LoginPageComponent , children:[
    
  ]},
  /*{path:'common-login', component:LoginPageComponent,children:[
    {path:'login-page', component:LoginPageComponent},
    {path:'ragister-form', component:RagisterFormComponent},
  ]},*/
  {path:'ragister-form', component:RagisterFormComponent},
  {path:'todo', component:TodoComponent},
  {path:'cart', component:CartComponent},
  {path:'', redirectTo:'productlist',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
