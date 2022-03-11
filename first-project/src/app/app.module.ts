import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyFirstComponent } from './my-first/my-first.component';
import { MyFirstTwoComponent } from './my-first-two/my-first-two.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    MyFirstTwoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
