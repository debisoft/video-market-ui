import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './pages/main/main.component';
import { ShoppingComponent } from './pages/shopping/shopping.component';
import { FooterComponent } from './footer/footer.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { YoutubeVideoPlayerComponent } from './widgets/youtube-video-player/youtube-video-player.component';
import { MatCardModule } from "@angular/material/card";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ShoppingComponent,
    FooterComponent,
    YoutubeVideoPlayerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    YouTubePlayerModule,
    MatCardModule, 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
