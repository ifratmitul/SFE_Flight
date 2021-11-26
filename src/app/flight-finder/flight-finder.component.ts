import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BusyService } from '../core/services/busy.service';
import { FlightDetails } from '../shared/models/IFlightDetails';
import { FlightService } from './flight.service';

@Component({
  selector: 'app-flight-finder',
  templateUrl: './flight-finder.component.html',
  styleUrls: ['./flight-finder.component.scss'],
})
export class FlightFinderComponent implements OnInit {
  constructor(
    private flightService: FlightService,
    private toatr: ToastrService,
    private busyService: BusyService
  ) {}
  searchForm: FormGroup;
  Data: FlightDetails[] = [];
  rangeValues: number[] = [0, 16000];
  filterMode: boolean;

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm() {
    this.searchForm = new FormGroup({
      DepartureAirportCode: new FormControl('MEl', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(3),
      ]),
      ArrivalAirportCode: new FormControl('LHR', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(3),
      ]),
      DepartureDate: new FormControl(
        new Date('2012-12-24T00:00:00+11:00'),
        Validators.required
      ),
      ReturnDate: new FormControl(
        new Date('2013-01-03T00:00:00+11:00'),
        Validators.required
      ),
    });
  }

  onSearch() {
    this.filterMode = false;
    this.rangeValues = [0, 16000];
    console.log(this.searchForm);
    this.flightService.search(this.searchForm.value).subscribe(
      (res: FlightDetails[]) => {
        this.Data = [...res];
      },
      (err) => {
        this.toatr.error(err.message);
        this.busyService.idle();
      }
    );
  }

  advanceFilter() {
    new Promise((resolve, reject) => {
      this.flightService.search(this.searchForm.value).subscribe(
        (res: FlightDetails[]) => {
          this.Data = [...res];
          if (res.length) {
            this.filterMode = true;
            resolve(this.Data);
          }
        },
        (err) => {
          this.toatr.error(err.message);
          this.busyService.idle();
          reject();
        }
      );
    })
      .then((res) => {
        this.FilterInternal();
      })
      .catch((err) => {});
  }

  private FilterInternal() {
    let data = [];
    data = this.Data.filter(
      (item) =>
        item.TotalAmount >= this.rangeValues[0] &&
        item.TotalAmount <= this.rangeValues[1]
    );
    this.Data = [...data];
  }

  ResetFilter() {
    this.rangeValues = [0, 16000];
    this.advanceFilter();
  }
}
