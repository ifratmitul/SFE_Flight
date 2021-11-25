import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { FlightFinderComponent } from './flight-finder.component';
import { SharedModule } from '../shared/shared.module';
import { FlightRoutingModule } from './flight-routing.module';

@NgModule({
  declarations: [FlightDetailsComponent, FlightFinderComponent],
  imports: [CommonModule, SharedModule, FlightRoutingModule],
})
export class FlightFinderModule {}
