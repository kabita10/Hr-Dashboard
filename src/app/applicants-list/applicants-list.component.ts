import { Component, OnInit } from '@angular/core';
import {AuthenticationService } from '../servics/authentication/authentication.service';

@Component({
  selector: 'app-applicants-list',
  templateUrl: './applicants-list.component.html',
  styleUrls: ['./applicants-list.component.scss']
})
export class ApplicantsListComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.setAuthenticated(true);
   }

  ngOnInit(): void {
  }

}
