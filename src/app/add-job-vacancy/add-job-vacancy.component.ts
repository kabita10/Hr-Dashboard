import { Component, OnInit } from '@angular/core';
import {AuthenticationService } from '../servics/authentication/authentication.service';

@Component({
  selector: 'app-add-job-vacancy',
  templateUrl: './add-job-vacancy.component.html',
  styleUrls: ['./add-job-vacancy.component.scss']
})
export class AddJobVacancyComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.setAuthenticated(true);
   }

  ngOnInit(): void {
  
  }

}
