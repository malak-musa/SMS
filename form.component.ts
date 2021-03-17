import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector:'form-student',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
 })

export class formStudentComponent {
  studentData: Array<string> = [];
  userName!: string;
  id!: number;
  date!: number;
  gpa!: number;

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
    }
  }
}