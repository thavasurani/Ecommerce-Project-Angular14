import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';

import { ContactComponent } from './contact/contact.component';

import { OurProductsComponent } from './our-products/our-products.component';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import {MatTableModule} from '@angular/material/table';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from 'src/material.module';
import { CheckoutComponent } from './checkout/checkout.component';
// import { PlaceTheProductComponent } from './place-the-product/place-the-product.component';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { OrderModule } from 'ngx-order-pipe';
import { ConfirmedComponent } from './confirmed/confirmed.component';



import { CustomerAddComponent } from './customer/customer-add/customer-add.component';
import { CustomerReducer } from './customer/store/reducer/customer.reducer';




@NgModule({
  declarations: [
    AppComponent,
       CartComponent,
       AboutComponent,
       ContactComponent,
       
       OurProductsComponent,
       CheckoutComponent,
      //  PlaceTheProductComponent,
       ConfirmedComponent,
    
       CustomerAddComponent,
      
       
  ],
  imports: [ BrowserModule, AppRoutingModule, FontAwesomeModule, BrowserAnimationsModule, ProductsModule, AuthModule, FormsModule, HttpClientModule, NgxPaginationModule, MatTableModule, MaterialModule, FilterPipeModule, OrderModule, ReactiveFormsModule, StoreModule.forRoot({}) , ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// StoreModule.forRoot({customer: CustomerReducer})