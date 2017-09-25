import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CovalentDataTableModule, CovalentLayoutModule, CovalentMediaModule } from '@covalent/core';
import {
  MdDialogModule, MdSidenavModule, MdToolbarModule, MdIconModule, MdTooltipModule,
  MdListModule, MdButtonModule, MdInputModule, MdMenuModule, MdCardModule, MdSnackBarModule
} from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

const CONTROL_MODULES = [
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


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    CONTROL_MODULES
  ],
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
