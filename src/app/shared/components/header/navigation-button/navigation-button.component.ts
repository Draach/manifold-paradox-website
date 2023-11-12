import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-button',
  templateUrl: './navigation-button.component.html',
  styleUrls: ['./navigation-button.component.scss']
})
export class NavigationButtonComponent {
  @Input() buttonString: string = "";
  @Input() route: string = '/';

  constructor(private router: Router) { }

  navigateToRoute() {
    this.router.navigate([this.route]);
  }
}
