import { Action } from "@ngrx/store";
import { Customer } from "../models/customer";

export enum CustomerActionType{
   ADD_ITEM = '[CUSTOMER] Add Customer',
}

export class AddCustomerAction implements Action{
   readonly type = CustomerActionType.ADD_ITEM;

   constructor(public payload: Customer){

   }
  
}
export type CustomerAction = AddCustomerAction;


