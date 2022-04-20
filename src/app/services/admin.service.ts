import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})

export class AdminService {

  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get('/server/products');
  }

  getProductById(id:number){
    return this.http.get('/server/products/'+id);
  }

  createProduct(product: any){
    let body = JSON.stringify(product);
    return this.http.post('/server/products/add',body,httpOptions);
  }

  updateProduct(product:any,id:number){
    let body = JSON.stringify(product);
    return this.http.put('/server/products/{id}',body,httpOptions);
  }

  deleteProduct(id:number){
    return this.http.delete('/server/product/'+id)
  }
}
