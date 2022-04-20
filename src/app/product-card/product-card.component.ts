import { Component, OnInit,Input } from '@angular/core';
import { ProductComponent  } from "../product/product.component";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() allproducts: any ;
  constructor() { }

  ngOnInit(): void {
  }

}
