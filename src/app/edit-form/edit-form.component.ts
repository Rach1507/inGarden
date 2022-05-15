import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { PlantDescriptionComponent } from '../plant-description/plant-description.component';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css'],
})
export class EditFormComponent implements OnInit {
  public productForm!: FormGroup;
  private prodId: any;
  public current_product$: Observable<any> | undefined;
  public curr_product: any;
  private id!: number;
  message: String = '';

  categories: string[] = [
    '1 - Plants',
    '2 - Gardening tools & accessories',
    '3 - Fertilizers',
  ];

  constructor(
    private adminService: AdminService,
    private _router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.prodId = this.activatedRoute.queryParams.subscribe((params) => {
      this.id = params['prodId'];
    });

    console.log(this.id);
   
    

// this.getProduct(this.activatedRoute.snapshot.params['id'])
this.getProduct(this.id);



    
  }
getProduct(id:number) {
      this.adminService.getProductById(this.id).subscribe(
        (data) => {
          this.curr_product = data;
          console.log(data);
          console.log(this.curr_product);
          this.productForm = new FormGroup({
            prod_name: new FormControl(this.curr_product.prod_name),
      
            prod_desc: new FormControl(this.curr_product.prod_desc),
            category_id: new FormControl(this.curr_product.category_id),
            prod_care_tip: new FormControl(this.curr_product.prod_care_tip),
            prod_price: new FormControl(this.curr_product.prod_price),
            units_in_stock: new FormControl(this.curr_product.units_in_stock),
            prod_image: new FormControl(this.curr_product.prod_image),
            plant_height: new FormControl(this.curr_product.plant_height),
            plant_width: new FormControl(this.curr_product.plant_width),
          });
    

          
          
        },
        (err) => console.log(err)
      );


 
    }
  
onClose(){
  this._router.navigateByUrl('/admin');

}

   
  

  submitRegistration() {
    if (this.productForm.valid) {
      this.message = 'Product updated succesfully';
      console.log(this.productForm.value);
      console.log(this.id);
      
      
      this.adminService
        .updateProduct(this.productForm.value, this.id)
        .subscribe((data) => {
          this.productForm.reset();

          this._router.navigateByUrl('/admin');
        });
    } else {
      this.message = 'Please fill out the form before submitting!';
    }
  }
}
