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
    let token = localStorage.getItem('access_token');
    return this.http.get('/server/products'
    // ,{headers:new HttpHeaders().set('Authorization','Bearer'+token)}
    
    );

  }

  getProductById(id:number){
  
    return this.http.get('/server/products/'+id
    // ,{headers:new HttpHeaders().set('Authorization','Bearer'+token)}
    
    );
  }

  createProduct(product: any){
    let token = localStorage.getItem('access_token');
    
    let body = JSON.stringify(product);
    return this.http.post('/server/products/add',body,
    
    {
      
      headers:new HttpHeaders({
      
      // 'Authorization':'Bearer'+token,
    'Content-Type': 'application/json'
  
  })
    
  }
    );
  }

  updateProduct(product:any,id:number){

    let token = localStorage.getItem('access_token');

    let body = JSON.stringify(product);
    return this.http.put('/server/products/'+id,body,

    {
      
      headers:new HttpHeaders({
      
      // 'Authorization':'Bearer'+token,
    'Content-Type': 'application/json'
  
  })
    
  }



    
    );
  }

  deleteProduct(id:number){
    let token = localStorage.getItem('access_token');
  
    
    
    return this.http.delete('/server/products/'+id
    ,{headers:new HttpHeaders().set('Authorization','Bearer'+token)}
    
    
    
    ).subscribe(() => alert( 'Delete successful'));
    
  }
}
