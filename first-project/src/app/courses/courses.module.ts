import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoursesComponent } from './courses.component';
import { CoursesDetailsComponent } from './courses-details/courses-details.component';



@NgModule({
  declarations: [
    CoursesComponent,
    CoursesDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CoursesComponent
  ]
})
export class CoursesModule { }
