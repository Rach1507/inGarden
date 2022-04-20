import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  public allProducts: any | undefined;
  constructor(private service: HomeService) {}

  ngOnInit(): void {
    this.getAllPlants();
  }

  getAllPlants() {
    this.service.getAllProducts().subscribe(
      (data) => {
        this.allProducts = data;
      },
      (err) => console.log(err)
    );
  }
}
