import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  @ViewChild('myVideo') myVideo!: ElementRef;

  ngAfterViewInit() {
    const video: HTMLVideoElement = this.myVideo.nativeElement;
    video.muted = true;
  }
}
