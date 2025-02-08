import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts(){
    return[
      {
        prodid: "P-101",
        prodname: "Logitech Mouse",   
        description: "6 Button Mechanical Mouse",
        price: 899.00
      },
      {
        prodid: "P-102",
        prodname: "JBL BT Speaker",   
        description: "Waterproof Radio 360 Surround",
        price: 1099.00
      },
      {
        prodid: "P-103",
        prodname: "Mechanical Keyboard",   
        description: "Hot-swappable RGB Backlit",
        price: 2395.00
      },
      {
        prodid: "P-104",
        prodname: "Oculus Meta",   
        description: "All-in-one Gaming Headset",
        price: 22450.00
      }
    ]    
  }
  constructor() { }
}
