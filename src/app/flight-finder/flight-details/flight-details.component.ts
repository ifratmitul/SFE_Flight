import { Component, Input, OnInit } from '@angular/core';
import { FlightDetails } from 'src/app/shared/models/IFlightDetails';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.scss'],
})
export class FlightDetailsComponent implements OnInit {
  @Input() FlightDetails: FlightDetails;
  constructor() {}

  ngOnInit(): void {}
}
