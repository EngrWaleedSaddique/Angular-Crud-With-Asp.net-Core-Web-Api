import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from "@angular/router";
import { login, SignUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerLoggedIn=new BehaviorSubject<boolean>(false);

  constructor(private http:HttpClient,private router:Router) {

   }
  
  userSignUp(data:SignUp){
   return this.http.post("http://localhost:3000/seller",data,{observe:"response"}).subscribe((result)=>{
    if(result){
      this.isSellerLoggedIn.next(true);
      localStorage.setItem('seller',JSON.stringify(result.body));
      this.router.navigate(["seller-home"]);
    }
   }); 
  }
  reloadSeller(){
    if(localStorage.getItem('seller')){
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home']);
    }
  }
  userLogin(data:login){
    console.warn(data);
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,{observe:'response'}).
    subscribe((result:any)=>{
      if(result && result.body && result.body.length){
        console.warn("user logged in");
      }
      else{
        console.warn("Login failed");
      }
      console.warn(result);
    });

  }
  
}