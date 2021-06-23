import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userData:Array<any> = [];

  constructor( private http:HttpClient) { }

  addUser(data:any){


    return this.http.post(`https://60c77a85afc88600179f5369.mockapi.io/user`,data);
  }

  getUser(){

    return this.http.get(`https://60c77a85afc88600179f5369.mockapi.io/user`);
  }

  getUserById(id:number){

    return this.http.get(`https://60c77a85afc88600179f5369.mockapi.io/user/${id}`);
  }
  updateUserById(id:any,data:any){
    return this.http.put(`https://60d3975f61160900173c9664.mockapi.io/:endpoint/${id}`,data);
  }
  deleteUserById(id:number){
    return this.http.delete(`https://60d3975f61160900173c9664.mockapi.io/user/${id}`);
  }
}

