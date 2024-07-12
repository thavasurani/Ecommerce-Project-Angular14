import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './products/product/product.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { OurProductsComponent } from './our-products/our-products.component';
import { CheckoutComponent } from './checkout/checkout.component';
// import { PlaceTheProductComponent } from './place-the-product/place-the-product.component';
import { ConfirmedComponent } from './confirmed/confirmed.component';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';
import { AuthGuard } from './auth/auth.guard';



const routes: Routes = [
 
  {path:'our-products', component: OurProductsComponent},
  {path:'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: "products/product", component: ProductsComponent}, 
   {path:'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
  {path: 'cart', component: CartComponent, canActivate: [AuthGuard]
    // children:[{path: 'cartchild', component: PlaceTheProductComponent}]
  },
  {path: 'checkout', component: CheckoutComponent},
  // {path: 'place-the-product', component: PlaceTheProductComponent},
  {path: 'confirmed', component: ConfirmedComponent},
  {path: 'customer-add', component: CustomerAddComponent}
 
 
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
