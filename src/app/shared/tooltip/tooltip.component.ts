import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnChanges {
  @Input() public availableSeats: any;
  @Input() public data: any;

  ngOnChanges() {
    // console.log(this.availableSeats,
    //   'availableSeatsavailableSeats', this.data);

  }
}
