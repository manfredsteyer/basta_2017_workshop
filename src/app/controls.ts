import { CovalentDataTableModule, CovalentLayoutModule, CovalentMediaModule } from '@covalent/core';
import {
  MdDialogModule, MdSidenavModule, MdToolbarModule, MdIconModule, MdTooltipModule,
  MdListModule, MdButtonModule, MdInputModule, MdMenuModule, MdCardModule, MdSnackBarModule
} from '@angular/material';
import { NgxChartsModule } from '@swimlane/ngx-charts';


export const CONTROL_MODULES = [
  MdCardModule,
  MdMenuModule,
  MdInputModule,
  MdButtonModule,
  MdListModule,
  MdIconModule,
  MdSidenavModule,
  MdToolbarModule,
  MdTooltipModule,
  MdDialogModule,
  MdSnackBarModule,
  CovalentLayoutModule,
  CovalentMediaModule,
  CovalentDataTableModule,
  NgxChartsModule
];
