import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HrDashboardComponent } from './hr-dashboard/hr-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ApplicantsListComponent } from './applicants-list/applicants-list.component';
import { ApplicantsDetailComponent } from './applicants-detail/applicants-detail.component';
import { MultiStepFormComponent } from './multi-step-form/multi-step-form.component';
import { UserJobDetailsComponent } from './user-job-details/user-job-details.component';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { OwlModule } from 'ngx-owl-carousel';
import { AddJobVacancyComponent } from './add-job-vacancy/add-job-vacancy.component';


@NgModule({
  declarations: [
    AppComponent,
    UserDashboardComponent,
    HrDashboardComponent,
    SignUpComponent,
    ApplicantsListComponent,
    ApplicantsDetailComponent,
    MultiStepFormComponent,
    UserJobDetailsComponent,
    LogInComponent,
    LandingPageComponent,
    AddJobVacancyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    OwlModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
