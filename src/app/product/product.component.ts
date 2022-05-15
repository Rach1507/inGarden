import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppNavbarComponent } from '../app-navbar/app-navbar.component';
import { CardService } from '../services/card.service';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  public allProducts: any | undefined;
  curr_product: any;
  inCart!: Array<Boolean>;
  constructor(private service: HomeService,private cartService:CardService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getAllPlants();
  }

  getAllPlants() {
   
  const category_id= this.route.snapshot.paramMap.get("category");
  console.log(category_id);
  
  if(category_id === null){

    console.log("category is null");
    
    this.service.getAllProducts().subscribe(
      (data) => {
        this.allProducts = data;

        // this.inCart.fill(false,0,this.allProducts.length);
      },
      (err) => console.log(err)
    );
  }

  else{
    console.log("category is"+category_id);

this.service.getProductsByCategoryId(category_id).subscribe(
  (data) => {
    this.allProducts = data;


    // this.inCart.fill(false,0,this.allProducts.length);
  },
  (err) => console.log(err)
);
  }
  }

  addToCart(prodId:number){

 
    this.service.getProductById(prodId).subscribe((data) => {
      this.curr_product = data;
      console.log(this.curr_product);
      
      this.cartService.cartList.push(this.curr_product);
      sessionStorage.setItem('CartItems', JSON.stringify(this.cartService.cartList))

  const cartListJSON = sessionStorage.getItem('CartItems');
  this.cartService.cartList = JSON.parse( cartListJSON  || '{}');
  this.service.cart_count=this.cartService.cartList.length;

document.getElementById("cartCount")!.innerHTML=(this.service.cart_count).toString();

    });
  }

  addToFavs(prodId:Number){


  }
}

