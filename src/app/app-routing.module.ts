import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HrDashboardComponent } from './hr-dashboard/hr-dashboard.component';


const routes: Routes = [
  { path: '', component: AppComponent },
{ path: 'dashboard', component: HrDashboardComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
