import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Podcast } from 'src/app/model/podcast';
import {  BehaviorSubject } from 'rxjs';
import {  map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PodcastsService {
  podcast: Podcast;
  podcast$: BehaviorSubject<Podcast> = new BehaviorSubject<Podcast>(null);

  constructor(private http: HttpClient) {
    // Make the HTTP request:
  }

  getPodcast() {
    this.http.get('/assets/data/podcasts.json').subscribe((data: Podcast) => {
      this.podcast$.next(data);
      console.log(this.podcast);
    });

  }
}
