import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketBookingRoutingModule } from './ticket-booking-routing.module';
import { TicketBookingComponent } from './ticket-booking.component';
import { SharedModule } from 'app/shared/index.module';


@NgModule({
  declarations: [
    TicketBookingComponent
  ],
  imports: [
    CommonModule,
    TicketBookingRoutingModule,
    SharedModule
  ]
})
export class TicketBookingModule { }
