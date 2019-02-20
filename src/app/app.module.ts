import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { CommonModule } from '@angular/common';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import {NgbModalBackdrop} from "@ng-bootstrap/ng-bootstrap/modal/modal-backdrop";
import {NgbModule, NgbTimepickerConfig} from "@ng-bootstrap/ng-bootstrap";
import {NgbdModalBasic} from "./modal-basic";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    RouterModule.forChild([{ path: '', component: AppComponent }]),
    NgbModule.forRoot(),
    // NgbModule,
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    NgbTimepickerConfig
  ],
  bootstrap: [AppComponent],
  exports: [AppComponent]
})
export class AppModule { }
