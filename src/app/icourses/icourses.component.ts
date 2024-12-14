
// import { Component, OnInit } from '@angular/core';
// import { CoursesService } from '../courses.service';
// import { Course } from './course.model';

// @Component({
//   selector: 'app-icourses',
//   styleUrls: ['./icourses.component.css'],
//   templateUrl: './icourses.component.html'

// })
// export class IcoursesComponent implements OnInit {
//   courses: Course[] = [];
//   newCourse: Course = { name: '' };
//   selectedCourse: Course | null = null;
//   editCourse: Course | null = null;

//   constructor(private coursesService: CoursesService) {}

//   ngOnInit(): void {
//     this.loadCourses();
//   }

  
//   loadCourses(): void {
//     this.coursesService.getAllCourses().subscribe(
//       (data) => this.courses = data,
//       (error) => console.error('Error fetching courses:', error)
//     );
//   }

 
//   addCourse(): void {
//     if (!this.newCourse.name.trim()) {
//       return; 
//     }

//     this.coursesService.addCourse(this.newCourse).subscribe(
//       (course) => {
//         this.courses.push(course);
//         this.newCourse = { name: '' }; 
//       },
//       (error) => console.error('Error adding course:', error)
//     );
//   }

// updateCourse(): void {
//   if (!this.editCourse) return;

//   this.coursesService.updateCourse(this.editCourse).subscribe(
//     (updatedCourse) => {
//       const index = this.courses.findIndex(c => c.id === updatedCourse.id);
//       if (index !== -1) {
//         this.courses[index] = updatedCourse;
//       }
//       this.editCourse = null; 
//     },
//     (error) => console.error('Error updating course:', error)
//   );
// }


//   deleteCourse(courseId: number): void {
//     this.coursesService.deleteCourse(courseId).subscribe(
//       () => {
//         this.courses = this.courses.filter(course => course.id !== courseId);
//       },
//       (error) => console.error('Error deleting course:', error)
//     );
//   }
// enableEdit(course: Course): void {
//   this.editCourse = { ...course }; // Create a copy to avoid immediate changes
// }

//   cancelEdit(): void {
//     this.editCourse = null; // Reset the edit state
//   }
// }
import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { Course } from './course.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-icourses',
  styleUrls: ['./icourses.component.css'],
  templateUrl: './icourses.component.html',
})
export class IcoursesComponent implements OnInit {
  courses: Course[] = [];
  newCourse: Course = { name: '' };
  editCourse: Course | null = null;
  
  constructor(private coursesService: CoursesService, private router: Router) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.coursesService.getAllCourses().subscribe(
      (data) => this.courses = data,
      (error) => console.error('Error fetching courses:', error)
    );
  }

  addCourse(): void {
    if (!this.newCourse.name.trim()) {
      return; // Prevent adding if course name is empty
    }
    this.coursesService.addCourse(this.newCourse).subscribe(
      (course) => {
        this.courses.push(course);
        this.newCourse = { name: '' };
      },
      (error) => console.error('Error adding course:', error)
    );
  }

  updateCourse(): void {
    if (!this.editCourse) return;
    this.coursesService.updateCourse(this.editCourse).subscribe(
      (updatedCourse) => {
        const index = this.courses.findIndex(c => c.id === updatedCourse.id);
        if (index !== -1) {
          this.courses[index] = updatedCourse;
        }
        this.editCourse = null; // Reset edit mode
      },
      (error) => console.error('Error updating course:', error)
    );
  }

  deleteCourse(courseId: number): void {
    this.coursesService.deleteCourse(courseId).subscribe(
      () => {
        this.courses = this.courses.filter(course => course.id !== courseId);
      },
      (error) => console.error('Error deleting course:', error)
    );
  }

  enableEdit(course: Course): void {
    this.editCourse = { ...course }; // Create a copy to avoid immediate changes
  }

  cancelEdit(): void {
    this.editCourse = null; // Reset the edit state
  }
  navigateToAddAssignment(): void {
    this.router.navigate(['/add-assignment']); // Navigate to the route, not the HTML file
  }
}

