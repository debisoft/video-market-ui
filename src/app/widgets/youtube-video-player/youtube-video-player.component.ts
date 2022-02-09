import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-youtube-video-player',
  templateUrl: './youtube-video-player.component.html',
  styleUrls: ['./youtube-video-player.component.scss']
})
export class YoutubeVideoPlayerComponent implements OnInit {
  private apiLoaded = false;

  @Input() videoId: string = 'sW6gAQItAzc';

  constructor() { }

  ngOnInit(): void {
    if(!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }

}
