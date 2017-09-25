import { FlightSearchComponent } from './flight-search.component';

fdescribe('FlightSearchComponent', () => {

  it('should have no loaded flights initially', () => {
    let comp = new FlightSearchComponent(null, null, null);
    expect(comp.flights.length).toBe(0);
  });

});
