import { Component, OnInit } from '@angular/core';
import {AuthenticationService } from '../servics/authentication/authentication.service';

@Component({
  selector: 'app-hr-dashboard',
  templateUrl: './hr-dashboard.component.html',
  styleUrls: ['./hr-dashboard.component.scss']
})
export class HrDashboardComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.setAuthenticated(true);
   }

  ngOnInit(): void {
  }

}
