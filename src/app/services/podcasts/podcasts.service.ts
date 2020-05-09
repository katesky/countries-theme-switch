import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Podcast } from 'src/app/model/podcast';

@Injectable({
  providedIn: 'root',
})
export class PodcastsService {
  podcast: Podcast;

  constructor(private http: HttpClient) {
    // Make the HTTP request:
  }

  getPodcast() {
    return this.http.get('/assets/data/podcasts.json');
  }
}
