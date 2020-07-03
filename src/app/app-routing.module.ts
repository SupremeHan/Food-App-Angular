import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components routes
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { MainComponent } from './components/main/main.component';
import { SearchComponent } from './components/search/search.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component'; 
import { ChatbotComponent } from './components/chatbot/chatbot.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent},
  { path: 'login', component: LoginComponent},
  { path: 'main', component: MainComponent},
  { path: 'welcome', component: SearchComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'product', component: ProductComponent},
  { path: 'cart', component: CartComponent},
  { path: 'chatbot', component: ChatbotComponent},
  { path: '', redirectTo: '/main', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
