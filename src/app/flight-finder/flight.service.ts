import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BusyService } from '../core/services/busy.service';
import { FlightDetails } from '../shared/models/IFlightDetails';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  private apiUrl = 'https://nmflightapi.azurewebsites.net/api/flight';

  private flightData: FlightDetails[];

  constructor(
    private http: HttpClient,
    private busyService: BusyService,
    private tostr: ToastrService
  ) {}

  getAllFlightData() {
    this.busyService.busy();
    this.http.get(this.apiUrl).subscribe((res: FlightDetails[]) => {
      this.flightData = [...res];
      console.log(this.flightData);
    });
  }

  search(searchParam) {
    this.busyService.busy();
    return this.http.get(this.apiUrl);
  }
}
