import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/Shared/Services/company.service';
import { Router } from '@angular/router';
import { Coupon } from 'src/Shared/models/Coupon.model';

@Component({
  selector: 'app-add-coupon',
  templateUrl: './add-coupon.component.html',
  styleUrls: ['./add-coupon.component.css']
})
export class AddCouponComponent implements OnInit {

  public userId:number;
  public token:number;
  public companyId:number;
  coupon:Coupon;
  
  constructor(private service:CompanyService,private router:Router) {
    this.userId=<number><unknown>sessionStorage.getItem("user_id");
    this.token=<number><unknown>sessionStorage.getItem("token");
    this.companyId=<number><unknown>sessionStorage.getItem("company_id");
  }

  ngOnInit() {
    this.addCoupon();
  }

public addCoupon():void{
  this.service.addCoupon(this.coupon,this.token);
}
}
