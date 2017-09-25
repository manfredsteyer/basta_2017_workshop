import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightService } from "./flight-search/flight.service";
import { CONTROL_MODULES } from '../controls';
import { FlightCardComponent } from './flight-card/flight-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    CONTROL_MODULES
  ],
  providers: [
    // FlightService
  ],
  declarations: [
    FlightSearchComponent,
    FlightCardComponent
  ],
  exports: [
    FlightSearchComponent
  ]
})
export class FlightBookingModule { }
