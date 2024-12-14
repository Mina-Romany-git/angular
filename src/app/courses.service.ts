
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from './icourses/course.model'; 

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private baseUrl = 'http://localhost:3000/courses'; // Base URL for the courses API

  constructor(private httpClient: HttpClient) {}

  
  getAllCourses(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.baseUrl);
  }

  
  getCourseById(courseId: number): Observable<Course> {
    const url = `${this.baseUrl}/${courseId}`;
    return this.httpClient.get<Course>(url);
  }


  addCourse(newCourse: Course): Observable<Course> {
    return this.httpClient.post<Course>(this.baseUrl, newCourse);
  }

  updateCourse(updatedCourse: Course): Observable<Course> {
    if (!updatedCourse.id) {
      throw new Error('Course ID is required for update.');
    }
    const url = `${this.baseUrl}/${updatedCourse.id}`;
    return this.httpClient.put<Course>(url, updatedCourse);
  }

  deleteCourse(courseId: number): Observable<any> {
    const url = `${this.baseUrl}/${courseId}`;
    return this.httpClient.delete(url);
  }
}