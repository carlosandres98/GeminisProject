import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductOfertComponent } from './components/product-ofert/product-ofert.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SlideComponent } from './components/slide/slide.component';
import { PersonalProfileComponent } from './components/personal-profile/personal-profile.component';
import { CarComponent } from './components/car/car.component';
import { HelpcenterComponent } from './pages/helpcenter/helpcenter.component';
import { HelpoptionsComponent } from './helpoptions/helpoptions.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
  
    RegisterComponent,
  
    ProductsComponent,
  
    ProductOfertComponent,
  
    ProductCardComponent,
  
    FooterComponent,
  
    ProductDetailComponent,
  
    SlideComponent,
  
    PersonalProfileComponent,
  
    CarComponent,
  
    HelpcenterComponent,
  
    HelpoptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
