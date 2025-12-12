import { Routes } from '@angular/router';
import { Students } from './components/students/students';
import { AddStudent } from './add-student/add-student'; 

export const routes: Routes = [
    {path: 'students', component: Students},
    {path: 'add-student', component: AddStudent},   
    {path: '', redirectTo: 'students', pathMatch: 'full'},
];
