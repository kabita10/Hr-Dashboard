import { Component, OnInit } from '@angular/core';
import {AuthenticationService } from '../servics/authentication/authentication.service';
@Component({
  selector: 'app-user-job-details',
  templateUrl: './user-job-details.component.html',
  styleUrls: ['./user-job-details.component.scss']
})
export class UserJobDetailsComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.setAuthenticated(true);
   }

  ngOnInit(): void {
  }

}
