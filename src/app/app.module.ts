import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { MainComponent } from './components/main/main.component';
import { SearchComponent } from './components/search/search.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// Other modules
import { FormsModule } from '@angular/forms';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { ItemService } from './services/item.service';


import { DialogComponent } from './test/dialog/dialog.component';

// Shopping cart
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductService } from './services/product.service';

//Search filter
import { Ng2SearchPipeModule } from 'ng2-search-filter';

//Ratings
import { StarReviewComponent } from './components/star-review/star-review.component';
import { BarRatingModule } from 'ngx-bar-rating';

//Chat bot
import { NbThemeModule, NbLayoutModule, NbChatModule, NbSpinnerModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HttpClientModule } from '@angular/common/http';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { ChatService } from './services/chat.service';

//MDBootstrap


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SearchComponent,
    ProfileComponent,
    SignupComponent,
    LoginComponent,
    NavbarComponent,
    DialogComponent,
    ProductComponent,
    CartComponent,
    StarReviewComponent,
    ChatbotComponent
  ],
  entryComponents: [DialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    MaterialModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    BarRatingModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbChatModule,
    NbSpinnerModule,
    HttpClientModule
  ],
  providers: [ItemService, ProductService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
