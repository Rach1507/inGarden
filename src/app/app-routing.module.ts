import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute, ParamMap } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ProductComponent } from './product/product.component';

import { MainComponent } from "./main/main.component";
import { FormComponent } from './form/form.component';
import { EditFormComponent } from './edit-form/edit-form.component';


import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path:'allProducts',
    component: ProductComponent
  },
  {
    path:'admin',
    component: AdminComponent
   
  }

  ,{
    path:"home",
    component:MainComponent
  }
  ,{
    path:"create",
    component:FormComponent
  },{
    path:"update",
    component:EditFormComponent
  }
  ,
  {
    path:"cart",
    component:CartComponent
  }
  , 
  {
    path:"update",
    component:EditFormComponent
  }
  // ,
  // {
  //   path:"/categories/"
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
