//  login.component.ts
// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';
// @Component({
//   selector: 'app-login',
//   styleUrls: ['./login.component.css'],
//   templateUrl: './login.component.html',
// })
// export class LoginComponent {
//   email: string = '';
//   password: string = '';
//   errorMessage: string = '';

//   constructor(private http: HttpClient, private router: Router) {}

//   login() {
//     const loginData = { email: this.email, password: this.password };
//     this.http.get<any[]>(`http://localhost:3000/users?email=${this.email}&password=${this.password}`).subscribe(
//       (response: any) => {
//         if (response.length === 0) {
//           this.errorMessage = 'Invalid credentials';
//         } else {
//           const user = response[0];
//           if (user.active === 0) {
//             this.errorMessage = 'Account is not active';
//           } else if (user.approve === 0) {
//             this.errorMessage = 'Account is not approved';
//           } else if (user.role === 1) {
//             alert('Login Successful');
//             this.router.navigate(['../icourses/icourses.component.html']);
//           }else{
//             alert('Login Successful');
//             this.router.navigate(['/home']);
//           }
//         }
//       },
//       (error) => {
//         this.errorMessage = 'An error occurred during login';
//       }
//     );
//   }
// }
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.css'],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    const loginData = { email: this.email, password: this.password };
    this.http.get<any[]>(`http://localhost:3000/users?email=${this.email}&password=${this.password}`).subscribe(
      (response: any) => {
        if (response.length === 0) {
          this.errorMessage = 'Invalid credentials';
        } 
        else {
          const user = response[0];
          if (user.active === 0) {
            this.errorMessage = 'Account is not active';
          } else if (user.approve === 0) {
            this.errorMessage = 'Account is not approved';
          } else {
            // alert('Login Successful');
            if (user.role === 1) {
              this.router.navigate(['/icourses']);  
            } else if (user.role === 0) {
              this.router.navigate(['./student']); 
            }
          }
        }
      },
      (error) => {
        this.errorMessage = 'An error occurred during login';
      }
    );
  }
  
}
