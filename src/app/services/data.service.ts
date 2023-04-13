import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DataService {
    public selectedSlot: any;
    public dateInfo: any;
    public theatreDetails: Array<any> = [];
    public reservedSeats: Array<any> = [];
    constructor() {
    }

    public handleSeatAllotment = (seatNum: number) => {
        if (seatNum >= 1 && seatNum <= 10) {
            this.reservedSeats.push(`A_${seatNum}`)
            return this.reservedSeats;
        }
        if (seatNum >= 11 && seatNum <= 20) {
            this.reservedSeats.push(`B_${seatNum}`)
            return this.reservedSeats;
        }
        if (seatNum >= 21 && seatNum <= 30) {
            this.reservedSeats.push(`C_${seatNum}`)
            return this.reservedSeats;
        }
        if (seatNum >= 31 && seatNum <= 40) {
            this.reservedSeats.push(`D_${seatNum}`)
            return this.reservedSeats;
        }
        if (seatNum >= 41 && seatNum <= 50) {
            this.reservedSeats.push(`E_${seatNum}`)
            return this.reservedSeats;
        }
        if (seatNum >= 51 && seatNum <= 60) {
            this.reservedSeats.push(`F_${seatNum}`)
            return this.reservedSeats;
        }
        if (seatNum >= 61 && seatNum <= 70) {
            this.reservedSeats.push(`G_${seatNum}`)
            return this.reservedSeats;
        }
        if (seatNum >= 71 && seatNum <= 80) {
            this.reservedSeats.push(`H_${seatNum}`)
            return this.reservedSeats;
        }
        if (seatNum >= 81 && seatNum <= 90) {
            this.reservedSeats.push(`I_${seatNum}`)
            return this.reservedSeats;
        }
        if (seatNum >= 91 && seatNum <= 100) {
            this.reservedSeats.push(`J_${seatNum}`)
            return this.reservedSeats;
        }
        return;
    }

}
