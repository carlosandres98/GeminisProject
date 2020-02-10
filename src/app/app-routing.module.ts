import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { PersonalProfileComponent } from './components/personal-profile/personal-profile.component';
import { CarComponent } from './components/car/car.component';


const routes: Routes = [
  //{path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'car', component: CarComponent},
  {path: 'personal-profile', component: PersonalProfileComponent},
  {path: 'detail-product/:product', component: ProductDetailComponent},
  {path : 'products', component : ProductsComponent},
  {path : 'register', component : RegisterComponent },
  {path: 'dashboard', component: DashboardComponent},
  {path: '*', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
