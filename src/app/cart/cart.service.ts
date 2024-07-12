import { Injectable, OnInit } from '@angular/core';
import { Product } from '../interface/Product';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sort } from '@angular/material/sort';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit{
  
//  apiurl : 'https://localhost:4200/products/product'; 
 cart: Array<Product> = [];
 

  constructor(private http: HttpClient) { }
 
  add(product: Product){
this.cart.push(product);
  }
  remove(product: Product){
    this.cart = this.cart.filter(p => p != product);
      }
placed(product: Product){
this.cart.push(product)
}
canceled(product: Product){
this.cart = this.cart.filter(p => p != product);
}


  getCart(){
    return this.cart;
    
  }
  calculateTotal(){
    let total = 0;
this.getCart().map((product)=>{
  total += product.bundle;
})
return total;
  }
   get(){
return this.cart;
  }

delete(getCart: Product){
  this.cart = this.cart.filter(p => p != getCart);
  console.log("deleted");
}



ngOnInit(): void {
  this.calculateTotal();
  
}

 }
