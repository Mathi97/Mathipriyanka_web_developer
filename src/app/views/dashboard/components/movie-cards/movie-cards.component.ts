import { Component, ViewEncapsulation, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-movie-cards',
  templateUrl: './movie-cards.component.html',
  styleUrls: ['./movie-cards.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MovieCardsComponent implements OnChanges {
  @Input() public movieDetails: Array<any> = [];
  @Input() public theatreDetails: Array<any> = [];
  @Input() public weekDays: Array<any> = [];
  @Input() public selectedDate: string = '';

  @Output() public handleSelectedDateEvent = new EventEmitter<any>();
  @Output() public handleBookTicketEvent = new EventEmitter<any>();


  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;
    config.interval = 500000;
    config.wrap = false;
    config.keyboard = true;
    config.pauseOnHover = true;
  }


  ngOnChanges() {
  }

  public handleSelectedDate = (tabData: any) => this.handleSelectedDateEvent.emit(tabData);
  // public handleBookTicket = (...data: any) => this.handleBookTicketEvent.emit(...data);

  public handleBookTicket = (slotDetails: any, theatreDetails: any, movieDetails: any, selectedDate: any) => this.handleBookTicketEvent.emit({ slotDetails, theatreDetails, movieDetails, selectedDate });
}
