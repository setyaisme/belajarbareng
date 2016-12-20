import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" [routerLink]="['/']">Project Angular</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['/']">Home</a></li>
            <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['/about']">About</a></li>
            <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['/contact']">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container">
      <div class="outer-outlet">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class AppComponent  { }
