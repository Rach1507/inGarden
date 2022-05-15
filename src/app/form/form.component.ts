import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { PlantDescriptionComponent } from '../plant-description/plant-description.component';
import { AdminService } from "../services/admin.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public productForm!: FormGroup;
  message:String="";
  categories: string[] =["1 - Plants", "2 - Gardening tools & accessories", "3 - Fertilizers"];


  constructor(private adminService:AdminService,private _router:Router) { }

  ngOnInit(): void {
    this.productForm =new FormGroup({
      prod_name:new FormControl('',Validators.required),
      prod_desc:new FormControl('',Validators.required),
      category_id:new FormControl('',Validators.required),
      prod_care_tip:new FormControl(''),
      prod_price:new FormControl('',Validators.required),
      units_in_stock:new FormControl('',Validators.required),
      prod_image:new FormControl('',Validators.required), 
      plant_height:new FormControl('',Validators.required),
      plant_width:new FormControl('',Validators.required)

    });

  }

  
    submitRegistration() {
      if (this.productForm.valid) {
      this.message = "Product added succesfully";
      this.adminService.createProduct(this.productForm.value).subscribe (
    
      data => { this.productForm.reset();
     
      // return true;
      this._router.navigateByUrl('/admin');
   
      }
      )
      
      } else {
      
      this.message = "Please fill out the form before submitting!";
      
      }
   
      }
   
  }


// function submitRegistration() {
//   throw new Error('Function not implemented.');
// }

