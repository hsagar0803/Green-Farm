import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarModule } from 'ng-sidebar';
import 'firebase/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrubComponent } from './breadcrub/breadcrub.component';
import { ProductComponent } from './product/product.component';
import { VegetableComponent } from './product/vegetable/vegetable.component';
import { FruitComponent } from './product/fruit/fruit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { InvoiceComponent } from './invoice/invoice.component';
import {AngularFireModule} from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { LoginPageComponent } from './login-page/login-page.component';
import { RagisterFormComponent } from './ragister-form/ragister-form.component';
import { CommonLoginComponent } from './common-login/common-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoComponent } from './todo/todo.component';
import { FormsModule} from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { ImageUploadComponent } from './image-upload/image-upload.component'




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrubComponent,
    ProductComponent,
    VegetableComponent,
    FruitComponent,
    DashboardComponent,
    ProductlistComponent,
    AddproductComponent,
    InvoiceComponent,
    LoginPageComponent,
    RagisterFormComponent,
    CommonLoginComponent,
    TodoComponent,
    CartComponent,
    ImageUploadComponent,
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    SidebarModule,
    SidebarModule.forRoot(),
    FormsModule,
    AngularFireModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
