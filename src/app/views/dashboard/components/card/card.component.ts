import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CardComponent {
  @Input() public movieDetails: any;
  @Input() public theatreDetails: any;

  @Output() public handleSelectMovieEvent = new EventEmitter<any>();

  constructor() {
  }

  public handleSelectMovie = (movie: any) => {
    this.handleSelectMovieEvent.emit(movie);
  }
}
