import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { FlightFinderComponent } from './flight-finder.component';
import { SharedModule } from '../shared/shared.module';
import { FlightRoutingModule } from './flight-routing.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';
import {
  TranslateModule,
  TranslateLoader,
  TranslateStore,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
export function FlightHttpLoaderFactory(http) {
  return new TranslateHttpLoader(http, './assets/i18n/flight-finder/', '.json');
}

@NgModule({
  declarations: [FlightDetailsComponent, FlightFinderComponent],
  imports: [
    CommonModule,
    FlightRoutingModule,
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    SliderModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: FlightHttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
})
export class FlightFinderModule {}
