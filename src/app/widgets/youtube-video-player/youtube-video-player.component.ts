import { Component, OnInit, OnDestroy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-youtube-video-player',
  templateUrl: './youtube-video-player.component.html',
  styleUrls: ['./youtube-video-player.component.scss']
})
export class YoutubeVideoPlayerComponent implements OnInit, OnChanges, OnDestroy {
  private apiLoaded = false;

  @Input() videoId: string = 'sW6gAQItAzc';
  @Input() homepageLink: string = '';
  @Input() title: string = '';

  currentSnackBarRef:any = null;

  fg_video_ended = false;
  fg_video_paused = false;

  constructor(private _snackbar: MatSnackBar) { }

  ngOnInit(): void {
    if(!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }

  }

  ngOnDestroy()
  {
    if(this.currentSnackBarRef != null)
      this.currentSnackBarRef.dismiss();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.currentSnackBarRef != null)
      this.currentSnackBarRef.dismiss();

      //console.log(this.currentSnackBarRef);
      this.fg_video_ended = false;
  }

  onStateChange(event: YT.OnStateChangeEvent)
  {
    /*
      YT.PlayerState.ENDED
      YT.PlayerState.PLAYING
      YT.PlayerState.PAUSED
      YT.PlayerState.BUFFERING
      YT.PlayerState.CUED
    */
    //console.log(event.data);

    if(event.data==YT.PlayerState.ENDED)
    {
      //this.dialog.open();
        this.showHomepageLink();

      this.fg_video_ended = true;
      this.fg_video_paused = false
    }
    else if(event.data==YT.PlayerState.PAUSED){
      this.fg_video_paused = true;
      this.fg_video_ended = false;
    }
    else
    {
        this.fg_video_paused = false
        this.fg_video_ended = false;

    }

  }

  showHomepageLink()
  {
    let snackBarRef = this._snackbar.open("Visit " + this.title + "?", "Go!!", {duration: 20000, verticalPosition: 'top'});
    snackBarRef.onAction().subscribe(
        () => window.open(this.homepageLink, '_blank')
    );
    this.currentSnackBarRef = snackBarRef;
  }


  onMouseover(event: any)
  {
    if(this.fg_video_ended || this.fg_video_paused)
      this.showHomepageLink();
  }
}
