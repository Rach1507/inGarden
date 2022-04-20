import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";


const httpOptions = {
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
}
// @Injectable({
//   providedIn: 'root'
// })

@Injectable()
export class HomeService {

  constructor(private http:HttpClient) { 
  }
    getAllProducts(){
      return this.http.get('/server/products');
    
  }
}