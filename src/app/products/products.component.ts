import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from '../interface/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})

  export class ProductsComponent implements OnInit {
    products: Product[] = [];
  //  products: Product[] = [];
    p:number = 1;
    itemsPerPage: number = 5;
    totalProduct: any;
   

    constructor(private productsService: ProductsService) { }

    isShowing: boolean= true;

    ngOnInit(): void {
      this.products = this.productsService.getProducts();
      // this.products = this.productsService.getProducts();
      this.totalProduct = this.products.length;
    }
}
