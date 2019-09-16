import {Component, Input, OnInit} from '@angular/core';
import { Student } from './student.model';

@Component({
  selector: 'jad-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.less']
})
export class StudentComponent implements OnInit {

  @Input() private Student: Student;

  constructor() {}

  ngOnInit() {}
}
