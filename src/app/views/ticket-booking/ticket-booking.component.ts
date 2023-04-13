import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EMAIL_ID, THEATRE_ROWS, THEATRE_COLS } from 'app/configs/constants';
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
  public rows: string[] = THEATRE_ROWS;
  public cols: number[] = THEATRE_COLS;
  public selectedSeats: Array<any> = [];
  public reserved: any = [];
  public selected: string[] = [];

  public bookingStatus: any;

  constructor(public _dataService: DataService, private _apiService: APIService, private _router: Router) { }

  ngOnInit(): void {
    this.handleReservedSeats();
  }

  private handleReservedSeats = () => {
    this._dataService.theatreDetails?.map((el: any) => {
      el?.booked_seats?.length > 0 && el?.booked_seats.map((elm: any) => {
        const allotedTiming = Object.keys(elm).filter(ele => ele?.includes('time'));

        if (elm?.date === this._dataService.dateInfo.date && this._dataService.selectedSlot.slotDetails.timings == allotedTiming.map((time: any) => { return elm[time] })) {
          const key = Object.keys(elm).filter(ele => ele?.includes('seats'));
          const allotedSeats = key.map((k: any) => JSON.parse(elm[k]));
          allotedSeats.map((eeeee: any) => {
            eeeee?.map((e: any) => {
              if (e >= 1 && e <= 10) { this.reserved.push(`A_${e}`); }
              if (e >= 11 && e <= 20) { this.reserved.push(`B_${e.toString().slice(-1)}`); }
              if (e >= 21 && e <= 30) { this.reserved.push(`C_${e.toString().slice(-1)}`); }
              if (e >= 31 && e <= 40) { this.reserved.push(`D_${e.toString().slice(-1)}`); }
              if (e >= 41 && e <= 50) { this.reserved.push(`E_${e.toString().slice(-1)}`); }
              if (e >= 51 && e <= 60) { this.reserved.push(`F_${e.toString().slice(-1)}`); }
              if (e >= 61 && e <= 70) { this.reserved.push(`G_${e.toString().slice(-1)}`); }
              if (e >= 71 && e <= 80) { this.reserved.push(`H_${e.toString().slice(-1)}`); }
              if (e >= 81 && e <= 90) { this.reserved.push(`I_${e.toString().slice(-1)}`); }
              if (e >= 91 && e <= 100) { this.reserved.push(e.toString().slice(-1) == 0 ? `J_10` : `J_${e.toString().slice(-1)}`); }
            });
          });
        }
      });
    });
  }

  public getStatus = (seatPos: any) => {
    if (this.reserved.indexOf(seatPos) !== -1) { return 'reserved'; } else if (this.selected.indexOf(seatPos) !== -1) { return 'selected'; } else { return }
  }

  public handleGoBack = () => this._router.navigate(['']);

  public seatClicked = (seatPos: any) => {
    const index = this.selected.indexOf(seatPos);
    if (index !== -1) {
      this.selected.splice(index, 1);
    } else {
      if (this.reserved.indexOf(seatPos) === -1)
        this.selected.push(seatPos);
    }
  }

  public showSelected = () => {
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
    });
  }
}
