import { Component, OnInit } from '@angular/core';
import { FlightService } from './flight-finder/flight.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private flightService: FlightService) {}

  ngOnInit(): void {
    if (localStorage.getItem('lang_for_translation') === null) {
      localStorage.setItem('lang_for_translation', 'en');
    }
  }

  title = 'Flight';
}
