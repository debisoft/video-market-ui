import { Component, OnInit } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { VideoDTO } from 'src/app/models/video-dto';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  videoList: VideoDTO[] = [
    {
      title: 'Mello ScentSations',
      link: 'https://www.youtube.com/watch?v=sW6gAQItAzc'
    },
    
    {
      title: 'House of Knot',
      link: 'https://www.youtube.com/watch?v=DhZBlIj7blM'
    },
    {
      title: 'Violet Aster Boutique',
      link: 'https://www.youtube.com/watch?v=UU0EvYhar1Y'
    },
    {
      title: 'Kids Swag',
      link: 'https://www.youtube.com/watch?v=-0-eMgbyxlE'
    },
    {
      title: 'Sote\'s Skin Care',
      link: 'https://www.youtube.com/watch?v=V0-9JZYVKqw'
    },
    {
      title: 'Shawn Paul Thompson',
      link: 'https://www.youtube.com/watch?v=xpXhEsMuvV4'
    },
    {
      title: 'Aimee Ruoff Art',
      link: 'https://www.youtube.com/watch?v=pTCHGUTVNpQ'
    }
  ];
  currentVideoId = 'sW6gAQItAzc';
  currentVideo = this.videoList[0];

  constructor() { }

  ngOnInit(): void {
    console.log('on init main component');
  }

  setVideo(selection: MatSelectionListChange) {
    this.currentVideo = selection.options[0].value;
    const params = new URL(this.currentVideo.link).searchParams;
    this.currentVideoId = params.get('v') as string;
  }
  // <div [innerHtml]=”myHtmlProperty”></div>
}
