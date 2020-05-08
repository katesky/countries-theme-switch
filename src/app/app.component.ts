import { CountryService } from './services/country.service';
import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'countries';

  constructor(public countryService: CountryService, private router: Router) { }

  ngOnInit() {
    AOS.init();
  }
  changeMode() {
    this.countryService.mode = !this.countryService.mode;
    localStorage.setItem('mode', String(this.countryService.mode));
  }

  goToHomepage() {
    this.router.navigate(['countries']);
  }
}
