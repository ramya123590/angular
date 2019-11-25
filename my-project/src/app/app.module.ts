import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnquireComponent } from './enquire/enquire.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

import { NavigationComponent } from './navigation/navigation.component';
import { HospitalDetailsComponent } from './hospital-details/hospital-details.component';

import { HospitalNagawaraComponent } from './hospital-nagawara/hospital-nagawara.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AppoinmentFrontComponent } from './appoinment-front/appoinment-front.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { Navigationbar2Component } from './navigationbar2/navigationbar2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OtpformComponent } from './otpform/otpform.component';
import { ConformpasswordformComponent } from './conformpasswordform/conformpasswordform.component';
import { UserIdComponent } from './user-id/user-id.component';
import { EqualValidatorDirective } from './equal-validator.directive';
import { AppointmentComponent } from './appointment/appointment.component';
import { NavigationProfileComponent } from './navigation-profile/navigation-profile.component';
import { DoctorslotComponent } from './doctorslot/doctorslot.component';


@NgModule({
  declarations: [
    AppComponent,
    EnquireComponent,
    HomeComponent,
    FooterComponent,
    NavigationComponent,
    HospitalDetailsComponent,
    HospitalNagawaraComponent,
    ContactFormComponent,
    AppoinmentFrontComponent,
    LoginComponent,
    RegistrationComponent,
    Navigationbar2Component,
    DashboardComponent,
    OtpformComponent,
    ConformpasswordformComponent,
    UserIdComponent,
    EqualValidatorDirective,
    AppointmentComponent,
    NavigationProfileComponent,
    DoctorslotComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{
      path:'Enquire',
      component:EnquireComponent,
      data: {  show: false,shownav:false } 
    },
    {
      path:'',
      component:HomeComponent,
      data: {  show: false,shownav:false }
    },
    {
      path:'login',
      component:LoginComponent,
      data: {  showHeader: false,shownav:false }
    },
    {
      path:'Hospital',
      component:HospitalDetailsComponent,
      data: {  show: false,shownav:false } 
    },
     
    {
      path:'NagawaraHospital',
      component:HospitalNagawaraComponent,
      data: {  show: false,shownav:false }
    },
    {
      path:'contactform',
      component:ContactFormComponent ,
      data: {  show: false,shownav:false }
    },
    {
      path:'appoinment',
      component:AppoinmentFrontComponent,
      data: {  show: false,shownav:false }
    },
    {
      path:'otpform',
      component:OtpformComponent,
      data: { showHeader: false,shownav:false}
    },
    {
      path:'register',
      component:RegistrationComponent,
      data: {  showHeader: false,shownav:false }
    },
    {
      path:'confirmform',
      component:ConformpasswordformComponent,
      data: {  showHeader: false,shownav:false }
    },
    {
      path:'afterlogin',
      component:AppointmentComponent,
      data: {  showHeader: false,show:false }
    },
    {
      path:'shownav',
      component:Navigationbar2Component,
      data: {  showHeader: false ,show:false,showFooter:false }
    },
    {
    path:'docslot',
    component:DoctorslotComponent,
    data: {  showHeader: false ,show:false,}
  },
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
