import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { IcoursesComponent } from './icourses/icourses.component';
import { AddAssignmentComponent } from './add-assignment/add-assignment.component';
const routes: Routes = [
  { path: '', component: HomeComponent },  
  { path: 'signup', component: SignupComponent }, // Home page route
  { path: 'login', component: LoginComponent }, // Login page route
  
  { path: 'icourses', component: IcoursesComponent },
  { path: 'add-assignment', component: AddAssignmentComponent }, 
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
