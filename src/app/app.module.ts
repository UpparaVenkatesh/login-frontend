import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { ForgotpwComponent } from './forgotpw/forgotpw.component';
import { BookticketComponent } from './bookticket/bookticket.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { PnrstatusComponent } from './pnrstatus/pnrstatus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CancelticketComponent } from './cancelticket/cancelticket.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AdmindashboardComponent,
    UserdashboardComponent,
    ForgotpwComponent,
    BookticketComponent,
    FeedbackComponent,
    PnrstatusComponent,
    ContactusComponent,
    CancelticketComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
