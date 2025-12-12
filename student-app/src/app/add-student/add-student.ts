import { StudentService } from './../services/student-service';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { studentclass } from '../models/student';

@Component({
  standalone: true,
  selector: 'app-add-student',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-student.html',
  styleUrl: './add-student.css',
})
export class AddStudent {
  name = '';
  className = '';
  gender: 'Male' | 'Female' | string = '';
  hashobby = false;
  hobby = '';
  favouriteSubject = '';
  classes = ['class 6', 'class 7', 'class 8', 'class 9'];
  subjects = ['Math', 'Science', 'Social', 'English', 'Hindi'];
  submitting = false;

  constructor(private StudentService: StudentService, private router: Router) {}

  onhashobbychange() {
    if (!this.hashobby) {
      this.hobby = '';
    }
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }
    this.submitting = true;
    const newStudent = new studentclass(
      Date.now(),
      this.name,
      this.className,
      this.gender,
      this.hashobby ? this.hobby || 'No hobby' : 'No hobby',
      this.favouriteSubject || ''
    );
    this.StudentService.addStudent(newStudent);
    this.submitting = false;
    this.router.navigate(['/students']);
  }

  oncancel() {
    this.router.navigate(['/students']);
  }
}