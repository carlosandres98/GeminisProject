import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { PersonalProfileComponent } from './components/personal-profile/personal-profile.component';
import { CarComponent } from './components/car/car.component';
import { HelpcenterComponent } from './pages/helpcenter/helpcenter.component';
import { RegisterSellerComponent } from './components/register-seller/register-seller.component';
import { RegisterOptionComponent } from './components/register-option/register-option.component';
import { SearchComponent } from './components/search/search.component';


const routes: Routes = [
  //{path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'register-option', component: RegisterOptionComponent},
  {path: 'search/:category/:subCategory', component: SearchComponent},
  {path: 'login', component: LoginComponent},
  {path: 'car', component: CarComponent},
  {path: 'personal-profile', component: PersonalProfileComponent},
  {path: 'detail-product/:product', component: ProductDetailComponent},
  {path : 'products', component : ProductsComponent},
  {path : 'register', component : RegisterComponent },
  {path: 'dashboard', component: DashboardComponent},
  {path: '*', component: LoginComponent},
  {path: 'helpcenter', component: HelpcenterComponent},
  {path : '**' , redirectTo : 'dashboard'},
  {path: 'register-seller', component: RegisterSellerComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
