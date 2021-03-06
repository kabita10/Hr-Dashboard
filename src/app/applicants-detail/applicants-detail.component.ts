import { Component, OnInit } from '@angular/core';
import {AuthenticationService } from '../servics/authentication/authentication.service';

@Component({
  selector: 'app-applicants-detail',
  templateUrl: './applicants-detail.component.html',
  styleUrls: ['./applicants-detail.component.scss']
})
export class ApplicantsDetailComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.setAuthenticated(true);
   }

  ngOnInit(): void {
  }

}
