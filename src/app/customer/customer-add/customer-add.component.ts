import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Customer } from '../store/models/customer';
import { AppState } from '../store/models/app-state.model';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AddCustomerAction } from '../store/action/customer.actions';
import { CartService } from 'src/app/cart/cart.service';
import { Product } from 'src/app/interface/Product';


@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit{
  @Input() product: Product = {} as Product;
  products: Product[] = [];
  public totalamount: number = 0;
  public addressform = false;
myform:FormGroup | any;
  customers$!: Observable<Array<Customer>>;
    constructor(private store: Store<AppState>,
                private cartService: CartService
    ) {}
    ngOnInit(): void {
           this.getCart();    
      this.totalamount = this.cartService.calculateTotal();
      console.log("total amt is", this.totalamount);
   
   // getOrdered(){
   // return this.cartService.ordered(this.product);
   // }
   this.myform = new FormGroup({
     name: new FormControl ('', Validators.required),
     mobile: new FormControl ('', Validators.required),
     email: new FormControl ('', Validators.required),
     password: new FormControl ('', Validators.required),
     address1: new FormControl ('', Validators.required),
     address2: new FormControl ('', Validators.required),
     city: new FormControl ('', Validators.required),
     state: new FormControl ('', Validators.required),
     zip: new FormControl ('', Validators.required),
   })
   this.customers$ = this.store.select((store) => store.customer);
   }
   getCart(){
    return this.cartService.get();
    }
    cancel(){
      this.addressform = false;
      this.myform.reset();
    }
     
    addCustomer(form: NgForm) {
      this.store.dispatch(new AddCustomerAction(form.value));
      form.reset();
   console.log(form.value)
    }
  }

