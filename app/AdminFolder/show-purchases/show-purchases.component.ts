import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/Shared/Services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-purchases',
  templateUrl: './show-purchases.component.html',
  styleUrls: ['./show-purchases.component.css']
})
export class ShowPurchasesComponent implements OnInit {
public token:number;
public user_id:number;

  constructor(private service:AdminService,private router:Router) { 
    this.token=<number><unknown>sessionStorage.getItem("token");
    this.user_id=<number><unknown>sessionStorage.getItem("user_id");
  }

  ngOnInit() {
  }
public showPurchases():void{
  this.service.show_purchases(this.token);
}


public deletePurchases(purchase_id:number){
  this.service.delete_purchase(purchase_id,this.token);
}
}
