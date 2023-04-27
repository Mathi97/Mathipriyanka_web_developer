import { Component, ViewEncapsulation, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CardComponent implements OnChanges {
  @Input() public movieDetails: any;
  @Input() public theatreDetails: any;

  @Output() public handleSelectMovieEvent = new EventEmitter<any>();

  constructor() {

  }


  ngOnChanges() {
    console.log(this.movieDetails, 'movieDetails', this.theatreDetails);

  }

  public handleSelectMovie = (movie: any) => {
    this.handleSelectMovieEvent.emit(movie);
  }
}
