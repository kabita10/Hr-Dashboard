import { Component, OnInit } from '@angular/core';
import {AuthenticationService } from '../servics/authentication/authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.setAuthenticated(false);
   }

  ngOnInit(): void {
  }

}
