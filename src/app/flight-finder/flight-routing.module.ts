import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightFinderComponent } from './flight-finder.component';

const routes: Routes = [{ path: '', component: FlightFinderComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlightRoutingModule {}
