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
    const video: HTMLVideoElement = this.myVideo.nativeElement;
    video.muted = true;
  }
}
