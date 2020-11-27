import { LogInComponent } from './log-in/log-in.component';
import { UserJobDetailsComponent } from './user-job-details/user-job-details.component';
import { MultiStepFormComponent } from './multi-step-form/multi-step-form.component';
import { ApplicantsListComponent } from './applicants-list/applicants-list.component';
import { ApplicantsDetailComponent } from './applicants-detail/applicants-detail.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HrDashboardComponent } from './hr-dashboard/hr-dashboard.component';


const routes: Routes = [
{ path: '', component: AppComponent },
{ path: 'dashboard', component: HrDashboardComponent },
{ path: 'sign-up', component: SignUpComponent },
{ path: 'login', component: LogInComponent },
{ path: 'user-dashboard', component: UserDashboardComponent },
{ path: 'applicants-detail', component: ApplicantsDetailComponent },
{ path: 'applicants-list', component: ApplicantsListComponent },
{ path: 'form', component: MultiStepFormComponent },
{ path: 'job-details', component: UserJobDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
