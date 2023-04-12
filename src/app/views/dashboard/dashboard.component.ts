import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { API_END_POINTS } from 'app/configs/end_points';
import { APIService } from 'app/services/api.service';
import { THEATRE_MOVIE_INFO } from 'app/configs/interface';
import { RESPONSE } from 'app/configs/constants';
import { DataService } from 'app/services/data.service';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public movieDetails: Array<any> = [];
  public theatreDetails: Array<any> = [];
  public weekDays: Array<any> = [];
  public selectedDate: string = '';
  public selectedSlot: any;
  private showDetails: any = {
    show1: [], show2: [], show3: [], show4: []
  };
  public dateInfo: any;

  constructor(private _apiService: APIService, private _router: Router, private _dataService: DataService) { }

  ngOnInit(): void {
    this.getMovieInfo();
    this.getDateList();
  }


  private getMovieInfo = () => {
    const reqObj: THEATRE_MOVIE_INFO = {
      user_mail_id: 'mathi19ab@gmail.com'
    }
    this._apiService.post(`${API_END_POINTS.info}`, '?action=getAllDetails', reqObj).subscribe((res: any) => {
      try {
        this.handleTheatres(res?.theatre);
        this.handleMovies(res?.movies);
        this.movieDetails = res?.movies;
        this.handleSeatsAvailability();
      } catch (error) {
        this.movieDetails = [];
      }
    });
  }

  private handleSeatsAvailability = () => {
    // this.theatreDetails.map(el => {
    //   el?.booked_seats?.length > 0 && (el?.booked_seats.map((ele: any) => {
    //     el?.available_movies.map((e: any) => {
    //       el[e].map((elem: any) => {
    //         if (ele?.date === this.dateInfo.date && elem?.timings === ele?.show_time) {
    //           console.log(this.dateInfo,

    //             'dateInfo', ele, 'sadfsd', JSON.parse(ele?.show1_booked_seats));
    //           // el['seat_availability'] = {
    //           //   booked_seats: JSON.parse(ele?.show1_booked_seats),
    //           //   available_seats: 100 - JSON.parse(ele?.show1_booked_seats)?.length
    //           // }
    //           ele['available_seats'] = 100 - JSON.parse(ele?.show1_booked_seats)?.length
    //         }
    //       })
    //     })








    //   }))
    // })



  }

  private getDateList = () => {
    const currentDate = moment().format('YYYY-MM-DD');
    const currentDay = moment().format('ddd');
    this._dataService.dateInfo = { date: moment().format('DD/MM/YYYY'), day: currentDay };
    this.selectedDate = currentDay;
    var days = [];
    for (var i = 0; i <= 6; i++) {
      days.push({ date: moment(currentDate).add(i, 'days').format("DD/MM/YYYY"), day: moment(currentDate).add(i, 'days').format("ddd") });
    }
    this.weekDays = days;
  }

  private handleMovies = (moviesList: Array<any>) => {
    moviesList?.map((el: any) => {
      el.tags = el.tags.split(',');
    });
  }

  private handleTheatres = (theatreDetails: Array<any>) => {
    theatreDetails?.map((elm: any) => {
      var shows = [elm?.show1_movie, elm?.show2_movie, elm?.show3_movie,
      elm?.show4_movie];
      elm['available_movies'] = [...new Set(shows)];
      this.handleTimings(elm);
    });
    this.theatreDetails = theatreDetails;
  }

  private handleTimings = (elm: any) => {
    elm?.available_movies?.map((el: any) => {
      if (elm?.show1_movie === el) {
        this.showDetails.show1.push({ movie: elm?.show1_movie, timings: elm?.show1_time });

        elm[el] = this.showDetails.show1;
      }
      if (elm?.show2_movie === el) {
        this.showDetails.show1.push({ movie: elm?.show2_movie, timings: elm?.show2_time });
        elm[el] = this.showDetails.show1;
      }
      if (elm?.show3_movie === el) {
        this.showDetails.show1.push({ movie: elm?.show3_movie, timings: elm?.show3_time });
        elm[el] = this.showDetails.show1;
      }
      if (elm?.show4_movie === el) {
        this.showDetails.show1.push({ movie: elm?.show4_movie, timings: elm?.show4_time });
        elm[el] = this.showDetails.show1;
      }


      elm[el] = elm[el]?.filter((e: any) => e?.movie === el);



    });
  }

  public handleSelectedDate = (tabData: any) => {
    this.selectedDate = tabData?.day;
    this._dataService.dateInfo = tabData;
  }

  public handleBookTicket = (data: any) => {
    const { slotDetails, theatreDetails, movieDetails, selectedDate } = data;
    this._dataService.selectedSlot = data;
    this._router.navigate(['/ticket-booking'], { queryParams: { movie: slotDetails?.movie } });
  }
}
