import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="starter-template">
      <h1>Welcome to {{name}} Project</h1>
      <p class="lead">Use this document as a way to quickly start any new project.<br> All you get is this text and a mostly barebones HTML document.</p>
    </div>
  `,
  styles: [`
    .starter-template {
      padding: 40px 15px;
      text-align: center;
    }
  `]
})
export class HomeComponent { name = 'Angular'; }