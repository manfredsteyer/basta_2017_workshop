import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Flight } from '../../entities/flight';

@Injectable()
export class FlightService {

  constructor(private http: HttpClient) { }

  find(from: string, to: string): Observable<Flight[]> {
    let url = 'http://www.angular.at/api/flight';
    let params = new HttpParams()
      .set('from', from)
      .set('to', to);
    let headers = new HttpHeaders()
      .set('Accept', 'application/json');

    return this.http.get<Flight[]>(url, { params, headers});

  }


  findById(id: string): Observable<Flight> {
    let url = 'http://www.angular.at/api/flight';
    let params = new HttpParams()
      .set('id', id);

    let headers = new HttpHeaders()
      .set('Accept', 'application/json');

    return this.http.get<Flight>(url, { params, headers});

  }

  save(flight: Flight): Observable<Flight> {
    let url = 'http://www.angular.at/api/flight';

    let headers = new HttpHeaders()
      .set('Accept', 'application/json');

    return this.http.post<Flight>(url, flight, { headers});
  }

}
