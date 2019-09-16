import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { HttpModule }    from '@angular/http';
import { RouterModule }  from '@angular/router';
import { AppComponent }  from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  bootstrap   : [AppComponent],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports     : [
    BrowserModule,
    HttpModule,
    RouterModule,
  ],
  providers   : [],
})
export class AppModule {

}
