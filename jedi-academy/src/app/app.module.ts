import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MasterPageComponent } from './master_page/masterpage.component';
import { ButtonComponent } from './Buttons/button.component';
import { HeaderComponent } from './header/header.component';
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [
    MasterPageComponent,
    ButtonComponent,
    HeaderComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class AppModule { }
