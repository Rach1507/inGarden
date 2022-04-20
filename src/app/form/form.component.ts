import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  productForm :FormGroup | undefined;
  message:String=""
  constructor() { }

  ngOnInit(): void {
    this.productForm =new FormGroup({
      prod_name:new FormControl('',Validators.required),
      prod_desc:new FormControl('',Validators.required),
      Category:new FormControl('',Validators.required),
      prod_care_tip:new FormControl(''),
      // prod_name:new FormControl('',Validators.required)
      // prod_name:new FormControl('',Validators.required)
      // prod_name:new FormControl('',Validators.required) 
      // prod_name:new FormControl('',Validators.required)
      // prod_name:new FormControl('',Validators.required)

    })
    //create fields 
  }

}
