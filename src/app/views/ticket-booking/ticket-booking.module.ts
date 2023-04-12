import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketBookingRoutingModule } from './ticket-booking-routing.module';
import { TicketBookingComponent } from './ticket-booking.component';


@NgModule({
  declarations: [
    TicketBookingComponent
  ],
  imports: [
    CommonModule,
    TicketBookingRoutingModule
  ]
})
export class TicketBookingModule { }
