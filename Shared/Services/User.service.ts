import { Injectable } from '@angular/core';
import { User } from 'src/Shared/models/User.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserLoginData } from '../models/UserLoginData';
import { Customer } from '../models/Customer.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
toke:number;
  root={
    user:null,
    allUsers:null
  };

  constructor(private http: HttpClient, private router: Router) { }

  // login

  public login(user: User):void {

    let observable = this.http.post<UserLoginData>("http://localhost:8080/users/login",  user);

    observable.subscribe(
      
      res => {
        sessionStorage.setItem("token", res.token + "");
        sessionStorage.setItem("user_id", res.userId+"");
        sessionStorage.setItem("company_id",res.companyId+"");

        if (res.clientType === 'CUSTOMER'){

          this.router.navigate(["/customer"]);
        }

        else if (res.clientType === 'COMPANY'){

          this.router.navigate(["/company"]);
        }

        else if(res.clientType ==='ADMINISTRATOR'){

          this.router.navigate(["/admin"]);
        }
        else alert("client type: "+res.clientType+"  ERROR");


      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ", Message: " + err.message)

    )
  }

  // register

  public register(customer: Customer): void {

    let observable = this.http.post("http://localhost:8080/customers", customer);

    observable.subscribe(
      res => {
        alert(" User succefully registered! ")
        
        this.router.navigate(["/customer"]);

      },
      err => alert(" Error! Status: " + err.status + ", Message: " + err.message)

    );

  }

  public addUser(user:User,token:number):number{

    let observable = this.http.post(`http://localhost:8080/users?token=${token}`, user);

    observable.subscribe(

      res => {
        alert("User added successfully! ");
        return res;
      },
      err =>{
        alert("Error! Status: " + err.status + ".\nMessage: " + err.message);
        return 0;
        } 
    
    );
    return; 
      
  }

  public deleteUser(userID:number,token:number):void{
    let observable = this.http.delete(`http://localhost:8080/users/${userID}?token=${token}`);

    observable.subscribe(

      () => {
        alert("User deleted successfully! ");
      },
      err =>{
        alert("Error! Status: " + err.status + ".\nMessage: " + err.message);
        } 
    
    );
      
  } 

}
