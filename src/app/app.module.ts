import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FlightSearchComponent } from './flight-booking/flight-search/flight-search.component';
import { FlightService } from './flight-booking/flight-search/flight.service';
import { CityPipe } from './shared/city.pipe';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { CONTROL_MODULES } from './controls';
import { ErrorComponent } from './error/error.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';



@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    FlightBookingModule,
    CONTROL_MODULES,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    ErrorComponent
  ],
  providers: [
    // { provide: FlightService, useClass: FlightService }
    //
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
