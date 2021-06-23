import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productData:Array<any> = [];

  constructor( private http:HttpClient) { }

  addProduct(data:any){
    
    return this.http.post(`https://60c77a85afc88600179f5369.mockapi.io/product`,data);
  }

  getProduct(){
    return this.http.get(`https://60d3975f61160900173c9664.mockapi.io/product`);
  }

  getProductById(id:number){
    return this.http.get(`https://60d3975f61160900173c9664.mockapi.io/${id}`);
  }
  updateProductById(id:any,data:any){
    
    return this.http.put(`https://60d3975f61160900173c9664.mockapi.io/${id}`,data);
  }
  deleteProductById(id:number){
    
    return this.http.delete(`https://60d3975f61160900173c9664.mockapi.io/${id}`);
  }
}
