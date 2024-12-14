import { Component, OnInit } from '@angular/core';
import { AssignmentService } from '../assignment-service.service';
import { Assignment } from './assignment.model';
import { Course } from './course.model';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css'],
})
export class AddAssignmentComponent implements OnInit {
  newAssignment: Assignment = {
    course_id: '',
    question: '',
    answers: '',
  };

  courses: Course[] = [];
  successMessage: string = '';

  constructor(private assignmentService: AssignmentService) {}

  ngOnInit() {
    
    this.assignmentService.getCourses().subscribe((data) => {
      this.courses = data;
    });

    // Fetch assignments to ensure synchronization
    this.assignmentService.getAssignments();
  }

  addAssignment() {
    if (this.newAssignment.question.trim() && this.newAssignment.course_id &&  this.newAssignment.answers.trim()) {
      this.newAssignment.id = (Math.random() + 1).toString(36).substring(7);

      this.assignmentService.addAssignment(this.newAssignment);

      this.successMessage = 'Assignment added successfully!';

      this.newAssignment = {
        course_id: '',
        question: '',
        answers: '',
      };
    } else {
      this.successMessage = 'Please fill out all fields! ,include answers please ! ';
    }
  }
}
