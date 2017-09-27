import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightService } from '../flight-search/flight.service';
import { Flight } from '../../entities/flight';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css']
})
export class FlightEditComponent implements OnInit {

  id: string;
  showDetails: string;
  flight: Flight;

  constructor(
    private route: ActivatedRoute,
    private snackBar: MdSnackBar,
    private flightService: FlightService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      p => {
        this.id = p['id'];
        this.showDetails = p['showDetails'];
        this.load();
      }
    );
  }

  load(): void {

    this.flightService.findById(this.id).subscribe(
      flight => { this.flight = flight; },
      err => { this.snackBar.open('Fehler beim Laden', 'OK', {duration: 3000}); }
    );
  }

  save(): void {
    this.flightService.save(this.flight).subscribe(
      flight => {
        this.flight = flight;
        this.snackBar.open('Erfolgreich gespeichert!', 'OK', {duration: 3000});
      },
      err => { this.snackBar.open('Fehler beim Speichern', 'OK', {duration: 3000}); }
    );
  }
}
