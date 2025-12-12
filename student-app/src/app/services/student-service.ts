import { student } from './../models/student';
import { Injectable } from '@angular/core';
import { studentclass } from '../models/student';


@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private students: studentclass[] = [
    new studentclass(1, 'Swagath', 'class 7','Male', 'Reading', 'Maths'),
    new studentclass(2, 'Ganesh', 'class 8','Male', 'Football', 'Science')
  ];
  getStudents(): studentclass[] {
    return this.students;
  } 
  addStudent(student: any ){
    const nextId=this.students.length>0 ? Math.max(...this.students.map(s=>s.id))+1 : 1;
    const student1=new studentclass(nextId, 
      student.name,
      student.className,
      student.gender,
      student.hobby,
      student.favouriteSubject);

    this.students.push(student1);
  }
}
