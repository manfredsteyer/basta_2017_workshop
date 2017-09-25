import { Component } from '@angular/core';
import { single, multi } from './data';

import { TdDigitsPipe } from '@covalent/core';

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

  // Chart
  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = false;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = '';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Requests';

  colorScheme: any = {
    domain: ['#1565C0', '#03A9F4', '#FFA726', '#FFCC80'],
  };

  // line, area
  autoScale: boolean = true;

  constructor() {
    // Chart Single
    Object.assign(this, {single});
    // Chart Multi
    this.multi = multi.map((group: any) => {
      group.series = group.series.map((dataItem: any) => {
        dataItem.name = new Date(dataItem.name);
        return dataItem;
      });
      return group;
    });
  }

  // ngx transform using covalent digits pipe
  axisDigits(val: any): any {
    return new TdDigitsPipe().transform(val);
  }
}
