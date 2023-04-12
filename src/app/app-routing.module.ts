import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { TicketBookingComponent } from './views/ticket-booking/ticket-booking.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then(m => m.DashboardModule),
      }
    ],
  },
  {
    path: '',
    component: TicketBookingComponent,
    children: [
      {
        path: 'ticket-booking',
        loadChildren: () =>
          import('./views/ticket-booking/ticket-booking.module').then(m => m.TicketBookingModule),
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
