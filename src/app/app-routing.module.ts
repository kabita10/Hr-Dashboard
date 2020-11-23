import { UserJobDetailsComponent } from './user-job-details/user-job-details.component';
import { MultiStepFormComponent } from './multi-step-form/multi-step-form.component';
import { ApplicantsListComponent } from './applicants-list/applicants-list.component';
import { ApplicantsDetailComponent } from './applicants-detail/applicants-detail.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'sign-up', component: SignUpComponent },
{ path: 'user-dashboard', component: UserDashboardComponent },
{ path: 'applicants-detail', component: ApplicantsDetailComponent },
{ path: 'applicant-list', component: ApplicantsListComponent },
{ path: 'form', component: MultiStepFormComponent },
{ path: 'job-details', component: UserJobDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
