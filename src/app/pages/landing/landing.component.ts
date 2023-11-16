import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  @ViewChild('myVideo') myVideo!: ElementRef;

  readyToDisplay: boolean = false;
  videoUrl: string = './../assets/header_video.mp4';

  ngAfterViewInit() {
    setTimeout(() => {
      this.readyToDisplay = false;
      const savedTime = localStorage.getItem('videoCurrentTime');
      const video: HTMLVideoElement = this.myVideo.nativeElement;
      if (savedTime) {
        video.currentTime = parseFloat(savedTime);
      }
      video.muted = true;
      this.readyToDisplay = true;
    }, 0);
  }

  onTimeUpdate(): void {
    let currentTime = this.myVideo.nativeElement.currentTime;
    currentTime += 1;
    if (currentTime > this.myVideo.nativeElement.duration) {
      currentTime = 0;
    }
    localStorage.setItem('videoCurrentTime', currentTime.toString());
  }
}
