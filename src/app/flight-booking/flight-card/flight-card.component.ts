import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Flight } from '../../entities/flight';

@Component({
  selector: 'flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css']
})
export class FlightCardComponent implements OnInit, OnDestroy, OnChanges {
  @Input() item: Flight;
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();

  constructor() {
    console.debug('ctor', this.selected, this.item);
  }

  ngOnInit() {
    console.debug('init', this.selected, this.item);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.debug('changes', this.selected, this.item);

    if (changes['selected']) {
      console.debug('\tselected changed');
    }
  }

  ngOnDestroy(): void {
    console.debug('destroy', this.selected, this.item);
  }

  select() {
    this.selected = true;
    this.selectedChange.next(this.selected);
  }

  deselect() {
    this.selected = false;
    this.selectedChange.next(this.selected);
  }

}
