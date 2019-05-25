import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/Shared/models/Coupon.model';

import { Router } from '@angular/router';
import { CustomerService } from 'src/Shared/Services/customer.service';
import { Purchase } from 'src/Shared/models/Purchase.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  private amount: number;
  public token: number;
  public user_id: number;
  public coupons = this.service.root;


  constructor(private service: CustomerService, private router: Router) {
    this.token = <number><unknown>sessionStorage.getItem("token");
    this.user_id = <number><unknown>sessionStorage.getItem("user_id");
  }
  private showCoupons(): void {
  this.service.showCoupons(this.token);
  }
  ngOnInit(): void {
    this.showCoupons();
  }
  public purchase(coupon_id:number, amount: number):void{

    let purchase:Purchase=new Purchase(this.user_id,coupon_id,this.amount);

    this.service.purchase(this.token,purchase);
  }

}
