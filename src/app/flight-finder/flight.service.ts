import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BusyService } from '../core/services/busy.service';
import { FlightDetails } from '../shared/models/IFlightDetails';
import { SearchForm } from '../shared/models/ISearchForm';

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

  getAllDataforReset() {
    this.busyService.busy();
    return this.http.get(this.apiUrl);
  }
  search(searchParam: SearchForm) {
    this.busyService.busy();

    /*
    Adding Query Param doesn't make any difference
    as back-end always return full array doesn't matter
    if there is any search param or not. Added it just 
    for demo purpose since i'm trying to mimic searching
    */
    return this.http.get(this.apiUrl, {
      params: {
        DepartureAirportCode: searchParam.DepartureAirportCode,
        ArrivalAirportCode: searchParam.ArrivalAirportCode,
        DepartureDate: searchParam.DepartureDate.toString(),
        ReturnDate: searchParam.ReturnDate.toString(),
      },
    });
  }
}
