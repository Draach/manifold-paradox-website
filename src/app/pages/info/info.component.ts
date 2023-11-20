import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-info',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],

})
export default class InfoComponent {
  imageUrl = signal("https://res.cloudinary.com/daxhopqbg/image/upload/v1700516832/manifold-paradox/Web/info_mobile_spanish_pxb5br.png");

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.setResponsiveString((event.target as Window).innerWidth);
  }

  constructor() {
    // Initialize the string based on the initial viewport width
    this.setResponsiveString(window.innerWidth);
  }

  private setResponsiveString(viewportWidth: number): void {
    console.log(`Current width ${viewportWidth}`)
    // Customize this logic based on your specific requirements
    if (viewportWidth < 768) {
      this.imageUrl.update(value => 'https://res.cloudinary.com/daxhopqbg/image/upload/v1700516832/manifold-paradox/Web/info_mobile_spanish_pxb5br.png');
    } else {
      this.imageUrl.update(value => 'https://res.cloudinary.com/daxhopqbg/image/upload/v1700516833/manifold-paradox/Web/info_desktop_spanish_njziai.png');
    }
  }
}
