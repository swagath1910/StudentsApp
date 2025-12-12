import { Component } from '@angular/core';
import { studentclass } from '../../models/student';
import { StudentService } from '../../services/student-service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-students',
  imports: [CommonModule,RouterLink],
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class Students {
  sList: studentclass[] = [];

  constructor(private studentService: StudentService) {
    this.sList = this.studentService.getStudents();
  }

}
