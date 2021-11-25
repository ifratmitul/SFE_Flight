import { Component, OnInit } from '@angular/core';
import { FlightService } from './flight.service';

@Component({
  selector: 'app-flight-finder',
  templateUrl: './flight-finder.component.html',
  styleUrls: ['./flight-finder.component.scss'],
})
export class FlightFinderComponent implements OnInit {
  constructor(private flightService: FlightService) {}

  ngOnInit(): void {
    this.flightService.getAllFlightData();
  }
}
