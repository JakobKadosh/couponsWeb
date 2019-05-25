import { Component } from '@angular/core';
import { UserService } from 'src/Shared/Services/User.service';
import { Customer } from 'src/Shared/models/Customer.model';
import { User } from 'src/Shared/models/User.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
_firstName:string;
_lastName:string;
_email:string;
_password:string;
_confirm:string; 

  constructor(private service: UserService) { }

  public register(): void {
    let customer:Customer=new Customer();
    let user: User=new User();
  

    customer.firstName=this._firstName;
    customer.lastName=this._lastName;
    customer.email=this._email;
    if(this._confirm===this._password){
      customer.password=this._password;

    }else{
      alert("password is not valid!"); 
      return;
    }
    user.userName = this._email;
    user.userPassword = this._password;
    user.clientType = 'CUSTOMER';
    customer.user=user
    alert(customer.firstName)
    this.service.register(customer);
    
  

  }


}
