// home.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) {}

  //Navigate to the login page
  // goToLogin() {
  //   this.router.navigate(['../login/login.component.html']);
  // }

  // // Navigate to the sign-up page
  // goToSignUp() {
  //   this.router.navigate(['../signup/signup.component.html']);
  // }

  goToLogin() {
    this.router.navigate(['/login']); // Route path, not file path
  }
  
  goToSignUp() {
    this.router.navigate(['/signup']); // Route path, not file path
  }
  
}
