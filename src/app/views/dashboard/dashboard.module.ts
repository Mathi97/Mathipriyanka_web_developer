import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { IndexModule } from './components/index.module';
import { NgImageSliderModule } from 'ng-image-slider';
import { SharedModule } from 'app/shared/index.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    IndexModule,
    NgImageSliderModule,
    SharedModule
  ]
})
export class DashboardModule { }
