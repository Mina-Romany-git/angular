import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';  // <-- Import FormsModule here
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { IcoursesComponent } from './icourses/icourses.component';
import { AddAssignmentComponent } from './add-assignment/add-assignment.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,  
    HomeComponent,
    IcoursesComponent,
    AddAssignmentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule ,
    AppRoutingModule ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
