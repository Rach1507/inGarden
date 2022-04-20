import { Component, OnInit } from '@angular/core';
import { AdminService } from "../services/admin.service";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})



export class AdminComponent implements OnInit {
  public adminProducts: any | undefined;
  constructor(private service:AdminService) { }

  ngOnInit(): void {
    this.getAllPlants();
  }

  getAllPlants(){
    this.service.getAllProducts().subscribe(
    data =>{ this.adminProducts=data},
    err => console.log(err)

    );
  }

}
