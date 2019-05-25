import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { CustomerComponent } from './customer/customer.component';
import { CompanyComponent } from './companyFolder/company/company.component';
import { AdminComponent } from './AdminFolder/admin/admin.component';
import { AddCompanyComponent } from './AdminFolder/add-company/add-company.component';
import { ShowCustomerComponent } from './AdminFolder/show-customers/show-customers.component';
import { ShowCompaniesComponent } from './AdminFolder/show-companies/show-companies.component';
import { ShowPurchasesComponent } from './AdminFolder/show-purchases/show-purchases.component';
import { AddCouponComponent } from './companyFolder/add-coupon/add-coupon.component';


const routes: Routes = [
  { path: "users/login", component: UserComponent },
  { path: "customers/register", component: RegisterComponent },
  { path: "customer", component: CustomerComponent },
  { path: "company", component: CompanyComponent },
  { path: "admin", component: AdminComponent },
  { path: "add-company", component: AddCompanyComponent },
  { path: "ShowCustomers", component: ShowCustomerComponent },
  { path: "ShowCompanies", component: ShowCompaniesComponent },
  { path: "addCoupon", component:AddCouponComponent},
  { path: "", redirectTo: "users/login", pathMatch: "full" }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CompanyComponent,
    CustomerComponent,
    AdminComponent,
    RegisterComponent,
    AddCompanyComponent,
    ShowCustomerComponent,
    ShowCompaniesComponent,
    ShowPurchasesComponent,
    AddCouponComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
