import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { ForgotpwComponent } from './forgotpw/forgotpw.component';
import { BookticketComponent } from './bookticket/bookticket.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { PnrstatusComponent } from './pnrstatus/pnrstatus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CancelticketComponent } from './cancelticket/cancelticket.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"adminHome",component:AdmindashboardComponent},
  
  {path:"userHome",component:UserdashboardComponent},

  {path:"signUp",component:SignupComponent},
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"forgotpw",component:ForgotpwComponent},
  {path: "Bookticket",component:BookticketComponent},
  {path:"Feedback",component:FeedbackComponent},
  {path:"pnrstatus",component:PnrstatusComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"cancelticket",component:CancelticketComponent},
  {path:"home",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }