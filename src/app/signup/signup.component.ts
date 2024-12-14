// signup.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  styleUrls: ['./signup.component.css'],
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  userName: string = '';
  email: string = '';
  password: string = '';
  role: number = 0;  // Default role set to 'Student'
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  signup() {
    const signupData = {
      userName: this.userName,
      email: this.email,
      password: this.password,
      role: this.role,  // Include the role field in the signup data
      active: 0,
      approve: 0
    };

    // Check if the email is already in use
    this.http.get<any[]>(`http://localhost:3000/users?email=${this.email}`).subscribe(
      (response: any) => {
        if (response.length > 0) {
          this.errorMessage = 'Email is already registered';
        } else {
          // If email is not taken, create a new user
          this.http.post('http://localhost:3000/users', signupData).subscribe(
            (response) => {
              this.successMessage = 'User created successfully. Please wait for approval.';
              this.router.navigate(['/login']);
            },
            (error) => {
              this.errorMessage = 'An error occurred during sign-up';
            }
          );
        }
      },
      (error) => {
        this.errorMessage = 'An error occurred';
      }
    );
  }
}
