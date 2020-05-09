import { CountryService } from './services/country.service';
import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Router } from '@angular/router';
import { PodcastsService } from './services/podcasts/podcasts.service';
import { Podcast } from './model/podcast';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'countries';
  podcast: Podcast;

  constructor(public countryService: CountryService, private podcastService: PodcastsService) { }

  ngOnInit() {
    AOS.init();
    this.podcastService.getPodcast().subscribe((data: Podcast) => {
      this.podcast = data;
      console.log(this.podcast);
    });

  }
  changeMode() {
    this.countryService.mode = !this.countryService.mode;
    localStorage.setItem('mode', String(this.countryService.mode));
  }

 
}
