import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {AuthenticationService } from './servics/authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hrJobPortal';
  authenticationService: AuthenticationService;

  constructor(authenticationService: AuthenticationService) {this.authenticationService= authenticationService }

  // isLoggedIn$: Observable<boolean> | undefined;
}
