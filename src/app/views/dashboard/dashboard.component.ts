import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { API_END_POINTS } from 'app/configs/end_points';
import { APIService } from 'app/services/api.service';
import { THEATRE_MOVIE_INFO } from 'app/configs/interface';
import { LANGUAGES } from 'app/configs/constants';
import { DataService } from 'app/services/data.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private movieList: Array<any> = [];
  public movieDetails: Array<any> = [];
  public theatreDetails: Array<any> = [];
  public weekDays: Array<any> = [];
  public selectedDate: string = '';
  public selectedSlot: any;
  private showDetails: any = {
    show1: [], show2: [], show3: [], show4: []
  };
  public languages: Array<any> = LANGUAGES;
  public dateInfo: any;
  public selectedLang: string = 'All';
  public selectedMovie: any = {};
  public showPopup: boolean = false;

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
        this.movieList = res?.movies
        this.movieDetails = res?.movies;
        this.handleSeatsAvailability();
      } catch (error) {
        this.movieDetails = [];
      }
    });
  }

  private handleSeatsAvailability = () => {
    this.theatreDetails.map(el => {
      el?.booked_seats?.length > 0 && el?.booked_seats.map((ele: any) => {
        if (this._dataService.dateInfo?.date === ele?.date) {
        }
      })
    })
  }

  private getDateList = () => {
    const currentDate = moment().format('YYYY-MM-DD');
    const currentDay = moment().format('ddd');
    this._dataService.dateInfo = { date: moment().format('DD/MM/YYYY'), day: currentDay };
    this.selectedDate = currentDay;
    var days = [];
    for (var i = 0; i <= 6; i++) {
      days.push({ date: moment(currentDate).add(i, 'days').format("DD/MM/YYYY"), day: moment(currentDate).add(i, 'days').format("dddd") });
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
    this._dataService.theatreDetails = this.theatreDetails;
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

  public handleBookTicket = (slotDetails: any, theatreDetails: any, movieDetails: any, selectedDate: any) => {
    this._dataService.selectedSlot = { slotDetails, theatreDetails, movieDetails, selectedDate };
    this._router.navigate(['/ticket-booking'], { queryParams: { movie: slotDetails?.movie } });
  }


  public handleSelectLang = (lang: string) => {
    this.selectedLang = lang;
    this.movieDetails = lang === 'All' ? this.movieList : this.movieList.filter(el => el?.language.includes(lang));
  }

  public handleSelectLangPopup = (lang: string) => {
    this.selectedLang = lang;
    this.movieDetails = lang === 'All' ? this.movieList : this.movieList.filter(el => el?.language.includes(lang));
  }



  public handleSelectMovie = (movieDetais: any) => {
    this.selectedMovie = movieDetais;
    this.showPopup = true;
  }
}
