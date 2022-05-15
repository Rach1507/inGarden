import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";


const httpOptions = {
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
}


@Injectable()
export class HomeService {

  cart_count!:number;
  constructor(private http:HttpClient) { 
  }
    getAllProducts(){
      return this.http.get('/server/products');
    
  }

  getProductsByCategoryId(id:String){
    return this.http.get("/server/products/categories/"+id);
  }

  getProductById(id:number){
    // let token = localStorage.getItem('access_token');
    return this.http.get('/server/products/'+id
    // ,{headers:new HttpHeaders().set('Authorization','Bearer'+token)}
    
    );
  }
}
