import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { provideAnimations } from '@angular/platform-browser/animations';
import { NavbarComponent } from './app/components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: "./main.html",
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, { 
    providers: [provideAnimations()]
});
