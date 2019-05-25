import { Component } from '@angular/core';
import { CompanyService } from 'src/Shared/Services/company.service';
import { Router } from '@angular/router';
import { Coupon } from 'src/Shared/models/Coupon.model';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {

  public userId:number;
  public token:number;
  public companyId:number;
  
  
  constructor(private service:CompanyService,private router:Router) {
    this.userId=<number><unknown>sessionStorage.getItem("user_id");
    this.token=<number><unknown>sessionStorage.getItem("token");
    this.companyId=<number><unknown>sessionStorage.getItem("company_id");
  }

  public addCoupon():void{
    this.router.navigate(["/addCoupon"]);
  }



}
