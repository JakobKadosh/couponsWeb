import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coupon } from '../models/Coupon.model';
import { Purchase } from '../models/Purchase.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService  {
 
  public root = {
    customer: null,
    user: null,
    amount: null,
    purchases: null,
    coupon: null,
    maxPrice: null,
    category: null,
    
    allCoupons:null
  };
  constructor(private http: HttpClient ) { }

  
  public showCoupons(token: number):void{
    let observable = this.http.get<Coupon[]>(`http://localhost:8080/coupons?token=${token}`);
    observable.subscribe(
      res => {
        this.root.allCoupons = res;
       
      },
      
      err =>{ alert("ERROR. Somthing went wrong. Status: " + err.status + " Messege:  " + err.messege)}
      
      );
      
  }

public purchase(token:number,purchase:Purchase){
  let observable=this.http.post(`http://localhost:8080/purchases?token=${token}`,purchase);
  observable.subscribe(
    res=>{
      alert("Purchase success!")
    },
    err=>{alert("ERROR. Somthing went wrong. Status: " + err.status + " Messege:  " + err.messege)}


  )
}

}
