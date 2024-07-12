import { CustomerAction, CustomerActionType } from "../action/customer.actions";
import { Customer } from "../models/customer";

const initialState: Array<Customer> = [
  {
    name : 'Rani',
    mobile : 9870987890,
    email : 'asf@gmail.com',
    password : 'asdfg',
    address1 : 'hme 1st street',
    address2 : 'thhb wert',
    city : 'Kanniya',
    state : 'Telungana',
    zip : 508303,

  }
];

export function CustomerReducer(
  state: Array<Customer> = initialState,
  action: CustomerAction  
)
{
  switch(action.type){
    case CustomerActionType.ADD_ITEM:
      return [...state, action.payload];

      default:
        return state;
  }
}