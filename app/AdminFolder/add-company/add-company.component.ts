import { Component, OnInit } from '@angular/core';
import { Company } from 'src/Shared/models/Company.model';
import { AdminService } from 'src/Shared/Services/admin.service';
import { Router } from '@angular/router';
import { User } from 'src/Shared/models/User.model';
import { UserService } from 'src/Shared/Services/User.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
 public company:Company=new Company();
  public token=undefined;
  public user_id=undefined;
  constructor(private userService:UserService , private service:AdminService,private router:Router) { 

    this.token = <number><unknown>sessionStorage.getItem("token");
    this.user_id = <number><unknown>sessionStorage.getItem("user_id");
  }

  ngOnInit() {
  }
  public addCompany(): void {

    let company: Company =new Company();
    company.name = this.company.name;
    company.password=this.company.password;
    company.email = this.company.email;
    this.service.addCompany(company,this.token);
    this.router.navigate(["/admin"]);
  }
  
}
