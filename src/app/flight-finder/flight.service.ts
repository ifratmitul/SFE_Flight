import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FlightDetails } from '../shared/models/IFlightDetails';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  private apiUrl = 'https://nmflightapi.azurewebsites.net/api/flight';

  private flightData: FlightDetails[];

  constructor(private http: HttpClient) {}

  getAllFlightData() {
    this.http.get(this.apiUrl).subscribe((res: FlightDetails[]) => {
      this.flightData = [...res];
      console.log(this.flightData);
    });
  }
}
