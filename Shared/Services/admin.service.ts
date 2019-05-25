import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Company } from '../models/Company.model';
import { Customer } from '../models/Customer.model';
import { Purchase } from '../models/Purchase.model';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  public root = {
    administrator: null,
    all_companies: null,
    userId:null,
    all_customers: null,
    all_purchases: null,
    all_users: null
  }
  constructor(private http: HttpClient, private router: Router) { }

  public addCompany(company: Company, token: number):void {

    let observable = this.http.post(`http://localhost:8080/companies?token=${token}`, company);

    observable.subscribe(

      () => {

        alert("company has been created");
      },
      err =>{
        alert("Error! Status: " + err.status + ".\nMessage: " + err.message);
      } 
      
    );
  }

 

  public get_all_companies(token: number): void {

    let observable = this.http.get<Company[]>(`http://localhost:8080/companies?token=${token}`);

    observable.subscribe(

      res => {

        this.root.all_companies = res;

      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ".\nMessage: " + err.message)

    );

  }

  public delete_company(company_id: number, token: number): void {

    let observable = this.http.delete(`http://localhost:8080/companies/${company_id}?token=${token}`);

    observable.subscribe(

      () => {

        alert("company has been deleted");

      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ".\nMessage: " + err.message)

    );

  }

  public update_company(company: Company, token: number): void {

    let observable = this.http.put(`http://localhost:8080/companies?token=${token}`, company);

    observable.subscribe(

      () => {

        alert("company has been updated");

      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ".\nMessage: " + err.message)

    );

  }

  
  public get_all_customers(token: number): void {

    let observable = this.http.get<Customer[]>(`http://localhost:8080/customers?token=${token}`);

    observable.subscribe(

      res => {

        this.root.all_customers = res;

      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ".\nMessage: " + err.message)

    );

  }

  
  public delete_customer(customer_id: number, token: number): void {

    let observable = this.http.delete(`http://localhost:8080/customers/${customer_id}?token=${token}`);

    observable.subscribe(

      () => {

        alert("Your customer has been deleted");
        
      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ".\nMessage: " + err.message)

    );

  }

  public delete_purchase(purchase_id:number, token:number):void{
    let observable=this.http.delete(`http://localhost:8080/purchases/${purchase_id}?token=${token}`);
    observable.subscribe(
      ()=>{
        alert("Purchase has been deleted.")
      },
      err=> alert("ERROR! Status: "+err.status+"\nMessege: "+err.message)
    );
  }

  public show_purchases(token:number):void{
    let observable=this.http.get<Purchase[]>(`http://localhost:8080/purchases?token=${token}`);
    observable.subscribe(
      res=>{
        this.root.all_purchases=res;
      },
      err=> alert("ERROR! Status: "+err.status+"\nMessege: "+err.message)
    );
  }

}
