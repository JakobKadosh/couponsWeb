import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coupon } from '../models/Coupon.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
root={

  companyCustomers:null,
  companyCoupons:null,
  coupon:null
};

  constructor(private http:HttpClient) { }

public addCoupon(coupon:Coupon,token:number):void{
  let observable=this.http.post(`http://localhost:8080/coupons?token=${token}`,coupon);
  observable.subscribe(
    res=>{
      alert("Coupon added succesfully!!");
    },
    err=>{
      alert("ERROR! STATUS: "+err.status+"\nMessege: "+err.messege);
    }

  )
}




}
