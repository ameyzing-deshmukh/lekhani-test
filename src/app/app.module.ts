import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { KeypadComponent } from './keypad/keypad.component';
import { ConsoleComponent } from './console/console.component';
import { InformationComponent } from './information/information.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KeypadComponent,
    ConsoleComponent,
    InformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
