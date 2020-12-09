import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  isAuthenticated = false
  
  setAuthenticated (authenticated:boolean){
    this.isAuthenticated= authenticated;
    
  }

}
