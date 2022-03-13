import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  private portalName: string;
  protected courses!: string[];

  constructor(
    coursesService: CoursesService;
  ) {
    this.portalName = 'http://loiani.training';
  }

  ngOnInit(): void {
  }

}
