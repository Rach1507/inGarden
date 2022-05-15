import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from "../models/product";
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})


export class CartComponent implements OnInit {

  addressForm!:FormGroup;



  public cartList : IProduct[] | null =[];  

  constructor(private service:CardService,private router:Router ) { 

  }

  ngOnInit(): void {

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

this.addressForm = new FormGroup({ 
  name:new FormControl('',Validators.required),
  phone:new FormControl(null,[Validators.required]),
  email :new FormControl("",[Validators.required,Validators.email]),
  address_line_one:new FormControl("",Validators.required),
  address_line_two:new FormControl(""),
  pin_code:new FormControl("",[Validators.required])


});


    this.cartList=JSON.parse(sessionStorage.getItem("CartItems") || "{}");
  }


  checkout(){
document.getElementById("address")!.style.visibility='visible';
document.getElementById("address")?.classList.remove("invisible");
  }


  placeOrder(){


    
    console.log("Name:" + this.addressForm.get("name")?.valid);
    console.log("P:" + this.addressForm.get("phone")?.valid);

    console.log("em:" + this.addressForm.get("email")?.valid);

    console.log("add1:" + this.addressForm.get("address_line_one")?.valid);

    console.log("add2:" + this.addressForm.get("address_line_two")?.valid);
    console.log("pin:" + this.addressForm.get("pin_code")?.valid);

    if (this.addressForm.valid) {

     // TODO:  Store order details in db

    alert("Order Placed Successfully!");
this.service.cartList=[];
    sessionStorage.setItem("CartItems","[]");
    console.log(sessionStorage.getItem("CartItems"));
    

    this.router.navigate(['/cart']);
  }
  else
  alert("Please Fill out the required fields in the reciepient Info");

}
}
