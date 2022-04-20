import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantDescriptionComponent } from './plant-description/plant-description.component';
import { HttpClientModule } from "@angular/common/http";
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { MainComponent } from './main/main.component';
import { HomeService } from "./services/home.service";
import { AdminService } from "./services/admin.service";
import { ProductComponent } from './product/product.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { AdminComponent } from './admin/admin.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    PlantDescriptionComponent,
   
    AppNavbarComponent,
        MainComponent,
        ProductComponent,
        ProductCardComponent,
        AdminComponent,
        MainComponent,
        FooterComponent,
        FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    
  ],
  providers: [
  HomeService,
  AdminService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
