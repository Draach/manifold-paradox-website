import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-not-found',
  standalone: true,
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export default class NotFoundComponent {
  imageUrl: string = "https://res.cloudinary.com/daxhopqbg/image/upload/v1700149255/manifold-paradox/notfound_horizontal_spanish_gdgrjo.png";
  @HostListener('window:resize', ['$event'])

  onResize(event: Event): void {
    this.checkScreenWidth();
  }

  ngOnInit(): void {
    this.checkScreenWidth();
  }

  private checkScreenWidth(): void {
    if (window.innerWidth >= 768)
      this.imageUrl = "https://res.cloudinary.com/daxhopqbg/image/upload/v1700149255/manifold-paradox/notfound_horizontal_spanish_gdgrjo.png";
    else
      this.imageUrl = "https://res.cloudinary.com/daxhopqbg/image/upload/v1700149499/manifold-paradox/Web/notfound_vertical_spanish_v2_yxgtdh.png";
  }
}
