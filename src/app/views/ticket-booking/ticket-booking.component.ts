import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { EMAIL_ID } from 'app/configs/constants';

import { Router } from '@angular/router';

import { API_END_POINTS } from 'app/configs/end_points';
import { APIService } from 'app/services/api.service';
import { DataService } from 'app/services/data.service';
import { TICKET_BOOKING } from 'app/configs/interface';


@Component({
  selector: 'app-ticket-booking',
  templateUrl: './ticket-booking.component.html',
  styleUrls: ['./ticket-booking.component.scss']
})
export class TicketBookingComponent implements OnInit {

  constructor(public _dataService: DataService, private _apiService: APIService, private _router: Router) { }

  ngOnInit(): void {
  }


  public rows: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  public cols: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  public selectedSeats: Array<any> = [];

  // reserved: string[] = ['A2', 'A3', 'F5', 'F1', 'F2', 'F6', 'F7', 'F8', 'H1', 'H2', 'H3', 'H4'];
  public reserved: string[] = [];
  public selected: string[] = [];

  public bookingStatus: any;

  //return status of each seat
  getStatus = (seatPos: any) => {
    if (this.reserved.indexOf(seatPos) !== -1) {
      return 'reserved';
    } else if (this.selected.indexOf(seatPos) !== -1) {
      return 'selected';
    } else { return }
  }
  //clear handler
  clearSelected = () => {
    this.selected = [];
  }
  //click handler
  seatClicked = (seatPos: any) => {
    const index = this.selected.indexOf(seatPos);
    if (index !== -1) {
      this.selected.splice(index, 1)
    } else {
      if (this.reserved.indexOf(seatPos) === -1)
        this.selected.push(seatPos);
    }
  }
  //Buy button handler
  showSelected = () => {
    this.selected.map((el: any) => {
      const name = el?.split('_')
      const getSeatNum = name[0] === 'B' ? `1${name[1]}` : name[0] === 'C' ? `2${name[1]}` : name[0] === 'D' ? `3${name[1]}`
        : name[0] === 'E' ? `4${name[1]}` : name[0] === 'F' ? `5${name[1]}` : name[0] === 'G' ? `6${name[1]}` : name[0] === 'H' ?
          `7${name[1]}` : name[0] === 'I' ? `8${name[1]}` : (name[0] === 'J' && name[1] === '10') ? `${name[1]}0` : name[0] === 'J' ? `9${name[1]}` : `${name[1]}`
      this.selectedSeats.push(+getSeatNum);
    });

    const reqObj: TICKET_BOOKING = {
      show_time: this._dataService.selectedSlot.slotDetails.timings,
      movie_name: this._dataService.selectedSlot.slotDetails.movie,
      theatre_name: this._dataService.selectedSlot.theatreDetails.theatre_name,
      booked_seats: JSON.stringify([...new Set(this.selectedSeats)]),
      date: this._dataService.dateInfo.date,
      user_mail_id: EMAIL_ID

    }
    this.handleTicketBooking(reqObj);

  }


  private handleTicketBooking = (reqObj: TICKET_BOOKING) => {
    this._apiService.post(`${API_END_POINTS.booking}`, '?action=bookSeats', reqObj).subscribe((res: any) => {
      this.bookingStatus = res?.message;
      console.log(this.bookingStatus, 'bookingStatus');

      // this._router.navigate(['']);
    })
  }

}
