import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AdminService } from "../services/admin.service";
import { Router, ActivatedRoute, ParamMap,NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})



export class AdminComponent implements OnInit {
  public adminProducts: any | undefined;
  display = "none";
  id: any;
  constructor(private service:AdminService, private _router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllPlants();
    this.route.queryParams.subscribe(params => {
      this.id = params['prod_id'];
    });
  }

  getAllPlants(){
    this.service.getAllProducts().subscribe(
    data =>{ this.adminProducts=data},
    err => console.log(err)

    );
  }
 

  editProduct(prod_id:number){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "prodId": prod_id
      }
    };
    this._router.navigate(['/update'],navigationExtras);

 }

createProduct(){
 this._router.navigateByUrl('/create');
}

deleteProd(prod_id:number){
  this.service.deleteProduct(prod_id);
  console.log(prod_id);
  
  window.location.reload();

}

}
