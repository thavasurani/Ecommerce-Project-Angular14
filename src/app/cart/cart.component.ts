import { Component, Input, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { faCartPlus, faIcons} from '@fortawesome/free-solid-svg-icons';
import { Product } from '../interface/Product';
import { FilterPipe } from 'ngx-filter-pipe';
import {faSearchengin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  @Input() product: Product = {} as Product;
  faCartPlus = faCartPlus;
  faSearchengin = faSearchengin;
  
products: Product[] = [];
productFilter: any = {products: ''};
orderHeader: string = '';
isDescOrder: boolean = true;


  constructor(private cartService: CartService,
    private filterPipe: FilterPipe) {
   }

  ngOnInit(): void {
    
  }

getCart(){
  return this.cartService.get();
  }
addToCart(){
  this.cartService.add(this.product);
}
deleteFromCart(getCart: Product){
     this.cartService.delete(getCart);
     
    }
sort(headerName: string){
this.orderHeader = headerName;
this.isDescOrder = !this.isDescOrder;
}


}

