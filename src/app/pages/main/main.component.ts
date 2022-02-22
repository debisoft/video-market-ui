import { Component, OnInit } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { VideoDTO } from 'src/app/models/video-dto';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  videoList: VideoDTO[] = [
    {
      title: 'Mello ScentSations',
      link: 'https://www.youtube.com/watch?v=sW6gAQItAzc',
      homepage_link: 'https://melloscentsations.ca'
    },

    {
      title: 'House of Knot',
      link: 'https://www.youtube.com/watch?v=DhZBlIj7blM',
      homepage_link: 'https://www.houseofknot.ca/'
    },
    {
      title: 'Violet Aster Boutique',
      link: 'https://www.youtube.com/watch?v=UU0EvYhar1Y',
      homepage_link: 'https://violetasterboutique.ca/'
    },
    {
      title: 'Kids Swag',
      link: 'https://www.youtube.com/watch?v=-0-eMgbyxlE',
      homepage_link: 'https://kidsswag.ca/'
    },
    {
      title: 'Sote\'s Skin Care',
      link: 'https://www.youtube.com/watch?v=V0-9JZYVKqw',
      homepage_link: 'https://www.sotes.ca/'
    },
    {
      title: 'Shawn Paul Thompson',
      link: 'https://www.youtube.com/watch?v=xpXhEsMuvV4',
      homepage_link: 'https://shawnpaulthompsonart.myshopify.com/'
    },
    {
      title: 'Aimee Ruoff Art',
      link: 'https://www.youtube.com/watch?v=pTCHGUTVNpQ',
      homepage_link: 'https://ruoff.ca/'
    },
    {
      title: 'Hotty Hands and Feet',
      link: 'https://www.youtube.com/watch?v=0stzY_hv3pw',
      homepage_link: 'https://bee23.ca/'
    }
  ];
  currentVideoId = 'sW6gAQItAzc';
  currentHomepageLink = this.videoList[0].homepage_link;
  currentTitle = this.videoList[0].title;
  currentVideo = this.videoList[0];

  httpFormOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded'
    })
  };

  constructor(private http: HttpClient, private meta: Meta) { }

  fixedEncodeURIComponent(str: string): string {
    return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
      return '%' + c.charCodeAt(0).toString(16).toUpperCase();
    });
  }

  ngOnInit(): void {

    this.meta.updateTag({property: 'og:title', content: 'Tenatch Video Market'});
    this.meta.updateTag({property: 'og:url', content: 'http://vidmart.tenatch.com'});
    this.meta.updateTag({property: 'og:image', content: 'http://vidmart.tenatch.com/ui/assets/img/back2.jpg'});
    this.meta.updateTag({property: 'og:description', content: "Happy Valentine's!! Support Local With Tenatch!"});

    console.log('on init main component');
    this.http.get<VideoDTO[]>('/json_get.tsp').subscribe(arr => this.videoList = arr);
  }

  setVideo(selection: MatSelectionListChange) {
    this.currentVideo = selection.options[0].value;
    const params = new URL(this.currentVideo.link).searchParams;
    this.currentVideoId = params.get('v') as string;
    this.currentHomepageLink = this.currentVideo.homepage_link;
    this.currentTitle = this.currentVideo.title;
    console.log("selected: " + selection.options[0].value);
  }

  onClick(index: number)
  {
    console.log("button clicked: " + index);
    //this.http.get<any>('http://localhost:9090/json_reply.tsp').subscribe(reply => console.log(reply.name));

    //this.http.post<any>('http://localhost:9090/json_post.tsp', 'json=' + this.fixedEncodeURIComponent(JSON.stringify(this.videoList[index])), this.httpFormOptions).subscribe(reply => console.log(reply.msg));

  }

  // <div [innerHtml]=”myHtmlProperty”></div>
}
