import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {

  @Input() 
  cart_count !:number;
  constructor(private _router: Router, private route: ActivatedRoute,private cartService:CardService) { }

  ngOnInit(): void {
    this.cart_count=this.cartService.cartList.length;
    // this.cart_count=0;
  // 
  }

  goToCart(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        // "uId": uid
      }
    };

    this._router.navigate(['/cart'],navigationExtras);

  }



}
