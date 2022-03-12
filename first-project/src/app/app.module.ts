import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoursesModule } from './courses/courses.module';
import { MyFirstTwoComponent } from './my-first-two/my-first-two.component';
import { MyFirstComponent } from './my-first/my-first.component';


@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    MyFirstTwoComponent
  ],
  imports: [
    BrowserModule,
    CoursesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
