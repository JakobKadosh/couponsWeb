import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/Shared/Services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-customers',
  templateUrl: './show-customers.component.html',
  styleUrls: ['./show-customers.component.css']
})
export class ShowCustomerComponent implements OnInit {
  
  public token: number;
  public user_id: number;
  public data=this.service.root;

  constructor(private service:AdminService,private router:Router) { 
    this.token = <number><unknown>sessionStorage.getItem("token");
    this.user_id = <number><unknown>sessionStorage.getItem("user_id");
  }
  ngOnInit(): void {
    this.showCustomers();
  }
  
  public showCustomers():void{
   this.service.get_all_customers(this.token)
  }
  public deleteCustomer(customerId:number):void{
    this.service.delete_customer(customerId,this.token);
  }
}
