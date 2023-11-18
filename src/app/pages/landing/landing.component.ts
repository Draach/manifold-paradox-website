import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landing',
  standalone: true,
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  imports: [CommonModule]
})
export default class LandingComponent {
  @ViewChild('myVideo') myVideo!: ElementRef;
  public readonly videoUrl: string = "https://res.cloudinary.com/daxhopqbg/video/upload/v1700105121/manifold-paradox/header_video_niv01i.mp4";
  public readyToDisplay: boolean = false;

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
    localStorage.setItem('videoCurrentTime', currentTime.toString());
  }
}
