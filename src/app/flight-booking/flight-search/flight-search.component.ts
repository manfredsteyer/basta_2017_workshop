import { Component, OnInit } from '@angular/core';
import { Flight } from '../../entities/flight';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { MdSnackBar } from '@angular/material';
import { FlightService } from "./flight.service";
import { Router } from '@angular/router';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  providers: [FlightService]
})
export class FlightSearchComponent implements OnInit {

  from: string;
  to: string;
  flights: Array<Flight> = [];
  selectedFlight: Flight;
  // test ....
  basket: object = {
    "3": true,
    "5": true
  }
  // private http: HttpClient;

  constructor(
    private flightService: FlightService,
    private snackBar: MdSnackBar,
    private http: HttpClient,
    private router: Router
  ) {
    //this.http = http;
  }

  search(): void {

    this.router.navigate(['.', { from: this.from, to: this.to }]);


    this.flightService
        .find(this.from, this.to)
        .subscribe(
          flights => {
            this.flights = flights;
            this.snackBar.open( this.flights.length + ' flights loaded!', 'OK', { duration: 3000 });
          },
          err => { console.error('Fehler beim Laden', err); }
        );

  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }

  ngOnInit() {
    console.debug('Komponente erzeugt!');
  }

}
