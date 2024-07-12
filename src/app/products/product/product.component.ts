import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';

import { Product } from 'src/app/interface/Product';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

  export class ProductComponent implements OnInit {
    @Input() product: Product = {} as Product;

    products: Product[] = [];
    isInCart: boolean = false;
  constructor(private cartService: CartService) { }
addToCart(){
this.isInCart=true;
this.cartService.add(this.product);

}
removeFromCart(){
this.isInCart=false;
this.cartService.remove(this.product);

}
  ngOnInit(): void {
  }

}





 

