import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { login, SignUp } from '../data-type';


@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  showLogin=false;
  constructor(private seller:SellerService) {

   }

  ngOnInit(): void {
    this.seller.reloadSeller();
  }
  signUp(data:SignUp):void{
    
    this.seller.userSignUp(data);
  }
  userLogin(data:login){
    console.warn(data);
    this.seller.userLogin(data);
  }
  openLogin(){
    this.showLogin=true;
  }
  openSignUp(){
    this.showLogin=false;
  }

}
