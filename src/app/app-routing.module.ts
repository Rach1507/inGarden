import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ProductComponent } from './product/product.component';

import { MainComponent } from "./main/main.component";
import { FormComponent } from './form/form.component';

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
    component:FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
