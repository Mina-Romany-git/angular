import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Assignment } from './add-assignment/assignment.model';
import { Course } from './add-assignment/course.model';

@Injectable({
  providedIn: 'root',
})
export class AssignmentService {
  private baseUrl = 'http://localhost:3000';

  private assignmentsSubject = new BehaviorSubject<Assignment[]>([]);
  assignments$ = this.assignmentsSubject.asObservable();

  constructor(private http: HttpClient) {}

  // Get courses for the dropdown
  getCourses() {
    return this.http.get<Course[]>(`${this.baseUrl}/courses`);
  }

  // Get assignments
  getAssignments() {
    this.http.get<Assignment[]>(`${this.baseUrl}/assignments`).subscribe(
      (assignments) => this.assignmentsSubject.next(assignments)
    );
  }

  // Add new assignment to the JSON server
  addAssignment(newAssignment: Assignment) {
    this.http.post<Assignment>(`${this.baseUrl}/assignments`, newAssignment).subscribe(() => {
      this.getAssignments(); // Refresh the list
    });
  }
}
