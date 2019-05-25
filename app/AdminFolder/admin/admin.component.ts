import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/Shared/Services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  public token: number;
  public user_id: number;
  constructor(private router:Router) { 
    
    this.token = <number><unknown>sessionStorage.getItem("token");
    this.user_id = <number><unknown>sessionStorage.getItem("user_id");
  }

  ngOnInit() {
  }

  public addCompany(): void {
    this.router.navigate(["/add-company"])
  }

  public showCustomers():void{
    this.router.navigate(["/ShowCustomers"])
  }
   
  public showCompanies():void{
    this.router.navigate(["/ShowCompanies"])
  }



}
