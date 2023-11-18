import { Component } from '@angular/core';
import { NavigationButtonComponent } from './navigation-button/navigation-button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavigationButtonComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

}
