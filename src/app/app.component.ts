import { CountryService } from './services/country.service';
import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Router } from '@angular/router';
import { PodcastsService } from './services/podcasts/podcasts.service';
import { Podcast } from './model/podcast';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'podcast';
  podcast$: Observable<Podcast> = this.podcastService.podcast$;

  constructor( private podcastService: PodcastsService) { }

  ngOnInit() {
    AOS.init();
    this.podcastService.getPodcast();
  }
}
