import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fadeInOutAnimation } from './animations/fade-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeInOutAnimation]
})
export class AppComponent {
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.isActivated ? outlet.activatedRoute : '';
  }
}