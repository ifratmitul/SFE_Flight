import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { FlightFinderComponent } from './flight-finder.component';
import { SharedModule } from '../shared/shared.module';
import { FlightRoutingModule } from './flight-routing.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';

@NgModule({
  declarations: [FlightDetailsComponent, FlightFinderComponent],
  imports: [
    CommonModule,
    SharedModule,
    FlightRoutingModule,
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    SliderModule,
  ],
})
export class FlightFinderModule {}
