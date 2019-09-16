import { Component } from '@angular/core';
import {Student} from '../student/student.model';

@Component({
  selector: 'jad-root',
  templateUrl: './masterpage.component.html',
  styleUrls: ['./masterpage.component.less']
})
export class MasterPageComponent {
  title = 'Jedi Academy';

  private listJedi: Array<Student>;

  constructor() {
    this.listJedi = new Array<Student>();

    this.listJedi.push({ name: 'Luke skywalker', isJedi: true, templeName: 'Consagr Temple' });
    this.listJedi.push({ name: 'Leia', isJedi: false });
    this.listJedi.push({ name: 'han Solo', isJedi: false });
  }

}
