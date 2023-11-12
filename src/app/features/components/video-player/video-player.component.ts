import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent {
  @ViewChild('myVideo') myVideo!: ElementRef;

  videoUrl: string = './../assets/header_video.mp4';

  ngAfterViewInit() {
    const video: HTMLVideoElement = this.myVideo.nativeElement;
    video.muted = true;
    video.play();
  }
}
