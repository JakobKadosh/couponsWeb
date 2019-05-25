import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/Shared/Services/User.service';
import { User } from 'src/Shared/models/User.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  public _userName: string ;
  public _password: string;


  constructor(private service: UserService, private http: HttpClient, private router: Router) {}
  public login(): void {
    let user: User = new User(this._userName, this._password);
   
    this.service.login(user)


  }
}
