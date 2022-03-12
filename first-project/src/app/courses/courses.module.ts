import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoursesComponent } from './courses.component';



@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CoursesComponent
  ]
})
export class CoursesModule { }
