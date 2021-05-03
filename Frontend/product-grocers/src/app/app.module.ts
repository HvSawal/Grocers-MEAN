import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleCompComponent } from './example-comp/example-comp.component';
import { FormsModule }   from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { EmployeeTicketComponent } from './employee-ticket/employee-ticket.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RaiseTicketComponent } from './raise-ticket/raise-ticket.component';
import { EditProjectsComponent } from './edit-projects/edit-projects.component';
import { ViewRequestsComponent } from './view-requests/view-requests.component';
import { EditEmployeesComponent } from './edit-employees/edit-employees.component';
import { ReportsComponent } from './reports/reports.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { SendRequestComponent } from './send-request/send-request.component';
import { UpdateOrderComponent } from './update-order/update-order.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UpdateProductComponent } from './product-components/update-product/update-product.component';
import { DeleteProductComponent } from './product-components/delete-product/delete-product.component';
import { AddProductComponent } from './product-components/add-product/add-product.component';
import { RetrieveProductsComponent } from './product-components/retrieve-products/retrieve-products.component';
import { GenerateReportsComponent } from './generate-reports/generate-reports.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavComponent } from './shared/nav/nav.component';
import { FiltersComponent } from './cart/filters/filters.component';
import { CartListComponent } from './cart/cart-list/cart-list.component';
import { CartItemComponent } from './cart/cart-list/cart-item/cart-item.component';
import { ProductListComponent } from './cart/product-list/product-list.component';
import { ProductItemComponent } from './cart/product-list/product-item/product-item.component';
import { CheckoutCartComponent } from './cart/checkout-cart/checkout-cart.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { AddFundsComponent } from './add-funds/add-funds.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { UserComponent } from './components/home-page/user/user.component';
import { AdminComponent } from './components/home-page/admin/admin.component';
import { EmployeeComponent } from './components/home-page/employee/employee.component';



@NgModule({
  declarations: [
    AppComponent,
    ExampleCompComponent,
    LoginPageComponent,
    RaiseTicketComponent,
    EditProjectsComponent,
    ViewRequestsComponent,
    EditEmployeesComponent,
    ReportsComponent,
    CartComponent,
    OrdersComponent,
    ProfileInfoComponent,
    SendRequestComponent,
    UpdateOrderComponent,
    EmployeeTicketComponent,
    SignUpComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    AddProductComponent,
    RetrieveProductsComponent,
    GenerateReportsComponent,
    AddEmployeeComponent,
    DeleteEmployeeComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    FiltersComponent,
    CartListComponent,
    CartItemComponent,
    ProductListComponent,
    ProductItemComponent,
    CheckoutCartComponent,
    AddFundsComponent,
    HomePageComponent,
    UserComponent,
    AdminComponent,
    EmployeeComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '', pathMatch: 'full', redirectTo: 'login-page'
      },
      {path: 'retrieve-products', component: RetrieveProductsComponent},
      {path: 'add-product', component: AddProductComponent},
      {path: 'delete-product', component: DeleteProductComponent},
      {path: 'update-product', component: UpdateProductComponent},
      {path: 'sign-up', component: SignUpComponent},
      {path: 'employee-ticket', component: EmployeeTicketComponent},
      {path: 'raise-ticket', component: RaiseTicketComponent},
      {path: 'view-requests', component: ViewRequestsComponent},
      {path: 'send-requests', component: SendRequestComponent},
      {path: 'profile-info', component: ProfileInfoComponent},
      {path: 'orders', component: OrdersComponent},
      {path: 'cart', component: CartComponent},
      {path: 'reports', component: ReportsComponent},
      {path: 'edit-employees', component: EditEmployeesComponent},
      {path: 'login-page', component: LoginPageComponent},
      {path: 'update-order', component: UpdateOrderComponent},
      {path: 'checkout-cart', component: CheckoutCartComponent},
      {path: 'add-employee', component: AddEmployeeComponent},
      {path: 'delete-employee', component: DeleteEmployeeComponent},
      {path: 'generate-reports', component: GenerateReportsComponent},
      {path: 'add-funds', component: AddFundsComponent},
      //{path: '/', redirectTo: '/login-page', pathMatch: 'full'}
      // {path: 'home-page', component: HomePageComponent}
      

    ]),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
