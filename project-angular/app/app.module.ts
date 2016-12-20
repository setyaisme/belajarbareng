import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { AppComponent }  from './app.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, HomeComponent, AboutComponent, ContactComponent ],
  bootstrap:    [ AppComponent ], 
  providers:    [{ provide: APP_BASE_HREF, useValue : '/' }]
})
export class AppModule { }
