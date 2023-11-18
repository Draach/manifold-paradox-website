import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landing',
  standalone: true,
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export default class LandingComponent {
  @ViewChild('myVideo') myVideo!: ElementRef;

  ngAfterViewInit() {
    const video: HTMLVideoElement = this.myVideo.nativeElement;
    video.muted = true;
  }
}
