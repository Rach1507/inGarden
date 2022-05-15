import { Injectable } from '@angular/core';
import { IProduct } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  public product!: JSON;

//   public cartList = { products:[{"prod_id":0 ,
//   "prod_name": "",
//   "prod_desc": "",
//   "prod_care_tip": "",
//   "prod_price": 0.0,
//   "units_in_stock": 0,
//   "category_id": "3",
//   "plant_height": 0.0,
//   "plant_width": 40.0,
//   "price": 0.0,
//   "prod_image": ""
// }]  }
  // public cartList!:[this.product];

  public cartList : IProduct[]=[];
  constructor() { }
}
