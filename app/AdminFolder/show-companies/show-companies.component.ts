import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/Shared/Services/admin.service';
import { UserService } from 'src/Shared/Services/User.service';

@Component({
  selector: 'app-show-companies',
  templateUrl: './show-companies.component.html',
  styleUrls: ['./show-companies.component.css']
})
export class ShowCompaniesComponent implements OnInit {
public token:number;
public user_id:number;
public company_id:number;

public data=this.service.root;
  constructor(private service:AdminService,private userService:UserService) {
    this.token=<number><unknown>sessionStorage.getItem("token");
    this.user_id=<number><unknown>sessionStorage.getItem("user_id");
   }

  ngOnInit() {
    this.showCompanies();
  }
public showCompanies():void{
  this.service.get_all_companies(this.token);
}

public deleteCompany(companyId:number):void{
  this.service.delete_company(companyId,this.token);
  
}


}
